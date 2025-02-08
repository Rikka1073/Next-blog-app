"use client";
import { usePathname } from "next/navigation";
import Articlelist from "../components/Article/Articlelist";
import Header from "../components/parts/Header";
import BlogList from "../components/blog/BlogList";

export default function Page() {
  const url = usePathname();
  console.log(url);
  return (
    <div className="container mx-auto">
      <Header url={url} />
      <p>こんにちは</p>
      <Articlelist />
      <BlogList />
    </div>
  );
}
