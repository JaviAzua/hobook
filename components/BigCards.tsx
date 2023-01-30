import Image from "next/image";
import { BigCard } from "../types";

interface Props {
  cards: BigCard[];
}

export default function BigCards({ cards }: Props) {
  return (
    <div>
      <h3 className="text-3xl font-bold py-8">Choose your dream house:</h3>
      <div className="p-3 flex space-x-4 scrollbar-hide overflow-scroll">
        {cards?.map((card) => (
          <div
            key={card.title}
            className="cursor-pointer hover:scale-105 transform duration-300 ease-out"
          >
            <div className="relative h-72 w-72">
              <Image src={card.img} alt="" fill className=" rounded-xl" />
            </div>
            <h4 className="text-center font-semibold tracking-widest">
              {card.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
