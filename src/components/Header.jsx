import React from "react";
import shoe from "../assets/Shoes.png";

export default function Header() {
  return (
    <div className="w-full h-[500px] bg-zinc-100/50 flex justify-start items-center relative pl-12">
      <div className="w-[1200px] font-semibold text-5xl ">Air Force ©</div>
      <img
        src={shoe}
        className="w-[600px] object-cover absolute right-0 top-0"
      />
    </div>
  );
}
