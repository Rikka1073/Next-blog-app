import { client } from "../../libs/client";

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
  });

  return {
    props: {
      data,
    },
  };
};
