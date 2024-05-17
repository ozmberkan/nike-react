import React from "react";
import Logo from "../assets/Svg/Logo.svg";
import Male from "./Navbar/Gender/Male";
import Female from "./Navbar/Gender/Female";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaRegBell } from "react-icons/fa";
import { IoBasketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import NewProducts from "./Navbar/NewProducts/NewProducts";
import AllProuducts from "./Navbar/AllProducts/AllProducts";

export default function Navbar({}) {
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
          bestsellers="/malebestsellers"
          daily="/maledaily"
          SubjectOne="En çok satanlar"
          SubjectTwo="Günlük Giyim"
        />
        <Female
          title="Kadın"
          bestsellers="/femalebestsellers"
          daily="/femaledaily"
          SubjectOne="En çok satanlar"
          SubjectTwo="Günlük Giyim"
        />
        <AllProuducts
          title="Tüm Airforce'lar"
          allproducts="/allproducts"
          daily="/daily"
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
          className="p-2.5 hover:bg-zinc-200 relative text-pink-700 animate-pulse bg-pink-300 cursor-pointer transition-colors duration-300 rounded-full "
        >
          <FaRegBell size={25} />
          <span className="absolute -top-2 text-xs bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full right-0">
            4
          </span>
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
