import React from "react";
import Header from "../../components/parts/Header";
import Layout from "../../components/parts/Layout";
import Image from "next/image";

const page = () => {
  const url = "/about";
  return (
    <div className="bg-[#F1E9DA] pb-20 h-screen">
      <Header url={url} />
      <Layout>
        <div className="text-center flex justify-center items-center">
          <p className="font-bold text-5xl text-[#75593D]">Commig Sonn</p>
        </div>
        {/* <h2 className="text-4xl mb-10 text-center text-[#75593D]">自己紹介</h2>
        <div className="mb-10 flex justify-between gap-20">
          <div className="avatar w-70 mx-auto">
            <div className="rounded-full">
              <Image
                src="/img/IMG_9916.jpg"
                width={500}
                height={500}
                alt=""
                className="rounded-4xl"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-10">
            初めまして！WebエンジニアのMasafumiです。
            <br />
            現在27歳、茨城県在住。駒澤大学経営学部を卒業後、都内のWeb制作会社に入社し、エンジニアとしてのキャリアを積んでいます。現在、社会人4年目になります。
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl">これまでの経験について</h3>
          <p className="mb-10">
            <br />
            1年目から3年目までは、大手通信教育会社のWeb運用案件に携わり、主にLP（ランディングページ）のコーディング業務を担当していました。HTML、CSS、JavaScriptを駆使し、デザインの再現性を意識しながら、ユーザーにとって分かりやすく快適なWebページを制作。加えて、多くのサイトリニューアル案件にも関わり、スピード感を持った制作には自信があります。
            4年目からは、より開発寄りの業務に携わるようになり、現在は保険会社の保険申込画面の開発案件を担当しています。フロントエンドの技術としてReactやNext.jsを活用し、モダンな開発環境での経験を積んでいます。Web制作からフロントエンド開発へとスキルの幅を広げ、よりユーザーにとって快適なUI/UXを実現できるよう、日々学びながら開発を進めています。
          </p>
          <h3 className="font-bold text-2xl">得意なスキル・技術 </h3>
          <p className="mb-10">
            <br />
            マークアップ（HTML / CSS / JavaScript） <br />
            デザイン再現性の高いコーディングが得意で、レスポンシブ対応や動的なインタラクションの実装も経験豊富です。
            <br />
            フロントエンド開発（React / Next.js） <br />
            近年はReactを用いた開発案件に携わる機会が増え、コンポーネント設計や状態管理を意識した実装を行っています。Next.jsの経験もあり、サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）にも対応可能です。
            <br />
            スピーディーな制作対応 <br />
            過去に数多くのLP制作やサイトリニューアルを担当し、短期間での開発や納期厳守のスキルが身についています。効率的なコーディングを意識し、品質とスピードを両立した開発を心がけています。
          </p>
        </div> */}
      </Layout>
    </div>
  );
};

export default page;
