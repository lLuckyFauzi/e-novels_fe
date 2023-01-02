import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../container/Footer/Footer";
import Header from "../container/Header/Header";

const LayoutDefault = (props: AppProps) => {
  const { Component, pageProps } = props;
  const router = useRouter();

  return (
    <>
      {router.pathname === "/signup" ? (
        <div>
          <Component {...pageProps} />
        </div>
      ) : (
        <div>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default LayoutDefault;
