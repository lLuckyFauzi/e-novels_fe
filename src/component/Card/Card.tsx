import Image from "next/image";
import React from "react";
import CardStyle from "./CardStyle.module.scss";
import Example from "../../public/image/Example.png";
import Text from "../Typography/Text";
import Tag from "../DiscountTag/Tag";
import Link from "next/link";

const Card = () => {
  return (
    <Link href={"/detail"}>
      <div className={CardStyle.card}>
        <Image src={Example} />
        <div className={CardStyle.description}>
          <div>
            <Text size={25} bold style={{}}>
              Alster Lake
            </Text>
            <br />
            <hr />
            <Text size={15} style={{ fontWeight: 300 }}>
              Auryn Vientania
            </Text>
          </div>
          <Text
            size={15}
            style={{ fontWeight: 500, color: "#71492E", paddingTop: "5px" }}
          >
            Rp. 99.000.00
          </Text>
        </div>
        <Tag isFloating={true} />
      </div>
    </Link>
  );
};

export default Card;
