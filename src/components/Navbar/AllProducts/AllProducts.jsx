import React from "react";
import { Link } from "react-router-dom";
import Allproducts from "~/pages/GenderProducts/Allproducts";

export default function Dropdown({ productOne, allproducts }) {
  return (
    <Link
      to={allproducts}
      className="block border-b duration-400 hover:border-gray-500 hover:text-gray-500/70 transition-colors duration-500 border-black data-[focus]:border-2 px-4 py-2 font-semibold cursor-pointer"
    >
      {productOne}
    </Link>
  );
}
