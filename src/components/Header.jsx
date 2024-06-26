import React from "react";

export default function Header({ shoes }) {
  return (
    <div className="w-full h-[500px] bg-[url('./assets/Banners/aaabstract.png')] bg-opacity-40 bg-no-repeat bg-cover object-cover flex justify-start items-center relative pl-14">
      <div className="w-[1200px] font-semibold text-5xl flex flex-col gap-y-3 text-[#121212]">
        <h1 className="font-black">Air Force</h1>
        <p>Ustalıkla İşlenen İkonik ve Klasik Tasarım.</p>
      </div>
      <img
        src={shoes?.banners.image}
        className="w-[600px] object-cover absolute right-0 top-0 drop-shadow-[0_35px_35px_rgba(0,0,0,0.30)] "
      />
    </div>
  );
}
