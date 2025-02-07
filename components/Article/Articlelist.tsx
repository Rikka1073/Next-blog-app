"use client";

import { useEffect, useState } from "react";
import MoreButton from "../MoreButton";

const thumbnail = "/img/QiitaThumbnail.png";

const Articlelist = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [artclieNumber, setArtclieNumber] = useState(4);
  const pageLimit = 3;

  useEffect(() => {
    const fetchQiita = async () => {
      const res = await fetch(
        `http://localhost:3001/api/qiita?page=${page}&per_page=${artclieNumber}`
      );
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
    <div className="container mx-auto">
      <div className="p-8">
        <div className="flex flex-wrap gap-4">
          {data.map((item) => {
            return (
              <div className="card bg-base-100 w-70 shadow-xl rounded-2xl" key={item.id}>
                <a href={item.url} target="_blank">
                  <figure>
                    <img src={thumbnail} alt="Shoes" className="rounded-2xl" />
                  </figure>
                  <div className="card-body">
                    <div>{item.title}</div>
                    <div>{item.date}</div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <MoreButton onclick={onclickMoreButton} text="もっと見る" page={page} limit={pageLimit} />
    </div>
  );
};

export default Articlelist;
