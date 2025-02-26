import Link from "next/link";
import React from "react";

const Card = ({ children }) => {
  return <div className="card bg-white w-70 shadow-xl rounded-2xl">{children}</div>;
};

export default Card;
