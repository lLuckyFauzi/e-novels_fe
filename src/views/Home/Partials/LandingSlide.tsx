import Image from "next/image";
import React from "react";
import LandingSlider from "../../../public/image/LandingSlider.png";

const LandingSlide = () => {
  return (
    <div
      style={{
        width: "600px",
        height: "220px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={LandingSlider} alt="" />
    </div>
  );
};

export default LandingSlide;
