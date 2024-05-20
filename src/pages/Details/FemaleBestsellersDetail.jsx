import React from "react";
import { useParams } from "react-router-dom";
import Footer from "~/components/Footer";

function FemaleBestsellersDetail({ shoes }) {
  const { id } = useParams();
  const product = shoes.products.bestsellers.women[`shoe${id}`];
  return (
    <div className="w-full  p-12">
      <div className="flex justify-center items-center gap-x-5">
        <div className="w-full h-[800px] bg-zinc-200 flex justify-center items-center rounded-xl border ">
          <img src={product.image} className="w-[700px] drop-shadow-xl" />
        </div>
        <div className="w-full h-[800px] bg-zinc-200 p-12 flex flex-col gap-y-10 rounded-xl border ">
          <p className="font-bold text-4xl">
            Ürün Adı: <span className="font-black">{product.name}</span>
          </p>
          <p className="font-bold text-4xl">
            Fiyatı: <span className="font-black">{product.price}</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FemaleBestsellersDetail;
