"use client";
import { usePathname } from "next/navigation";
import Articlelist from "../components/Article/Articlelist";
import Header from "../components/parts/Header";

export default function Page() {
  const url = usePathname();
  return (
    <div className="container mx-auto">
      <Header url={url} />
      <p>こんにちは</p>
      <Articlelist />
      {/* <div className="p-8">
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
      <MoreButton onclick={onclickMoreButton} text="もっと見る" page={page} limit={pageLimit} /> */}
    </div>
  );
}
