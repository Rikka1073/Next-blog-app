import React from "react";

const Card = ({ children }) => {
  return <div className="card bg-white w-70 shadow-xl rounded-2xl text-black">{children}</div>;
};

export default Card;
