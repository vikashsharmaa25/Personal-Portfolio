import Image from "next/image";
import React from "react";
import personLogo from "@/assets/asset 77.svg";

function ContactMe() {
  return (
    <>
      <div className="bg-white sm:p-14 p-4 rounded-[40px] mb-9">
        <div className="relative text-center">
          <h1 className="sm:text-6xl text-3xl w-full font-extrabold text-gray-800 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Contact Me
          </h1>
          <h1 className="sm:text-7xl text-4xl  font-extrabold text-gray-800 opacity-0 text-outline text-center">
            Contact Me
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 my-10">
          <input
            type="text"
            placeholder="Full Name"
            className="outline-none border border-gray-400 rounded-full p-6 font-semibold text-xl text-gray-600"
          />
          <input
            type="text"
            placeholder="Email"
            className="outline-none border border-gray-400 rounded-full p-6 font-semibold text-xl text-gray-600"
          />
          <input
            type="text"
            placeholder="Mobile No."
            className="outline-none border border-gray-400 rounded-full p-6 font-semibold text-xl text-gray-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className="outline-none border border-gray-400 rounded-full p-6 font-semibold text-xl text-gray-600"
          />
        </div>
        <div className="w-full relative">
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="w-full text-xl font-semibold outline-none p-8 border border-gray-400 rounded-3xl min-h-[250px] text-gray-600"
          ></textarea>
          <div className="absolute sm:-bottom-44 -bottom-32 sm:right-0 -right-5">
            <Image
              src={personLogo}
              alt=""
              width={350}
              height={350}
              className="sm:w-[350px] sm:h-[350px] w-[250px] h-[250px]"
            />
          </div>
        </div>
        <div className="mt-4">
          <button className="px-8 py-3 text-xl font-semibold rounded-full text-black bg-[#FEB901] hover:bg-orange-100 duration-300 hover:text-[#FEB901]">
            Send
          </button>
        </div>
      </div>
      <div className="sm:mt-11 mt-10">
        <hr />
      </div>
    </>
  );
}

export default ContactMe;
