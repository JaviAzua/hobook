import React from "react";
import { DestinationT } from "../types";
import Image from "next/image";

interface Props {
  destinations: DestinationT[];
}

function Destination({ destinations }: Props) {
  return (
    <div>
      <h3 className="text-3xl font-bold ">Destinations:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 w-[80%] mx-auto ">
        {destinations?.map((destination, i) => (
          <div
            key={i}
            className="flex gap-2 bg-gray-300 rounded-xl p-2 cursor-pointer hover:scale-110 duration-500"
          >
            <Image
              src={destination.img}
              className="rounded-xl"
              alt=""
              width={100}
              height={200}
            />
            <div className="flex flex-col justify-center">
              <h4 className="font-bold text-lg">{destination.location}</h4>
              <p className="text-sm text-gray-500 font-semibold">
                {destination.distance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
