"use client";

import { useEffect, useState } from "react";
import MoreButton from "../MoreButton";
import Card from "../parts/Card";
import Layout from "../parts/Layout";
import Link from "next/link";
import Image from "next/image";

const thumbnail = "/img/QiitaThumbnail.png";

const ArticleList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [artclieNumber, setArtclieNumber] = useState(4);
  const pageLimit = 3;

  useEffect(() => {
    const fetchQiita = async () => {
      const res = await fetch(`/api/qiita?page=${page}&per_page=${artclieNumber}`);
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchQiita();
  }, [page]);

  const onclickMoreButton = () => {
    if (page <= pageLimit) {
      console.log("もっと見るボタンがクリックされました");
      setPage((prev) => prev + 1);
      setArtclieNumber((prev) => prev + 6);
    }
  };
  return (
    <Layout>
      <div className="flex flex-wrap gap-4 mb-8">
        {data.map((item) => {
          return (
            <Card key={item.id}>
              <Link href={item.url} target="_blank">
                <Image src={thumbnail} width={384} height={300} className="rounded-2xl" alt="" />
                <div className="card-body">
                  <h3 className="text-md font-bold">{item.title}</h3>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
      <MoreButton onclick={onclickMoreButton} text="もっと見る" page={page} limit={pageLimit} />
    </Layout>
  );
};

export default ArticleList;
