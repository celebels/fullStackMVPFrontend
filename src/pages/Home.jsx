import React from "react";
import CardLists from "../components/CardLists";
import BigTitle from "../components/BigTitle";

export default function Home() {
  return (
    <>
      <section className="flex md:flex-row items-around gap-4 md:pt-0 sm:items-center  flex-col  pt-32">
        <div className="flex flex-col  md:text-left md:ml-24 gap-12 text-center pb-8  mx-auto justify-center  ">

          <BigTitle text="É um servico" />

          <p className=" md:text-xl text-md text-black">
            Um servico barro! Use e abuse nossas promocoes, tao baratas que
            parece um bug da Black Friday!
          </p>

        </div>

        <div className="3d-img w-[60%] mx-auto md:translate-x-20 mb-8">
          <img src="../public/home.png" alt="home page splash" />
        </div>
      </section>

      <CardLists />
    </>
  );
}
