import React from "react";
import Head from "next/head";
const Layout = ({ title, children }) => {
  return (
    <div className="flex ">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
