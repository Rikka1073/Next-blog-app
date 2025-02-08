import React from "react";
import Header from "../../components/parts/Header";
import Layout from "../../components/parts/Layout";

const page = () => {
  const url = "/about";
  return (
    <div className="bg-[#F1E9DA] pb-20 h-screen">
      <Header url={url} />
      <Layout>
        <div className="text-center flex justify-center items-center h-[50vh]">
          <p className="font-bold text-5xl text-[#75593D]">Commig Sonn</p>
        </div>
      </Layout>
    </div>
  );
};

export default page;
