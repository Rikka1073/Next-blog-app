import { client } from "../../libs/client";

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "hello",
  });

  return {
    props: {
      data,
    },
  };
};
