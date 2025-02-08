"use client";

import { useEffect, useState } from "react";
import { client } from "../libs/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Header from "../../components/parts/Header";
import Layout from "../../components/parts/Layout";

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
    <>
      <Layout>
        <Header url={url} />
        <h2 className="text-4xl mb-10 text-center">Blog一覧</h2>
        <div className="flex flex-wrap gap-4">
          {blogs &&
            blogs.map((blog) => {
              return (
                <div className="card bg-base-100 w-96 shadow-xl" key={blog.id}>
                  <Link href={`/blogs/${blog.id}`}>
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
      </Layout>
    </>
  );
};

export default page;
