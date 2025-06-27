import React from "react";

export default function Card({ quote, information, imgSrc }) {
  return (
    <>
      <div className="relative w-screen  px-24 sm:px-0 sm:">
        <div className=" absolute -top-12 left-1/2 -translate-x-1/2 w-30 h-30  rounded-full p-1   bg-gradient-to-r  from-[#F28CC1] to-[#8E70B7]  ">
          <div className=" w-full h-full    rounded-full overflow-hidden">
            <img src={imgSrc} className="object-cover " alt="" />
          </div>
        </div>

        <div className=" p-1  rounded-t-xl  bg-gradient-to-r from-[#F28CC1] to-[#8E70B7]  ">
          <div className="bg-white rounded-t-md p-16   ">
            <h1 className="text-black italic pt-6 text-2xl">"{quote}"</h1>
          </div>

          <div className="p-4 text-white">{information}</div>
        </div>
      </div>
    </>
  );
}
