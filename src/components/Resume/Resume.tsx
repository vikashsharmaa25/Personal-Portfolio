import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

function Resume() {
  return (
    <>
      <div className="my-20 flex justify-center items-center">
        <a
          href="https://drive.google.com/file/d/1soqmJGGusM8MRvy0x2YeBmrUJupojhvI/view"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-[16px] px-8 bg-[#FEB901] hover:bg-opacity-5 hover:text-yellow-400 text-black bg-opacity-100 text-2xl rounded-full border border-yellow-400 font-semibold duration-150"
        >
          <FaArrowDownLong />
          Resume
        </a>
      </div>
    </>
  );
}

export default Resume;
