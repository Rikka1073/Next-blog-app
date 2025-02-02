"use client";

import { useEffect, useState } from "react";

const thumbnail = "/img/QiitaThumbnail.png";

export default function Page() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchQiita = async () => {
      const res = await fetch(`http://localhost:3000/api/qiita?page=${page}`);
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchQiita();
  }, []);

  const onclickMoreButton = () => {
    console.log("もっと見るボタンがクリックされました");
  };

  return (
    <div className="container mx-auto">
      <div className="p-8">
        <div className="flex flex-wrap gap-4">
          {data.map((item) => {
            return (
              <div className="card bg-base-100 w-96 shadow-xl" key={item.id}>
                <a href={item.url} target="_blank">
                  <figure>
                    <img src={thumbnail} alt="Shoes" />
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
      <div className="flex justify-center">
        <button onClick={onclickMoreButton} className="btn btn-wide">
          もっと見る
        </button>
      </div>
    </div>
  );
}
