import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Products({ shoes }) {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="max-w-[1700px] h-[550px] mb-6 mx-auto  ">
      <h1 className="text-center text-4xl font-black mb-5 ">Çok satanlar</h1>
      <Slider
        {...settings}
        className="max-w-full h-full flex justify-center items-center"
      >
        {Object.keys(shoes.products).map(key => (
          <div key={shoes.products[key].id} className="h-[550px] p-6">
            <div className="border-2 border-[#121212]/50 object-cover cursor-pointer rounded-xl transition-all duration-500 flex justify-center items-center flex-col p-4">
              <h1 className="font-semibold text-4xl mt-5 text-[#121212]">
                {shoes.products[key].name}
              </h1>
              <img src={shoes.products[key].image} alt={shoes.products[key].name} className="p-7" />
              <button className="p-2 bg-[#121212] text-[#f1f1f1] rounded-full w-48 hover:bg-zinc-600 transition-colors duration-500 font-semibold text-lg">
                Detay
              </button>
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
}
