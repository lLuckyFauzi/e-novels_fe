import Image from "next/image";
import React from "react";
import Text from "../../../component/Typography/Text";
import ReadingImg from "../../../public/image/Reading.png";

const Footer = () => {
  return (
    <div
      style={{
        height: "539px",
        backgroundColor: "#71492E",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "670px",
          position: "absolute",
          right: "50px",
          top: "-560px",
        }}
      >
        <Image src={ReadingImg} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
          padding: "90px 100px",
        }}
      >
        <div>
          <Text bold size={50} color="white">
            E'N
          </Text>
          <Text size={40} color="white" style={{ fontWeight: "300" }}>
            ovels
          </Text>
          <br />
          <Text size={20} color="white" style={{ fontWeight: 200 }}>
            Kb. Bandung, Kec. Soreang RT 02 RW 08 Cihaur
          </Text>
          <div
            style={{
              marginTop: "40px",
            }}
          >
            <Text size={30} color="white" style={{ fontWeight: 500 }}>
              Contact
            </Text>
            <br />
            <div>
              <Text
                underline
                color="white"
                size={25}
                style={{ fontWeight: 200 }}
              >
                0895632035020
              </Text>
            </div>
            <div>
              <Text
                underline
                color="white"
                size={25}
                style={{ fontWeight: 200 }}
              >
                LuckyFauzi@gmail.com
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Text size={35} style={{ fontWeight: 600 }} color="white">
            Media Social
          </Text>
          <div>
            <Text size={25} color="white">
              WhatsApp
            </Text>
          </div>
          <div>
            <Text size={25} color="white">
              WhatsApp
            </Text>
          </div>
          <div>
            <Text size={25} color="white">
              WhatsApp
            </Text>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#B08968",
          height: "58px",
          position: "absolute",
          bottom: "0px",
          zIndex: "60",
          left: "0px",
          right: "0px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          size={25}
          color="white"
          style={{
            fontWeight: 200,
          }}
        >
          Created By @LuckyFauzi
        </Text>
      </div>
    </div>
  );
};

export default Footer;
