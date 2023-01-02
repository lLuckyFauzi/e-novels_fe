import React, { ReactNode } from "react";
import Text from "../../../component/Typography/Text";
import HeaderStyle from "./Header.module.scss";
import CartIcon from "../../../public/icons/Cart.png";
import DownIcon from "../../../public/icons/Down.png";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  children?: ReactNode;
}

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <div className={HeaderStyle.header}>
      <div className={HeaderStyle.logo}>
        <Text bold size={30} style={{ color: "#71492E" }}>
          E'N
        </Text>
        <Text size={30} style={{ fontWeight: 200 }}>
          ovels
        </Text>
      </div>
      <div className={HeaderStyle.list}>
        <Link href={"/"}>
          <Text bold size={20} style={{ color: "#B08968", cursor: "pointer" }}>
            Home
          </Text>
        </Link>
        <Link href={"/shop"}>
          <Text size={20} style={{ color: "#B08968", cursor: "pointer" }}>
            Shop
          </Text>
        </Link>
        <Link href={"#"}>
          <Text size={20} style={{ color: "#B08968", cursor: "pointer" }}>
            Categories
          </Text>
        </Link>
      </div>
      <div className={HeaderStyle.helper}>
        <div style={{ borderRight: "1px solid gray", paddingRight: "20px" }}>
          <Image src={CartIcon} width={30} height={30} alt="" />
        </div>
        <div className={HeaderStyle.profile}></div>
        <div style={{ width: "20px", height: "20px" }}>
          <Image src={DownIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
