"use client";
import React from "react";
import Image from "next/image";
import LogoImage from "../../../public/Navbar/pic.png";
import { GiBoomerangSun } from "react-icons/gi";
import ButtonWrapper from "../common/button";
import DropdownButton from "../common/Dropdown";
import { FloatingSearch } from "../common/FloatingSearch";


export default function Navbar() {
  return (
    <div className="grid grid-cols-1 sm:flex sm:items-center sm:justify-between w-full bg-gray-50 rounded-lg sm:px-5">
      <div className="grid grid-cols-2 sm:flex sm:items-center py-5 sm:w-1/2 sm:gap-3 w-full px-2">
        <div className="sm:w-1/4 w-32">
          <Image src={LogoImage} alt="Logo" width={200} height={200} />
        </div>
        <span className="w-full sm:w-1/3 flex items-center">
          <GiBoomerangSun className="text-gray-600 sm:text-4xl" />
          <h1 className="sm:px-2 px-1 sm:text-md text-sm text-gray-600 font-semibold">
            Google Merchent Center
          </h1>
          <div></div>
        </span>
        <div className="flex items-center rounded-lg w-full">
          <FloatingSearch />
        </div>
      </div>
      <div className="sm:w-1/3">
        <ButtonWrapper />
      </div>
      <div>
       <DropdownButton />
      </div>
    </div>
  );
}
