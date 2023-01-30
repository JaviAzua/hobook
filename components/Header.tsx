import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  BsFillPersonFill,
  BsHouseDoorFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";

type Props = {};

function Header({}: Props) {
  const [searched, setSearched] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState("1");

  const handleSelect = (rangesByKey: RangeKeyDict) => {
    setStartDate(rangesByKey.selection.startDate!);
    setEndDate(rangesByKey.selection.endDate!);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header>
      <div
        className={`sticky top-0 grid py-6 grid-cols-3 text-center items-center px-10`}
      >
        <Image
          alt=""
          className=""
          src={"/hoBook.svg"}
          width={60}
          height={100}
        />
        <div className="flex items-center border-2 bg-white px-2 py-3 rounded-full shadow-sm">
          <input
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            type="text"
            className=" placeholder:text-gray-400 text-sm flex-grow ml-2 bg-transparent outline-none overflow-hidden"
            placeholder="Where are u going?"
          />
          <div className="hidden md:inline-flex bg-greenFirst rounded-full justify-center items-center p-1">
            <FiSearch className="h-6 w-6 text-white rounded-full bg-greenFirst cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-end items-center space-x-4 md:space-x-10 lg:space-x-20">
          <div className="flex gap-2 items-center">
            <p className=" text-gray-600 font-semibold hidden md:inline-flex">
              Be a host
            </p>
            <BsHouseDoorFill className="iconHeader text-greenFirst" />
          </div>

          <div className="flex bg-slate-300 gap-4 shadow-sm p-2 rounded-full">
            <BiMenu className="iconHeader" />
            <BsFillPersonFill className="iconHeader" />
          </div>
        </div>
        {searched && (
          <div className="col-span-3 md:scale-100 flex flex-col justify-center items-center bg-white mt-2">
            <div className="scale-[0.80] sm:scale-90 md:scale-100">
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#5DDA80"]}
                onChange={handleSelect}
              />
              <div className="flex py-2 mx-3 items-center border-b pb-2">
                <h3 className="text-2xl text-left  flex-grow font-semibold">
                  Nº of guests
                </h3>
                <div className="flex items-center gap-2">
                  <BsFillPeopleFill className="w-5 h-5" />
                  <input
                    className="w-10 text-2xl outline-none text-greenFirst "
                    type="number"
                    value={noOfGuest}
                    min={1}
                    onChange={(e) => setNoOfGuest(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex py-4">
                <button
                  onClick={() => setSearched("")}
                  className="buttonHeader"
                >
                  Cancel
                </button>
                <button className="buttonHeader text-greenFirst">Search</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
