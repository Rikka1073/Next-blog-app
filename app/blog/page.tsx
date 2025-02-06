"use client";

import { useEffect, useState } from "react";
import { client } from "../libs/client";
import Link from "next/link";
import BlogLayout from "../../components/blog/BlogLayout";

const page = () => {
  const [blogs, setBlogs] = useState([]);

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
  );
};

export default page;
