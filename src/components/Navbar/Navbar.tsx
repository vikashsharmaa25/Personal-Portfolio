import React from "react";
import { MdOutlineSegment } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center md:h-[90px] h-10 bg-white w-full text-black rounded-full mt-4 px-6  whitespace-normal tracking-tight">
        <div>
          <h1 className="-ml-4 md:text-[26px] uppercase">
            <span className="bg-black text-white rounded-full md:p-5 p-2">
              VS
            </span>{" "}
            Vikash <span className="font-bold">Sharma</span>
          </h1>
        </div>
        <div className="flex items-center gap-6 bg-black text-white px-6 rounded-full -mr-2">
          <h1 className="md:text-[26px]">Menu</h1>
          <span className="bg-[#FEB901] md:p-5 p-1 text-black text-[26px] rounded-full -mr-6">
            <MdOutlineSegment />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
