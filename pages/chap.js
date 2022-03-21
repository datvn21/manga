import Head from "next/head";
import Link from "next/link";
import React from "react";
import { HorizontalScroll } from "../components/HorizontalScroll";
const chap = ({ images }) => {
  const scrollRef = HorizontalScroll();
  return (
    <div
      ref={scrollRef}
      className="md:h-screen h-screen w-full md:overflow-y-hidden bg-slate-200 md:w-screen flex flex-col md:flex-row-reverse overflow-x-hidden md:overflow-x-scroll"
    >
      {images.data?.map((im) => (
        <img
          className="mx-1 h-screen w-full md:w-auto"
          key={im}
          src={im}
          alt={im}
        />
      ))}
      <Head>
        <title>{images.name}</title>
      </Head>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  //console.log(context);
  /*const res = await fetch(
    "https://mangaka.vercel.app/api/chap?url=" + context.query.url
  );*/
  const res = await fetch(
    "https://mangaka.vercel.app/api/chap?url=" + context.query.url
  );
  const images = await res.json();
  console.log(images);
  return {
    props: {
      images,
    },
  };
};

export default chap;
