import Image from "next/image";
import React from "react";
import Avatar from "../../public/image/avatar.png";
import Star from "../StarRating/Star";
import Text from "../Typography/Text";

const CardComment = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "32px 30px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",

          gap: "25px",
        }}
      >
        <Image src={Avatar} width={"77px"} height={"77px"} />
        <div>
          <Text
            size={23}
            style={{
              fontWeight: "600",
              display: "block",
            }}
          >
            Rara
          </Text>
          <Star showDisplay={false} />
        </div>
      </div>
      <hr
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "#B08968",
          border: "none",
          borderRadius: "12px",
          margin: "25px 0px",
        }}
      />
      <div>
        <Text
          size={20}
          style={{
            fontWeight: "300",
          }}
        >
          “Novel ini sangat recomended, produknya juga original, Sangat keren.”
        </Text>
      </div>
      <Text
        size={12}
        style={{
          fontWeight: "400",
          color: "#0000006B",
          opacity: "90%",
          marginTop: "25px",
          display: "block",
        }}
      >
        2022-22-09
      </Text>
    </div>
  );
};

export default CardComment;
