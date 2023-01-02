import React from "react";
import Description from "./Partials/Description";
import Background from "../../public/image/Background.png";
import Image from "next/image";
import LandingSlide from "./Partials/LandingSlide";
import BestSeller from "./Partials/BestSeller";
import Feature from "./Partials/Feature";
import AnotherBook from "./Partials/AnotherBook";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "120vh",
          padding: "220px 100px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: "-99",
            left: "0px",
            top: "0px",
          }}
        >
          <Image src={Background} alt="" />
        </div>
        <div style={{ width: "50%" }}>
          <Description />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LandingSlide />
        </div>
      </div>
      <div style={{ backgroundColor: "#F2F2F2", paddingBottom: "500px" }}>
        <div style={{ minHeight: "100vh" }}>
          <BestSeller />
        </div>
        <div style={{ padding: "50px 0px" }}>
          <Feature />
        </div>
        <div style={{ minHeight: "90vh" }}>
          <AnotherBook />
        </div>
      </div>
    </>
  );
};

export default Home;
