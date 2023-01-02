import React from "react";
import Text from "../../../component/Typography/Text";
import SignImage from "../../../public/image/signimg.png";
import Image from "next/image";

const LeftContent = () => {
  return (
    <div
      style={{
        width: "50%",
        backgroundImage: "linear-gradient(to bottom right, #DDB892, #B08968)",
      }}
    >
      <div style={{ textAlign: "center", paddingTop: "130px" }}>
        <Text size={55} style={{ fontFamily: "Josefin Slab" }}>
          E'N
        </Text>
        <Text size={45} style={{ fontWeight: 200 }}>
          ovels
        </Text>
        <br />
        <Image src={SignImage} width="512px" height={"512px"} alt="" />
        <br />
        <Text size={30} style={{ fontWeight: 200 }}>
          Beli Novel terbaikmu dengan mudah <br /> di{" "}
        </Text>
        <Text size={30} style={{ fontFamily: "Josefin Slab" }}>
          E'N
        </Text>
        <Text size={30} style={{ fontWeight: 200 }}>
          ovels
        </Text>
      </div>
    </div>
  );
};

export default LeftContent;
