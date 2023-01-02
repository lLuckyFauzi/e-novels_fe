import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../../../component/Card/Card";
import Text from "../../../component/Typography/Text";
import ArrowIcon from "../../../public/image/Arrow.png";
import HomeStyle from "../HomeStyle.module.scss";

export default function BestSeller() {
  return (
    <div style={{ position: "relative", zIndex: "60" }}>
      <Text
        style={{
          textAlign: "center",
          display: "block",
          paddingTop: "50px",
          fontWeight: "300",
        }}
        size={40}
      >
        Another Book
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        {[1, 2, 3].map(() => {
          return <Card />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          cursor: "pointer",
          marginRight: "60px",
          marginTop: "60px",
        }}
      >
        <Link href={"/shop"}>
          <div
            style={{ position: "relative" }}
            className={HomeStyle.btnSeeMore}
          >
            <Text size={30}>See More</Text>
            <div style={{ width: "120px", position: "absolute", top: "-5px" }}>
              <Image className={HomeStyle.arrowIcon} src={ArrowIcon} alt="" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
