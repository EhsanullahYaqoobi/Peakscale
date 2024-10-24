"use client";
import * as React from "react";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchItem() {
  return (
    <div className="flex items-center px-4 w-full">
      <span>
        <IoSearchSharp className="text-gray-600"/>
      </span>
      <span className="flex w-full py-1">
        <SearchBox placeholder="Google Ads" underlined={true} className="w-full font-semibold"/>
      </span>
    </div>
  );
}
