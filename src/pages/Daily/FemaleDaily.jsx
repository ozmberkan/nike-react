import React from "react";
import Footer from "~/components/Footer";

export default function FemaleDaily({ shoes }) {
  return (
    <div className="w-full">
      <h1 className="font-black text-4xl mb-4 mt-12 text-center">
        Kadın Günlük Giyim
      </h1>
      <div
        id="mainarea"
        className="flex justify-center items-center flex-wrap gap-5 transition-all mx-auto p-10 "
      >
        {Object.keys(shoes.products.bestsellers.women).map((key) => (
          <div key={shoes.products.bestsellers.women[key].id}>
            <div className="w-full h-full gap-x-2 flex items-center justify-center shadow-md">
              <div className="border-2 border-black h-[350px] flex flex-col justify-start gap-y-5 w-[400px] rounded-xl p-4">
                <div className="flex justify-between  p-2">
                  <h1 className="font-semibold text-lg ">
                    {shoes.products.bestsellers.women[key].name}
                  </h1>
                  <button className="bg-gray-700 px-5 rounded-md text-white hover:bg-gray-500 transition-colors duration-500">
                    Detay
                  </button>
                </div>
                <div className=" w-full h-[250px] flex justify-center items-center">
                  <img
                    src={shoes.products.bestsellers.women[key].image}
                    alt=""
                  />
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
