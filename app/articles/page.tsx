"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../components/parts/Layout";
import Card from "../../components/parts/Card";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/parts/Header";

const thumbnail = "/img/QiitaThumbnail.png";

const page = () => {
  const [data, setData] = useState([]);
  const url = "/articles";

  useEffect(() => {
    const fetchQiita = async () => {
      const res = await fetch(`/api/qiita?page=1&per_page=20`);
      const data = await res.json();
      setData(data);
    };
    fetchQiita();
  }, []);
  return (
    <div className="bg-[#F1E9DA] pb-20">
      <Header url={url} />
      <Layout>
        <h2 className="text-4xl mb-10 text-center text-[#75593D]">Article一覧</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          {data.map((item) => {
            return (
              <Card key={item.id}>
                <Link href={item.url} target="_blank">
                  <Image
                    src={thumbnail}
                    width={384}
                    height={300}
                    className="rounded-t-2xl"
                    alt=""
                  />
                  <div className="card-body">
                    <h3 className="text-md font-bold">
                      <p>
                        {item.title.length > 40 ? item.title.substring(0, 40) + " ..." : item.title}
                      </p>
                    </h3>
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
