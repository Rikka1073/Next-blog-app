"use client";

// import DOMPurify from "dompurify";
// import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "../libs/client";

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

  // const sanitizeText = (html: string) => {
  //   return DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
  // };

  return (
    <div className="container mx-auto">
      <div className="p-8">
        <div className="flex flex-wrap gap-4">
          {blogs &&
            blogs.map((blog) => {
              return (
                <div className="card bg-base-100 w-96 shadow-xl" key={blog.id}>
                  <a href={blog.id}>
                    <div className="card-body">
                      <div>{blog.title}</div>
                      <div>{blog.date}</div>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default page;
