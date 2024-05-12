import React from "react";
import shoe1 from '../assets/shoe1.png'
import shoe2 from '../assets/shoe2.png'
import shoe3 from '../assets/shoe3.png'



export default function Products() {


  return (
    <div className="w-full h-[600px] mt-32  flex justify-center items-center gap-x-12">
      <div className="border-2 border-[#121212]/50 object-cover cursor-pointer h-[400px] w-[400px] rounded-xl hover:scale-110 transition-all duration-500 flex justify-center items-center flex-col p-4">
        <h1 className="font-semibold text-4xl mt-5 text-[#121212]">Airforce Rainbow</h1>
        <img src={shoe1} alt="" className="p-7" />
        <button className="p-2 bg-[#121212] text-[#f1f1f1] rounded-full w-48 hover:bg-gray-800 transition-colors duration-500 font-semibold text-lg">Detay</button>
      </div>
      <div className="border-2 border-[#121212]/50 object-cover cursor-pointer h-[500px] w-[500px] rounded-xl hover:scale-110 transition-all duration-500 flex justify-center items-center flex-col p-4">
        <h1 className="font-semibold text-4xl mt-5 text-[#121212]">Airforce One</h1>
        <img src={shoe2} alt="" className="p-7" />
        <button className="p-2 bg-[#121212] text-[#f1f1f1] rounded-full w-48 hover:bg-gray-800 transition-colors duration-500 font-semibold text-lg">Detay</button>
      </div>
      <div className="border-2 border-[#121212]/50 object-cover cursor-pointer h-[400px] w-[400px] rounded-xl hover:scale-110 transition-all duration-500 flex justify-center items-center flex-col p-4">
        <h1 className="font-semibold text-4xl mt-5 text-[#121212]">Airforce Blue</h1>
        <img src={shoe3} alt="" className="p-7" />
        <button className="p-2 bg-[#121212] text-[#f1f1f1] rounded-full w-48 hover:bg-gray-800 transition-colors duration-500 font-semibold text-lg">Detay</button>
      </div>

    </div>
  );
}
