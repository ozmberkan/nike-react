import React from "react";
import Logo from "../assets/Svg/Logo.svg";
import Male from "./Navbar/Male";
import Female from "./Navbar/Female";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaRegBell } from "react-icons/fa";
import { IoBasketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import NewProducts from "./Navbar/NewProducts";

export default function Navbar() {
  return (
    <div className="w-full h-20 flex justify-start items-center gap-x-5 px-12 border-b">
      <div className="flex relative justify-center items-center">
        <Link to="/">
          <img src={Logo} alt="" className="w-32 cursor-pointer" />
        </Link>
      </div>
      <div className="flex gap-x-5 ml-12">
        <NewProducts
          title="Yeni Airforce'lar"
          productOne="Airforce One"
          productTwo="Airforce Rainbow"
          productThree="Airforce Cherry"
          airforceone="/airforceone"
          airforcerainbow="/airforcerainbow"
          airforcecherry="/airforcecherry"
        />
        <Male
          title="Erkek"
          bestsellers="/bestsellers"
          Allproducts="/allproducts"
          daily="/daily"
          productOne="En çok satanlar"
          productTwo="Günlük Giyim"
          productThree="Tüm Airforce'lar"
        />
        <Female
          title="Kadın"
          bestsellers="/bestsellers"
          daily="/daily"
          Allproducts="/allproducts"
          productOne="En çok satanlar"
          productTwo="Günlük Giyim"
          productThree="Tüm Airforce'lar"
        />
      </div>
      <div className="ml-auto relative">
        <input
          type="text"
          placeholder="Ara..."
          className="w-[300px] h-22 border-2 border-[#121212] pl-12 pr-4 py-2 rounded-md "
        />
        <IoIosSearch className="left-3 top-2 h-7 w-7 absolute" />
      </div>
      <div className="flex gap-x-6 items-center ml-3">
        <Link
          to="/updates"
          className="p-2.5 hover:bg-zinc-200 cursor-pointer transition-colors duration-300 rounded-full "
        >
          <FaRegBell size={25} />
        </Link>
        <div className="p-2.5 hover:bg-zinc-200 cursor-pointer transition-colors duration-300 rounded-full ">
          <FaRegHeart size={25} />
        </div>
        <div className="p-2.5 hover:bg-zinc-200 cursor-pointer transition-colors duration-300 rounded-full ">
          <IoBasketOutline size={25} />
        </div>
      </div>
    </div>
  );
}
