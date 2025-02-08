import Link from "next/link";
import React from "react";

type Props = {
  url: string;
};

const MoreButton = ({ url }: Props) => {
  return (
    <div className="flex justify-center">
      <Link href={url} className="btn btn-wide">
        もっと見る
      </Link>
    </div>
  );
};

export default MoreButton;
