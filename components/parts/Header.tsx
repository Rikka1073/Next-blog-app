import Link from "next/link";
import React from "react";

type HeaderProps = {
  url: string;
};
const Header = ({ url }: HeaderProps) => {
  return (
    <header className="w-full border-b-2 border-gray-300 py-6 mb-15">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-10 text-xl">
          <Link href="/" className="hover:text-gray-400">
            TOP
          </Link>
          <Link
            href="/articles"
            className={`hover:text-gray-400 ${url === "/articles" ? "hidden" : "block"}`}
          >
            Article
          </Link>
          <Link
            href="/blogs"
            className={`hover:text-gray-400 ${url === "/blogs" ? "hidden" : "block"}`}
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
