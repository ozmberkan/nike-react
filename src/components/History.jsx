import React from "react";
import histroyShoe from "../assets/Historyshoe.png";

export default function History() {
  return (
    <div className="w-full h-[800px]  mt-36 p-28">
      <div className="w-4/5 flex justify-center items-start mx-auto h-full  rounded-xl shadow-lg  bg-[url('./assets/bannerofhistory.svg')] bg-cover ">
        <div className="w-[40%]">
          <img
            src={histroyShoe}
            alt=""
            className="rotate-[45deg] scale-150 ml-12 drop-shadow-2xl"
          />
        </div>
        <div className="w-[60%]  h-full p-12 flex flex-col gap-y-5">
          <h1 className="font-black text-5xl">Bir efsanenin doğuşu!</h1>
          <span className="font-semibold text-[27px]">
            Air Force, Air Force 1 ile başlayan ve Air Force 2, Air Force 3, Air
            Force STS, Air Force 5, Air Force XXV serilerini de kapsayan Nike,
            Inc. tarafından üretilen bir spor ayakkabısıdır. Air Force 1, Bruce
            Kilgore tarafından tasarlandı ve Nike Air türünü kullanan ilk
            basketbol ayakkabısı oldu. Ayakkabının alçak, orta ve yüksek bilek
            seçenekleri vardır.
          </span>
          <button className="p-2 bg-[#121212] text-[#f1f1f1] rounded-full w-48 hover:bg-zinc-600 transition-colors duration-500 font-semibold text-lg">
            Detay
          </button>
        </div>
      </div>
    </div>
  );
}
