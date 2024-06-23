import React from "react";

function Footer() {
  return (
    <>
      <div className="sm:mt-20 mb-4 mt-10 bg-[#FEB901] w-full sm:rounded-full rounded-3xl flex sm:flex-row flex-col justify-between items-center">
        <div className="flex items-center gap-3 p-2">
          <h1 className="rounded-full sm:text-2xl text-xl sm:p-3 p-2 bg-black">
            VS
          </h1>
          <h1 className="sm:text-2xl text-xl text-black tracking-tighter">
            Vikash <span className="font-bold">Sharma</span>
          </h1>
        </div>
        <div className="text-black sm:pr-8 sm:text-xl text-base">
          Designed & Built by{" "}
          <span className="font-bold tracking-tighter">Vikash Sharma</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
