"use client";
import { useParams } from "next/navigation";
import { client } from "../../libs/client";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import BlogLayout from "../../../components/blog/BlogLayout";
import Image from "next/image";
import BlogHeader from "../../../components/blog/BlogHeader";

const page = () => {
  const [blogsData, setBlogsData] = useState([]);
  const pathname = useParams();
  console.log(pathname.id);

  useEffect(() => {
    const fetchCms = async () => {
      const data = await client.get({
        endpoint: "blogs",
        queries: { ids: pathname.id },
      });
      console.log(data.contents);
      setBlogsData(data.contents);
    };
    fetchCms();
  }, []);

  const sanitizeText = (html: string) => {
    return DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
  };

  const formatDate = (data: string) => {
    const today = new Date(data);
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);

    const day = ("0" + today.getDate()).slice(-2);
    const date = `${year}-${month}-${day}`;
    return date;
  };

  return (
    <>
      <BlogHeader />
      <BlogLayout>
        {blogsData.map((data) => {
          return (
            <div className="max-w-3xl mx-auto" key={data.id}>
              <h2 className="text-4xl mb-12">Blogs</h2>
              <div className="mb-4">{formatDate(data.createdAt)}</div>
              <h3 className="text-2xl mb-4">{data.title}</h3>
              <div className="mb-8">
                <Image
                  src={data.eyecatch.url}
                  width={600}
                  height={200}
                  alt=""
                  className="mx-auto"
                />
              </div>
              <div className="leading-10">{sanitizeText(data.content)}</div>
            </div>
          );
        })}
      </BlogLayout>
    </>
  );
};

export default page;
