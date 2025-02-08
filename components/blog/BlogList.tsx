"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MoreButton from "../MoreButton";
import { client } from "../../app/libs/client";
import { usePathname } from "next/navigation";
import Card from "../parts/Card";
import Layout from "../parts/Layout";

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
      <Layout>
        <div className="flex flex-wrap gap-4 mb-8">
          {blogs &&
            blogs.map((blog) => {
              return (
                <Card key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>
                    <Image
                      src={blog.eyecatch?.url || "/no-image.png"}
                      width={384}
                      height={300}
                      alt=""
                    />
                    <div className="card-body">
                      <h3 className="text-md font-bold">{blog.title}</h3>
                    </div>
                  </Link>
                </Card>
              );
            })}
        </div>
        <MoreButton
          onclick={onclickMoreButton}
          text="もっと見る"
          page={blogLimiy}
          limit={blogPageLimit}
        />
      </Layout>
    </>
  );
};

export default BlogList;
