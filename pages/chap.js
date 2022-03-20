import Link from "next/link";
import React from "react";
import { HorizontalScroll } from "../components/HorizontalScroll";
const chap = ({ images }) => {
  const scrollRef = HorizontalScroll();
  return (
    <div
      ref={scrollRef}
      className="h-screen overflow-y-hidden bg-slate-200 w-screen flex flex-row-reverse overflow-x-scroll"
    >
      {images.data?.map((im) => (
        <img className="mx-1 h-screen w-auto" key={im} src={im} alt={im} />
      ))}
    </div>
  );
};
export const getServerSideProps = async (context) => {
  //console.log(context);
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
