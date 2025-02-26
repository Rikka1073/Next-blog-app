"use client";

import { useEffect, useState } from "react";
import { client } from "../libs/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Header from "../../components/parts/Header";
import Layout from "../../components/parts/Layout";
import Card from "../../components/parts/Card";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const url = usePathname();

  useEffect(() => {
    const fetchCms = async () => {
      const data = await client.get({
        endpoint: "blogs",
      });
      setBlogs(data.contents);
    };
    fetchCms();
  }, []);

  return (
    <div className="bg-[#F1E9DA] pb-20">
      <Header url={url} />
      <Layout>
        <h2 className="text-4xl mb-10 text-center text-[#75593D]" data-testid="blogList-title">
          Blog一覧
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {blogs &&
            blogs.map((blog) => {
              return (
                <Card key={blog.id}>
                  <Link href={`/blogs/${blog.id}`}>
                    <div className="card-body">
                      <div className="h-[100px] mb-10">
                        <Image
                          src={blog.eyecatch?.url || "/no-image.png"}
                          width={384}
                          height={200}
                          className="items-end"
                          alt=""
                        />
                      </div>
                      <h3 className="text-lg mb-4 font-bold">{blog.title}</h3>
                    </div>
                  </Link>
                </Card>
              );
            })}
        </div>
      </Layout>
    </div>
  );
};

export default page;
