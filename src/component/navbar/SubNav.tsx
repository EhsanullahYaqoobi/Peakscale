import React from "react";
import { GiBoomerangSun } from "react-icons/gi";
import ButtonWrapper from "../common/button";

export default function SubNav() {
  return (
    <div className="flex justify-between items-center w-full bg-gray-200 rounded-lg p-2">
      <button className="flex items-center hover:bg-violet-500 rounded-lg text-gray-800 sm:gap-2 gap-1 font-semibold text-sm lg:p-2">
        <GiBoomerangSun className="text-yellow-600 text-4xl" />
        Google Merchent Center
      </button>
      <div className="sm:w-1/6">
        <ButtonWrapper />
      </div>
    </div>
  );
}
