"use client";

import { useEffect, useState } from "react";

import Card from "../parts/Card";
import Layout from "../parts/Layout";
import Link from "next/link";
import Image from "next/image";
import MoreButton from "../MoreButton";

const thumbnail = "/img/QiitaThumbnail.png";

const ArticleList = () => {
  const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);
  // const [artclieNumber, setArtclieNumber] = useState(4);
  // const pageLimit = 3;
  // const url = Us
  const url = "/articles";
  console.log(typeof url);
  console.log(url);

  useEffect(() => {
    const fetchQiita = async () => {
      const res = await fetch(`/api/qiita?page=1&per_page=4`);
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchQiita();
  }, []);

  // const onclickMoreButton = () => {
  //   if (page <= pageLimit) {
  //     console.log("もっと見るボタンがクリックされました");
  //     setPage((prev) => prev + 1);
  //     setArtclieNumber((prev) => prev + 6);
  //   }
  // };
  type item = {
    id: string;
    url: string;
    title: string;
  };
  return (
    <Layout>
      <div className="flex flex-wrap gap-4 mb-8">
        {data.map((item: item) => {
          return (
            <Card key={item.id}>
              <Link href={item.url} target="_blank">
                <Image src={thumbnail} width={384} height={300} className="rounded-t-2xl" alt="" />
                <div className="card-body">
                  <h3 className="text-md font-bold">{item.title}</h3>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
      <MoreButton url={url} />
    </Layout>
  );
};

export default ArticleList;
