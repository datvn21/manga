import Link from "next/link";
import React from "react";

const manga = ({ list }) => {
  return (
    <div className="w-[full] h-full md:h-screen md:h-min-screen flex items-center md:flex-row flex-col">
      <div className="bg-slate-100 rounded-xl md:w-2/3 flex justify-center items-center flex-col md:flex-row m-5">
        <img className="m-5 rounded-xl" alt={list.name} src={list.avatar} />
        <div className="h-full w-full m-2">
          <h1 className="font-bold text-3xl text-gray-700 mb-3">{list.name}</h1>
          <div className="max-h-[180px] overflow-y-scroll overflow-hidden w-full h-full">
            {list.info}
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-col grid grid-cols-2 rounded-xl font-bold text-md text-gray-500 overflow-y-scroll overflow-hidden bg-slate-100 w:3/4 md:w-1/3 h-full m-5">
        {list.list?.map((chap) => (
          <Link
            href={`https://mangaka.vercel.app/chap?url=` + chap.chap}
            key={chap.name}
          >
            <a className="m-4 w-full md:w-[90%] p-2 h-[80%] md:h-[120%] bg-blue-50 border-2 border-solid border-blue-200 rounded-xl">
              {chap.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  //console.log(context);
  const res = await fetch(
    "https://mangaka.vercel.app/api/list?url=" + context.query.url
  );
  const list = await res.json();
  //console.log(list);
  return {
    props: {
      list,
    },
  };
}

export default manga;
