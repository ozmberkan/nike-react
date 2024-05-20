import Reacti, { useState } from "react";
import Logo from "../assets/Svg/Logo.svg";
import Male from "./Navbar/Gender/Male";
import Female from "./Navbar/Gender/Female";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaRegBell } from "react-icons/fa";
import { IoBasketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import NewProducts from "./Navbar/NewProducts/NewProducts";
import AllProuducts from "./Navbar/AllProducts/AllProducts";
import { RxUpdate } from "react-icons/rx";
import updateContent from "../updates.js";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);

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
        <button
          onClick={() => setIsOpen(true)}
          className="p-2.5 hover:bg-zinc-200 relative text-pink-700 animate-pulse bg-pink-300 cursor-pointer transition-colors duration-300 rounded-full "
        >
          <FaRegBell size={25} />
          <span className="absolute -top-2 text-xs bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full right-0">
            {updateContent.twenty.length}
          </span>
        </button>
        <Link
          to="/favorites"
          className="p-2.5 hover:bg-zinc-200 cursor-pointer transition-colors duration-300 rounded-full "
        >
          <FaRegHeart size={25} />
        </Link>
        <div className="p-2.5 hover:bg-zinc-200 cursor-pointer transition-colors duration-300 rounded-full ">
          <IoBasketOutline size={25} />
        </div>

        <Transition
          show={isOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog
            initialFocus
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 flex w-screen items-center pr-6 justify-end bg-black/20">
              <DialogPanel className=" space-y-4 border bg-white h-[750px] w-[400px] rounded-lg shadow-xl p-4 relative ">
                <DialogTitle className="font-bold text-2xl text-center ">
                  <p className="flex justify-center items-center gap-x-5">
                    <RxUpdate />
                    Güncellemeler
                    <span className="text-[14px] text-gray-400">v0.15</span>
                  </p>
                </DialogTitle>
                <div className="w-full border h-10 bg-gray-200/50 flex justify-start px-4 items-center ">
                  20.05.2024
                </div>
                <ol className="flex flex-col justify-start items-start gap-y-3 w-full p-2">
                  {updateContent.twenty.map((content, index) => (
                    <li
                      key={index}
                      className="font-medium text-md border-b p-2"
                    >
                      {index + 1} - {content.title}
                    </li>
                  ))}
                </ol>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full border-2 rounded-md flex justify-center items-center font-semibold p-2 border-black"
                >
                  Kapat
                </button>
              </DialogPanel>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}
