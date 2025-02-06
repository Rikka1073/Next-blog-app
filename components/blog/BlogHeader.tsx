import Link from "next/link";
import React from "react";

const BlogHeader = () => {
  return (
    <header>
      <div>
        <Link href="/blog">Blog</Link>
        <Link href="/">TOP</Link>
      </div>
    </header>
  );
};

export default BlogHeader;
