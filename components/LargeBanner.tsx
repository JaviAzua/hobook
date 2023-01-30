import Image from "next/image";
import React from "react";

type Props = {};

function LargeBanner({}: Props) {
  return (
    <div className="mt-20 relative h-[30vh] w-[80%] mx-auto">
      <Image
        src={"/largeBanner.jpg"}
        alt=""
        fill
        className="object-cover rounded-2xl"
      />
      <div className="absolute ml-2  left-4 top-8">
        <p className="text-4xl font-bold drop-shadow-md ">The best places!</p>
        <p className="text-sm font-semibold">Whislist created by HoBook</p>
        <button className="mt-6 font-semibold px-4 py-2 rounded-full bg-greenFirst hover:scale-105 duration-300">
          Get Inspired
        </button>
      </div>
    </div>
  );
}

export default LargeBanner;
