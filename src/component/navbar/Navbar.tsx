"use client";
import React from "react";
import Image from "next/image";
import LogoImage from "../../../public/Navbar/pic.png";
import DropdownButton from "../common/Dropdown";
import { FloatingSearch } from "../common/FloatingSearch";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-50 rounded-lg p-1 py-3 gap-3">
      <div className="text-start">
        <Image
          src={LogoImage}
          alt="Logo"
          width="0"
          height="0"
          className="w-52 h-14"
        />
      </div>

      <div className="flex justify-between md:justify-end items-center sm:gap-5 gap-2 md:w-full">
        <FloatingSearch />
        <DropdownButton />
      </div>
    </div>
  );
}
