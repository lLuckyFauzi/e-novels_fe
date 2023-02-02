import React from "react";
import Image from "next/image";
import BtnSecondary from "../../../component/Button/Secondary/Secondary";
import Text from "../../../component/Typography/Text";
import ProfileImg from "../../../public/image/avatar.png";
import CartIcon from "../../../public/icons/Cart.png";
import LoveIcon from "../../../public/icons/Love.png";

const InfoPersonal = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <Image
            width={"55px"}
            height={"55px"}
            src={ProfileImg}
            style={{ borderRadius: "50%" }}
          />
          <div>
            <Text
              color="black"
              size={20}
              style={{ fontWeight: "600", display: "block" }}
            >
              Lucky Fauzi
            </Text>
            <Text
              color="black"
              size={15}
              style={{ fontWeight: "200", display: "block" }}
            >
              LuckyFauzi2004@gmail.com
            </Text>
          </div>
        </div>
        <div>
          <BtnSecondary style={{ borderRadius: "5px" }}>Logout</BtnSecondary>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "15px",
        }}
      >
        <BtnSecondary
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Image src={CartIcon} width={"19px"} height={"19px"} />
          <Text>My Cart</Text>
        </BtnSecondary>
        <BtnSecondary
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Image src={LoveIcon} width={"19px"} height={"19px"} />
          <Text>My List</Text>
        </BtnSecondary>
      </div>
    </>
  );
};

export default InfoPersonal;
