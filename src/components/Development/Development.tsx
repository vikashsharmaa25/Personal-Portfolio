import React from "react";
import developData from "@/utils/Development";
import Image from "next/image";

function Development() {
  return (
    <>
      <div>
        <div className="relative text-center">
          <h1 className="text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center w-full lg:w-[1000px] mx-auto">
            Development & Productivity Tools I Use
          </h1>
          <h1 className="text-7xl font-extrabold yellow opacity-5 text-outline text-center w-full lg:w-[1000px] mx-auto">
            Development & Productivity Tools I Use
          </h1>
        </div>
        <div className="my-20 flex justify-center items-center gap-4 flex-wrap">
          {developData.map((develop) => (
            <div
              key={develop.id}
              className="flex items-center gap-4 rounded-full bg-[#E7E7E7] w-max py-2 px-5"
            >
              <Image src={develop.image} alt={develop.name} />
              <h2 className="text-black font-medium text-xl">{develop.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Development;
