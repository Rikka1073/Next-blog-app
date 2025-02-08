"use client";
import { usePathname } from "next/navigation";

import Header from "../components/parts/Header";
import BlogList from "../components/blog/BlogList";
import ArticleList from "../components/Article/Articlelist";

export default function Page() {
  const url = usePathname();
  console.log(url);
  return (
    <div className="container mx-auto">
      <Header url={url} />
      <ArticleList />
      <BlogList />
    </div>
  );
}
