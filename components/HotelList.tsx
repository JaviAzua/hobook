import React from "react";
import { HotelT } from "../types";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export interface Props {
  hotel: HotelT;
}

function HotelList({ hotel }: Props) {
  return (
    <div className="cursor-pointer relative border-2 border-[#5DDA80]/10 rounded-xl p-5 flex flex-col md:flex-row gap-4 hover:scale-105 duration-500">
      <div className="relative w-[15rem] h-40">
        <Image
          src={hotel.img}
          alt=""
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <AiFillStar className="text-[#5DDA80]" />
          <p className="font-semibold text-sm">{hotel.star}</p>
        </div>
        <h3 className="font-semibold text-xl">{hotel.title}</h3>
        <p className="text-xs">{hotel.description}</p>
        <p className="absolute bottom-0 right-6 font-semibold text-xs text-gray-500">
          {hotel.location}
        </p>
        <div className="flex gap-4 mt-10">
          <p className="font-semibold text-lg">{hotel.price}-</p>
          <p className="font-bold text-lg">{hotel.total}</p>
        </div>
      </div>
    </div>
  );
}

export default HotelList;
