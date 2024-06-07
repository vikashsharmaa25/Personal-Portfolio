import React from "react";

function Footer() {
  return (
    <>
      <div className="my-20 bg-[#FEB901] w-full rounded-full flex justify-between items-center">
        <div className="flex items-center gap-3 p-2">
          <h1 className="rounded-full text-2xl p-3 bg-black">VS</h1>
          <h1 className="text-2xl text-black tracking-tighter">
            Vikash <span className="font-bold">Sharma</span>
          </h1>
        </div>
        <div className="text-black pr-8 text-xl">
          Designed & Built by{" "}
          <span className="font-bold tracking-tighter">Vikash Sharma</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
