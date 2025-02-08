import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  url: string;
};

const MoreButton = ({ url }: Props) => {
  return (
    <div className="flex justify-center">
      <Link
        href={url}
        className="btn btn-wide border border-[#75593D] rounded-xl bg-[#F1E9DA] text-[#75593D] hover:bg-[#75593D] hover:text-[#F1E9DA] hover:shadow-lg"
      >
        <p>もっと見る</p>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default MoreButton;
