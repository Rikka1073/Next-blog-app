"use client";
import { usePathname } from "next/navigation";

import Header from "../components/parts/Header";
import BlogList from "../components/blog/BlogList";
import ArticleList from "../components/Article/Articlelist";

export default function Page() {
  const url = usePathname();
  return (
    <div className="bg-[#F1E9DA] pb-20">
      <Header url={url} />
      <ArticleList />
      <BlogList />
    </div>
  );
}
