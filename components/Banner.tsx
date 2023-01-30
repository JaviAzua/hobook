import Image from "next/image";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="relative h-[50vh] md:h-[40vh] select-none">
      <Image alt="" src={"/bannerImg.jpg"} fill className=" object-cover" />
      <div className="absolute top-1/2 text-center w-full ">
        <h3 className="text-white text-2xl font-bold drop-shadow-lg">
          Dont know where to go?. Perfect!
        </h3>
        <button className="text-white mt-4 px-6 py-3 font-semibold shadow-sm rounded-full hover:scale-110 duration-300  bg-greenFirst">
          {`I'm flexible`}
        </button>
      </div>
    </div>
  );
}

export default Banner;
