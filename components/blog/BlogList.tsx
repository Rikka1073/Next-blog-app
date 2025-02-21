"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MoreButton from "../MoreButton";
import { client } from "../../app/libs/client";
import Card from "../parts/Card";
import Layout from "../parts/Layout";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const url = "/blogs";
  useEffect(() => {
    const fetchCms = async () => {
      const data = await client.get({
        endpoint: "blogs",
        queries: { limit: 4 },
      });
      console.log(data.contents);
      setBlogs(data.contents);
    };
    fetchCms();
  }, []);

  return (
    <>
      <Layout>
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {blogs &&
            blogs.map((blog) => {
              return (
                <Card key={blog.id}>
                  <Link href={`/blogs/${blog.id}`}>
                    <Image
                      src={blog.eyecatch?.url || "/no-image.png"}
                      width={384}
                      height={300}
                      className="rounded-t-2xl"
                      alt=""
                    />
                    <div className="card-body">
                      <h3 className="text-md font-bold" data-testid="titleBlog">
                        {blog.title}
                      </h3>
                    </div>
                  </Link>
                </Card>
              );
            })}
        </div>
        <MoreButton url={url} />
      </Layout>
    </>
  );
};

export default BlogList;
