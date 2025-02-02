"use client";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { client } from "../libs/client";

const page = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchCms = async () => {
      const data = await client.get({
        endpoint: "blogs",
      });
      setBlogs(data.contents);
    };
    fetchCms();
  }, []);

  const sanitizeText = (html: string) => {
    return DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
  };

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <div>{blog.title}</div>
            <div>{sanitizeText(blog.content)}</div>
          </div>
        );
      })}
      <div>おはよう</div>
    </div>
  );
};

export default page;
