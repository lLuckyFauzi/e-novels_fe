import Image from "next/image";
import React from "react";
import Text from "../../component/Typography/Text";
import InfoPersonal from "./Partials/InfoPersonal";
import TagInfo from "./Partials/TagInfo";
import EditIcon from "../../public/icons/Edit.png";
import { Button } from "antd";

const Personal = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        minHeight: "100vh",
        paddingBottom: "500px",
        paddingTop: "150px",
      }}
    >
      <div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "20px",
            width: "824px",
          }}
        >
          <InfoPersonal />
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "20px",
            width: "824px",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text size={25} style={{ fontWeight: "600" }}>
              Personal Information
            </Text>
            <div style={{ cursor: "pointer" }}>
              <Image src={EditIcon} width={"20px"} height={"20px"} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "60px",
              marginTop: "30px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <TagInfo />
              <TagInfo />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <TagInfo />
              <TagInfo />
            </div>
          </div>
          <hr
            style={{
              border: "none",
              backgroundColor: "#D9D9D9",
              width: "100%",
              height: "1px",
              margin: "25px 0px",
            }}
          />
          <div>
            <TagInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
