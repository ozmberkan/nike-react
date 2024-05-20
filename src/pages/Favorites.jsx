import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import Footer from "~/components/Footer";
import shoes from "~/db";
import { Link } from "react-router-dom";

export default function Favorites() {
  return (
    <div className="w-full   p-12">
      <h1 className="flex justify-start gap-x-2 items-center">
        <p className="font-bold text-3xl">Favorilerim</p>
        <FaRegHeart size={30} />
      </h1>
      <div className="grid grid-cols-5 gap-10 mt-12">
        {Object.keys(shoes.products.favorites).map((key) => (
          <div key={shoes.products.favorites[key].id}>
            <div className="w-full h-full gap-x-2 flex items-center justify-center">
              <div className="border-2 border-black h-[350px] flex flex-col justify-start gap-y-5 w-[500px] rounded-xl p-4">
                <div className="flex justify-between  p-2">
                  <h1 className="font-semibold text-lg ">
                    {shoes.products.favorites[key].name}
                  </h1>
                  <Link
                    to={`/favorites/${shoes.products.favorites[key].id}`}
                    className="bg-gray-700 px-5 rounded-md text-white hover:bg-gray-500 transition-colors duration-500"
                  >
                    Detay
                  </Link>
                </div>
                <div className=" w-full h-[250px] flex justify-center items-center">
                  <img src={shoes.products.favorites[key].image} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
