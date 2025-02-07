"use client";

import { useEffect, useState } from "react";
import { client } from "../libs/client";
import Link from "next/link";
import BlogLayout from "../../components/blog/BlogLayout";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MoreButton from "../../components/MoreButton";
import Header from "../../components/parts/Header";

const page = () => {
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
      <Header url={url} />
      <BlogLayout>
        <h2 className="text-4xl mb-12 text-center">Blogs一覧</h2>
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

export default page;
