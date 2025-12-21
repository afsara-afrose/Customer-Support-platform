import React from "react";
import bgleft from "../assets/vector1.png";

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
      {/* In-Progress Card */}
      <div className="relative h-44 rounded-xl text-white flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400 overflow-hidden">
        {/* Left image */}
        <img
          src={bgleft}
          alt=""
          className="absolute left-0 top-1/2 -translate-y-1/2 h-full object-contain"
        />

        {/* Right image (flipped) */}
        <img
          src={bgleft}
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-contain scale-x-[-1]"
        />

        {/* Content */}
        <p className="text-lg relative z-10">In-Progress</p>
        <h1 className="text-5xl font-bold relative z-10">0</h1>
      </div>

      {/* Resolved Card */}
      <div className="relative h-44 rounded-xl text-white flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 overflow-hidden">
        {/* Left image */}
        <img
          src={bgleft}
          alt=""
          className="absolute left-0 top-1/2 -translate-y-1/2 h-full object-contain"
        />

        {/* Right image (flipped) */}
        <img
          src={bgleft}
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-contain scale-x-[-1]"
        />

        <p className="text-lg relative z-10">Resolved</p>
        <h1 className="text-5xl font-bold relative z-10">0</h1>
      </div>
    </div>
  );
};

export default BannerSection;
