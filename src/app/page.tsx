import React from "react";

import Navbar from "@/component/navbar/Navbar";
import SubNav from "@/component/navbar/SubNav";

export default function Home() {
  return (
    <div className="flex flex-col w-full p-1 gap-8">
      <div className="flex w-full rounded-lg">
        <Navbar />
      </div>
      <div className="flex w-full px-12">
        <SubNav />
      </div>
    </div>
  );
}
