import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { BigCard, DestinationT } from "../types";
import Destination from "../components/Destination";
import BigCards from "../components/BigCards";
import LargeBanner from "../components/LargeBanner";
import Footer from "../components/Footer";

export interface Props {
  destinations: DestinationT[];
  cards: BigCard[];
}

export default function Home({ destinations, cards }: Props) {
  return (
    <>
      <Head>
        <title>HoBook</title>
        <meta name="description" content="Made by Javier Azua, for " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-2">
        <section className="mt-8">
          <Destination destinations={destinations} />
        </section>

        <section className="mt-12">
          <BigCards cards={cards} />
        </section>

        <section className="mt-12">
          <LargeBanner />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export const getStaticProps = async () => {
  const destinations = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cards = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res) =>
    res.json()
  );

  return {
    props: {
      destinations,
      cards,
    },
  };
};
