"use client";

import React, { useEffect, useState } from "react";
import BlogLayout from "./BlogLayout";
import Image from "next/image";
import Link from "next/link";
import MoreButton from "../MoreButton";
import { client } from "../../app/libs/client";
import { usePathname } from "next/navigation";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogLimiy, setBlogLimit] = useState(3);
  const url = usePathname();
  const blogPageLimit = 15;

  useEffect(() => {
    const fetchCms = async () => {
      const data = await client.get({
        endpoint: "blogs",
        queries: { limit: blogLimiy },
      });
      console.log(data.contents);
      setBlogs(data.contents);
    };
    fetchCms();
  }, [blogLimiy]);

  const onclickMoreButton = () => {
    console.log("もっと見るボタンがクリックされました");
    setBlogLimit((prev) => prev + 3);
    console.log(blogLimiy);
  };

  return (
    <>
      <BlogLayout>
        {/* <h2 className="text-4xl mb-12 text-center">Blogs一覧</h2> */}
        <div className="flex flex-wrap gap-4">
          {blogs &&
            blogs.map((blog) => {
              return (
                <div className="card bg-base-100 w-96 shadow-xl" key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>
                    <div className="card-body">
                      <h3 className="text-lg mb-4 font-bold">{blog.title}</h3>
                      <div>
                        <Image
                          src={blog.eyecatch?.url || "/no-image.png"}
                          width={384}
                          height={300}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </BlogLayout>
      <MoreButton
        onclick={onclickMoreButton}
        text="もっと見る"
        page={blogLimiy}
        limit={blogPageLimit}
      />
    </>
  );
};

export default BlogList;
