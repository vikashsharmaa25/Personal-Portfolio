import React from "react";
import developData from "@/utils/Development";
import Image from "next/image";

function Development() {
  return (
    <div className="container mx-auto px-4 sm:mt-0 mt-10">
      <div className="relative text-center py-10 sm:py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center w-full max-w-4xl mx-auto">
          Development & Productivity Tools I Use
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold yellow opacity-5 text-outline text-center w-full max-w-4xl mx-auto">
          Development & Productivity Tools I Use
        </h1>
      </div>
      <div className="my-2 sm:my-16 md:my-20 flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
        {developData.map((develop) => (
          <div
            key={develop.id}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 rounded-full bg-[#E7E7E7] w-max py-1 sm:py-2 px-3 sm:px-4 md:px-5"
          >
            <Image
              src={develop.image}
              alt={develop.name}
              width={50}
              height={50}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
            <h2 className="text-black font-medium text-sm sm:text-base md:text-lg lg:text-xl">
              {develop.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Development;
