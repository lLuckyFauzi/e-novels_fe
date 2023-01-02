import Image from "next/image";
import React from "react";
import Text from "../../../component/Typography/Text";
import FeatureImg from "../../../public/image/feature.png";
import Box from "../../../public/image/Box.png";

const Feature = () => {
  return (
    <div
      style={{
        height: "396px",
        backgroundColor: "#DDB892",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0px 50px",
      }}
    >
      <div style={{ width: "354px" }}>
        <Image src={FeatureImg} alt="" />
      </div>
      <div>
        <Text size={50} bold style={{ display: "block", textAlign: "center" }}>
          Feature
        </Text>
        <div style={{ display: "flex", gap: "140px", paddingTop: "25px" }}>
          <div
            style={{
              textAlign: "center",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "60px" }}>
              <Image src={Box} alt="" />
            </div>
            <Text size={20} style={{ display: "block", textAlign: "center" }}>
              Packaging
            </Text>
          </div>
          <div
            style={{
              textAlign: "center",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "60px" }}>
              <Image src={Box} alt="" />
            </div>
            <Text size={20} style={{ display: "block", textAlign: "center" }}>
              Packaging
            </Text>
          </div>
          <div
            style={{
              textAlign: "center",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "60px" }}>
              <Image src={Box} alt="" />
            </div>
            <Text size={20} style={{ display: "block", textAlign: "center" }}>
              Packaging
            </Text>
          </div>
        </div>
        <hr />
        <div style={{ display: "flex", gap: "147px" }}>
          <div>
            <Text
              size={20}
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "300",
              }}
            >
              Packaging
            </Text>
          </div>
          <div>
            <Text
              size={20}
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "300",
              }}
            >
              Packaging
            </Text>
          </div>
          <div>
            <Text
              size={20}
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "300",
              }}
            >
              Packaging
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
