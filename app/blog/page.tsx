"use client";

import { useEffect, useState } from "react";
import { client } from "../libs/client";
import Link from "next/link";
import BlogLayout from "../../components/blog/BlogLayout";
import { usePathname } from "next/navigation";
import BlogHeader from "../../components/blog/BlogHeader";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const url = usePathname();

  useEffect(() => {
    const fetchCms = async () => {
      const data = await client.get({
        endpoint: "blogs",
        queries: { limit: 3 },
      });
      console.log(data.contents);
      setBlogs(data.contents);
    };
    fetchCms();
  }, []);

  return (
    <>
      <BlogHeader url={url} />
      <BlogLayout>
        <div className="flex flex-wrap gap-4">
          {blogs &&
            blogs.map((blog) => {
              return (
                <div className="card bg-base-100 w-96 shadow-xl" key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>
                    <div className="card-body">
                      <div>{blog.title}</div>
                      <div>{blog.date}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </BlogLayout>
    </>
  );
};

export default page;
