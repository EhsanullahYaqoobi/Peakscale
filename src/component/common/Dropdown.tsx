"use client";

import { FaAngleDown } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (item: string) => {
    console.log(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center gap-1 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white focus:outline-none"
        >
          Language
          <FaAngleDown
            className={`transition-transform duration-200 mt-1 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute -right-5 z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => handleItemClick("Option 1")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
            English
            </button>
            <button
              onClick={() => handleItemClick("Option 2")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              German
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
