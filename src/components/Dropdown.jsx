import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

export default function Dropdown({
  title,
  productOne,
  productTwo,
  productThree,
}) {
  return (
    <Menu>
      <MenuButton className="bg-transparent p-2 w-44 border-b border-[#121212] flex justify-between items-center">
        <p className="font-semibold">{title}</p>
        <FaChevronDown />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="border rounded-xl w-64 p-4 mt-3 flex flex-col gap-y-2 bg-white"
      >
        <MenuItem>
          <a className="block data-[focus]:border-2  border-2 border-transparent data-[focus]:border-[#121212] p-4 rounded-xl font-semibold cursor-pointer">
            {productOne}
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:border-2  border-2  border-transparent data-[focus]:border-[#121212] p-4 rounded-xl font-semibold cursor-pointer">
            {productTwo}
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:border-2 border-2 border-transparent data-[focus]:border-[#121212] p-4 rounded-xl font-semibold cursor-pointer">
            {productThree}
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
