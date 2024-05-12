import React from "react";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Products() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="max-w-[1700px] h-[600px]  mt-36 mx-auto ">
      <Slider
        {...settings}
        className="max-w-full h-full flex justify-center items-center"
      >
        <div className=" w-full h-[550px] p-6 flex justify-center items-center my-auto">
          <div className="border-2 border-[#121212]/50 object-cover cursor-pointer rounded-xl  transition-all duration-500 flex justify-center items-center flex-col p-4">
            <h1 className="font-semibold text-4xl mt-5 text-[#121212]">
              Airforce Rainbow
            </h1>
            <img src={shoe1} alt="" className="p-7" />
            <button className="p-2 bg-[#121212] text-[#f1f1f1] rounded-full w-48 hover:bg-zinc-600 transition-colors duration-500 font-semibold text-lg">
              Detay
            </button>
          </div>
        </div>
        <div className=" h-[550px] p-6 flex justify-center items-center">
          <div className="border-2 border-[#121212]/50 object-cover cursor-pointer  rounded-xl  transition-all duration-500 flex justify-center items-center flex-col p-4">
            <h1 className="font-semibold text-4xl mt-5 text-[#121212]">
              Airforce One
            </h1>
            <img src={shoe2} alt="" className="p-7" />
            <button className="p-2 bg-[#121212] text-[#f1f1f1] rounded-full w-48 hover:bg-zinc-600 transition-colors duration-500 font-semibold text-lg">
              Detay
            </button>
          </div>
        </div>
        <div className=" h-[550px] p-6">
          <div className="border-2 border-[#121212]/50 object-cover cursor-pointer  rounded-xl  transition-all duration-500 flex justify-center items-center flex-col p-4">
            <h1 className="font-semibold text-4xl mt-5 text-[#121212]">
              Airforce Blue
            </h1>
            <img src={shoe3} alt="" className="p-7" />
            <button className="p-2 bg-[#121212] text-[#f1f1f1] rounded-full w-48 hover:bg-zinc-600 transition-colors duration-500 font-semibold text-lg">
              Detay
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
