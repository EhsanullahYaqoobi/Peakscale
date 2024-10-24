"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ButtonWrapper() {
  return (
    <div className="flex items-center justify-end px-4">
      <SpotlightButton />
    </div>
  );
}

const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const buttonElement = e.currentTarget as HTMLButtonElement; // Cast to HTMLButtonElement
      if (spanRef.current && buttonElement) {
        const { width } = buttonElement.getBoundingClientRect();
        const offset = e.offsetX;
        const left = `${(offset / width) * 100}%`;

        spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
      }
    };

    const handleMouseLeave = () => {
      if (spanRef.current) {
        spanRef.current.animate(
          { left: "50%" },
          { duration: 100, fill: "forwards" }
        );
      }
    };

    const buttonElement = btnRef.current;
    if (buttonElement) {
      buttonElement.addEventListener("mousemove", handleMouseMove);
      buttonElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener("mousemove", handleMouseMove);
        buttonElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Scale now
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};
