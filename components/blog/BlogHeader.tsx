import Link from "next/link";
import React from "react";

const BlogHeader = () => {
  return (
    <header className="w-full border-b-2 border-gray-300  py-6">
      <div className="max-w-3xl mx-auto ">
        <div className="flex gap-10 text-xl">
          <Link href="/" className="hover:text-blue-400">
            TOP
          </Link>
          <Link href="/blog" className="hover:text-blue-400">
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
