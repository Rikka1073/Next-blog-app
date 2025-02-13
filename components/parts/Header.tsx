import Link from "next/link";
import React from "react";

type HeaderProps = {
  url: string;
};
const Header = ({ url }: HeaderProps) => {
  return (
    <header className="container mx-auto border-b-2 border-[#75593D] py-6 mb-15">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-10 text-xl text-[#75593D] justify-center">
          <Link href="/" className="hover:underline hover:underline-offset-4">
            TOP
          </Link>
          <Link
            href="/articles"
            className={`hover:underline hover:underline-offset-4 ${
              url === "/articles" ? "hidden" : "block"
            }`}
          >
            Article
          </Link>
          <Link
            href="/blogs"
            className={`hover:underline hover:underline-offset-4 ${
              url === "/blogs" ? "hidden" : "block"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`hover:underline hover:underline-offset-4 ${
              url === "/about" ? "hidden" : "block"
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
