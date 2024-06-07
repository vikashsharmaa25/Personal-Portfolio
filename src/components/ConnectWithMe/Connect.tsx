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
import { CgMail } from "react-icons/cg";
import gmail from "@/assets/asset 75.svg";
import personLogo from "@/assets/asset 76.svg";

function Connect() {
  return (
    <>
      <div>
        {" "}
        <div className="relative text-center">
          <h1 className="text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Connect with me
          </h1>
          <h1 className="text-7xl font-extrabold yellow opacity-5 text-outline text-center">
            Connect with me
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center my-20 gap-5">
          <Link
            href={""}
            className="bg-white text-blue-500 px-10 py-3 flex items-center rounded-full gap-4 "
          >
            <BsLinkedin className="text-6xl" />
            <h1 className="text-3xl font-extrabold tracking-wider">LinkedIn</h1>
          </Link>
          <Link
            href={""}
            className="bg-white text-red-500 px-10 py-3 flex items-center rounded-full gap-4 "
          >
            <BsInstagram className="text-6xl" />
            <h1 className="text-3xl font-extrabold tracking-wider">
              Instagram
            </h1>
          </Link>
          <Link
            href={""}
            className="bg-white text-blue-600 px-10 py-3 flex items-center rounded-full gap-4 "
          >
            <BsFacebook className="text-6xl" />
            <h1 className="text-3xl font-extrabold tracking-wider">Facebook</h1>
          </Link>
          <Link
            href={""}
            className="bg-white text-blue-400 px-10 py-3 flex items-center rounded-full gap-4 "
          >
            <BsTelegram className="text-6xl" />
            <h1 className="text-3xl font-extrabold tracking-wider">Telegram</h1>
          </Link>
          <Link
            href={""}
            className="bg-white text-black px-10 py-3 flex items-center rounded-full gap-4 "
          >
            <BsTwitter className="text-6xl" />
            <h1 className="text-3xl font-extrabold tracking-wider">Twitter</h1>
          </Link>
          <Link
            href={""}
            className="bg-white text-red-600 px-10 py-3 flex items-center rounded-full gap-4 "
          >
            {/* <CgMail className="text-6xl " /> */}
            <Image src={gmail} alt="" width={65} height={65} />
            <h1 className="text-3xl font-extrabold tracking-wider">
              vikash9422@gmail.com
            </h1>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Image src={personLogo} alt="" width={350} height={350} />
        </div>
        <hr />
        <div className="my-10"></div>
      </div>
    </>
  );
}

export default Connect;
