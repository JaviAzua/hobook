import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { HotelT } from "../types";
import HotelList from "../components/HotelList";
import Footer from "../components/Footer";
import Head from "next/head";

interface Props {
  hotelList: HotelT[];
}

function Search({ hotelList }: Props) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;
  const range = `${startDate} - ${endDate}`;

  return (
    <>
      <Head>
        <title>Searchs for {location}</title>
        <meta
          name="description"
          content="Made by Javier Azua, for educational purposes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location} - ${noOfGuest} guests - ${range}`} />
      <main>
        <section className="max-w-7xl mx-auto">
          <p>
            <span className="font-semibold text-sm">+80 results for - </span>
            <span className="text-sm text-gray-400">{range}</span> -{" "}
            <span className=" font-semibold text-sm text-[#5DDA80]">
              {noOfGuest} {""}
              guests
            </span>
          </p>
          <h2 className="text-3xl font-semibold ">{`Stays in "${location}"`}</h2>
          <div className="flex flex-col gap-8 pt-10 px-6">
            {hotelList.map((hotel) => (
              <div className="" key={hotel.img}>
                <HotelList hotel={hotel} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Search;

export const getServerSideProps = async () => {
  const hotels = await fetch("https://www.jsonkeeper.com/b/5NPS");

  const hotelList = await hotels.json();

  return {
    props: {
      hotelList: hotelList,
    },
  };
};
