import Link from "next/link";
import React from "react";

const manga = ({ list }) => {
  return (
    <div className="w-[full] h-full md:h-screen md:h-min-screen flex items-center md:flex-row flex-col">
      <div className="bg-slate-100 p-3 rounded-xl md:w-2/3 flex justify-center items-center flex-col md:flex-row m-5">
        <img className="m-5 rounded-xl" alt={list.name} src={list.avatar} />
        <div className="h-full w-full m-2">
          <h1 className="font-bold text-xl md:text-3xl text-gray-700 mb-3">
            {list.name}
          </h1>
          <div className="max-h-[180px] overflow-y-scroll overflow-hidden w-full h-full">
            {list.info}
          </div>
        </div>
      </div>
      <div className="md:w-1/3 md:h-2/3 w-11/12 md:my-10 m-5 overflow-y-scroll rounded-xl flex flex-col  bg-blue-50">
        {list.list?.map((chap) => (
          <Link
            href={`https://mangaka.vercel.app/chap?url=` + chap.chap}
            key={chap.name}
          >
            <a className="p-2 m-2 bg-blue-100 hover:bg-blue-200 font-bold text-gray-600 rounded-xl border-solid border-2 border-blue-200">
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
