import React from "react";
import { MdOutlineSegment } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center h-[90px] bg-white w-full text-black rounded-full mt-8 px-6  whitespace-normal tracking-tight">
        <div>
          <h1 className="-ml-4 text-[26px] uppercase">
            <span className="bg-black text-white rounded-full p-5">VS</span>{" "}
            Vikash <span className="font-bold">Sharma</span>
          </h1>
        </div>
        <div className="flex items-center gap-6 bg-black text-white px-6 rounded-full -mr-2">
          <h1 className="text-[26px]">Menu</h1>
          <span className="bg-[#FEB901] p-5 text-black text-[26px] rounded-full -mr-6">
            <MdOutlineSegment />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
