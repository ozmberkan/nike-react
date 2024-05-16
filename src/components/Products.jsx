import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Products({ shoes }) {
  function NextArrow({ className, onClick }) {
    return (
      <div
        className={`${className} text-black bg-zinc-100 -right-16 w-10 h-10 flex justify-center  items-center rounded-full  hover:bg-gray-600 transition-colors duration-500 hover:text-white`}
        onClick={onClick}
      >
        <IoIosArrowForward size={30} />
      </div>
    );
  }
  function BackArrow({ className, onClick }) {
    return (
      <div
        className={`${className} text-black bg-zinc-100 -left-16 w-10 h-10 flex justify-center items-center rounded-full  hover:bg-gray-600 transition-colors duration-500 hover:text-white`}
        onClick={onClick}
      >
        <IoIosArrowBack size={30} />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <BackArrow />,
  };
  return (
    <div className="max-w-[1600px] max-h-[700px] mx-auto">
      <h1 className="flex justify-center items-center font-black text-4xl mb-12">
        Çok Satanlar
      </h1>
      <Slider {...settings}>
        {Object.keys(shoes.products.bestsellers).map((key) => (
          <div key={shoes.products.bestsellers[key].id}>
            <div className="w-full h-full gap-x-2 flex items-center justify-center">
              <div className="border-2 border-black h-[350px] flex flex-col justify-start gap-y-5 w-[500px] rounded-xl p-4">
                <div className="flex justify-between  p-2">
                  <h1 className="font-semibold text-lg ">
                    {shoes.products.bestsellers[key].name}
                  </h1>
                  <button className="bg-gray-700 px-5 rounded-md text-white hover:bg-gray-500 transition-colors duration-500">
                    Detay
                  </button>
                </div>
                <div className=" w-full h-[250px] flex justify-center items-center">
                  <img src={shoes.products.bestsellers[key].image} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
