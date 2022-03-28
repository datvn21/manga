import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HorizontalScroll } from "../components/HorizontalScroll";
import Layout from "../components/Layout";
const chap = ({ images }) => {
  const scrollRef = HorizontalScroll();
  return (
    <Layout title={images.name}>
      <div
        ref={scrollRef}
        className="md:h-screen h-screen w-full md:overflow-y-hidden bg-slate-200 md:w-screen flex flex-col md:flex-row overflow-x-hidden md:overflow-x-scroll"
      >
        {images.data?.map((im) => (
          <img
            className="mx-1 h-screen w-full md:w-auto"
            key={im}
            src={im}
            alt={im}
          />
        ))}
      </div>
    </Layout>
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
