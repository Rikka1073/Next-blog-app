import React from "react";
import { client } from "../libs/client";

const page = async () => {
  const data = await client.get({
    endpoint: "blogs",
    contentId: "0dfhd7c78li",
  });

  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
};

export default page;
