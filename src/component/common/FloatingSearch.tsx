"use client";

import React, { useRef, useEffect, useState } from "react";

export function FloatingSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!inputRef.current?.contains(event.target as Node)) {
        setSearchValue("");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [inputRef]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="relative rounded-md" 
    style={{
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    }}
    >
      <input
        type="text"
        ref={inputRef}
        value={searchValue}
        onChange={handleInputChange}
        id="floating_label"
        className="peer block w-full border bg-gray-50 border-blue-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent"
        placeholder=" "
      />
      <label
        htmlFor="floating_label"
        className="absolute left-2 top-2 transition-all duration-200 transform scale-75 text-gray-500 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-gray-500 peer-focus:top-[-11px] peer-focus:left-2 peer-focus:text-blue-500"
      >
        <span className="z-40 bg-gray-50 px-2 text-lg">Google Ads</span>
      </label>
    </div>
  );
}
