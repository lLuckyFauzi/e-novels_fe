import Image from "next/image";
import React from "react";
import BtnPrimary from "../../../component/Button/Primary/Primary";
import Tag from "../../../component/DiscountTag/Tag";
import Star from "../../../component/StarRating/Star";
import Text from "../../../component/Typography/Text";
import AddIcons from "../../../public/icons/Add.png";
import MinIcons from "../../../public/icons/Min.png";
import AddToCart from "../../../public/icons/AddCart.png";
import Love from "../../../public/icons/Love.png";

const ProductDetail = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Text size={55} bold>
          Turning Page
        </Text>
        <Tag isFloating={false} />
      </div>
      <Text size={35} style={{ fontWeight: "300" }}>
        By Auryn Vientania
      </Text>
      <div
        style={{
          width: "590px",
          marginTop: "5px",
        }}
      >
        <Text bold size={35}>
          Sinopsis
        </Text>
        <br />
        <Text size={25} style={{ fontWeight: 300, width: "500px" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.."
        </Text>
      </div>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <Text bold size={35} style={{ lineHeight: "2px" }}>
          Rating
        </Text>
        <Star showDisplay />
      </div>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <Text bold size={35}>
          Rp. 120.000.00
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          gap: "65px",
          alignItems: "center",
          margin: "20px 0px 30px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "35px",
            position: "relative",
            top: "8px",
          }}
        >
          <BtnPrimary
            style={{
              backgroundColor: "#71492E",
              fontWeight: "500",
              fontSize: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              width: "50px",
              height: "50px",
            }}
          >
            <Image src={MinIcons} width={"27px"} height="2px" />
          </BtnPrimary>
          <Text
            size={25}
            style={{
              fontWeight: "700",
              fontSize: "40px",
            }}
          >
            0
          </Text>
          <BtnPrimary
            style={{
              backgroundColor: "#71492E",
              fontWeight: "500",
              fontSize: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              width: "50px",
              height: "50px",
            }}
          >
            <Image src={AddIcons} width="33px" height={"33px"} />
          </BtnPrimary>
        </div>
        <div
          style={{
            display: "flex",
            gap: "65px",
          }}
        >
          <Image src={AddToCart} width="45px" height={"45px"} />
          <Image src={Love} width="45px" height={"45px"} />
        </div>
      </div>
      <BtnPrimary
        style={{
          backgroundColor: "#71492E",
          fontSize: "30px",
          fontWeight: "500",
          padding: "10px 0px",
          height: "50px",
          lineHeight: "15px",
          width: "300px",
        }}
      >
        Buy Now
      </BtnPrimary>
    </div>
  );
};

export default ProductDetail;
