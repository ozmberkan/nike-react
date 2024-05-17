import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewProducts({
    title,
    productOne,
    productTwo,
    productThree,
    airforceone,
    airforcerainbow,
    airforcecherry,
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
                    <Link to={airforceone} className="block data-[focus]:border-2  border-2 border-transparent data-[focus]:border-[#121212] p-4 rounded-xl font-semibold cursor-pointer">
                        {productOne}
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to={airforcerainbow} className="block data-[focus]:border-2  border-2  border-transparent data-[focus]:border-[#121212] p-4 rounded-xl font-semibold cursor-pointer">
                        {productTwo}
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to={airforcecherry} className="block data-[focus]:border-2 border-2 border-transparent data-[focus]:border-[#121212] p-4 rounded-xl font-semibold cursor-pointer">
                        {productThree}
                    </Link>
                </MenuItem>
            </MenuItems>
        </Menu>
    )
}
