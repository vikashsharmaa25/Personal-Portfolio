import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import gmail from "@/assets/asset 75.svg";
import personLogo from "@/assets/asset 76.svg";

function Connect() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative text-center py-10">
        <h1 className="text-3xl w-full sm:text-4xl md:text-5xl lg:text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
          Connect with me
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold yellow opacity-5 text-outline text-center">
          Connect with me
        </h1>
      </div>
      <div className="lg:flex lg:flex-wrap grid grid-cols-2 items-center justify-center my-10 gap-4">
        {[
          { icon: BsLinkedin, text: "LinkedIn", color: "text-blue-500" },
          { icon: BsInstagram, text: "Instagram", color: "text-red-500" },
          { icon: BsFacebook, text: "Facebook", color: "text-blue-600" },
          { icon: BsTelegram, text: "Telegram", color: "text-blue-400" },
          { icon: BsTwitter, text: "Twitter", color: "text-black" },
        ].map((item, index) => (
          <Link
            key={index}
            href={""}
            className={`bg-white ${item.color} px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center rounded-full gap-2 sm:gap-4 w-full sm:w-auto`}
          >
            <item.icon className="text-3xl sm:text-4xl md:text-5xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider">
              {item.text}
            </h1>
          </Link>
        ))}
        <Link
          href={""}
          className="bg-white text-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center rounded-full gap-2 sm:gap-4 w-full sm:w-auto"
        >
          <Image
            src={gmail}
            alt=""
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider truncate">
            vikash9422@gmail.com
          </h1>
        </Link>
      </div>
      <div className="flex justify-center items-center my-10">
        <Image
          src={personLogo}
          alt=""
          width={350}
          height={350}
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        />
      </div>
      <hr className="my-10" />
    </div>
  );
}

export default Connect;
