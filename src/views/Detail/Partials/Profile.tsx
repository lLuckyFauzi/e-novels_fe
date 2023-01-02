import Image from "next/image";
import React from "react";
import Text from "../../../component/Typography/Text";
import Avatar from "../../../public/image/avatar.png";
import AddUser from "../../../public/icons/AddUser.png";
import BtnPrimary from "../../../component/Button/Primary/Primary";
import ChatIcon from "../../../public/icons/Chat.png";
import ChatUser from "../../../public/icons/ChatUser.png";

const Profile = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "40px 65px",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Image src={Avatar} width={"112px"} height={"112px"} />
        <div>
          <Text style={{ display: "block", fontWeight: "600" }} size={20}>
            Auryn Vientania
          </Text>
          <Text
            style={{
              display: "block",
              fontWeight: "300",
              color: "#787878",
              marginBottom: "25px",
            }}
            size={18}
          >
            21k Followers
          </Text>
          <Image src={AddUser} width={"25px"} height={"25px"} />
        </div>
      </div>
      <hr
        style={{
          height: "100px",
          width: "1px",
          backgroundColor: "#787878",
          border: "none",
          borderRadius: "12px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        <BtnPrimary
          style={{
            backgroundColor: "#71492E",
            borderRadius: "0px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "9px 13px",
          }}
        >
          <Image src={ChatIcon} width={"20px"} height="20px" />
          <Text size={17} color={"white"} style={{ fontWeight: "400" }}>
            Chat Penjual
          </Text>
        </BtnPrimary>
        <BtnPrimary
          style={{
            backgroundColor: "white",
            borderRadius: "0px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            border: "1px solid #71492E",
            padding: "9px 13px",
          }}
        >
          <Image src={ChatUser} width={"20px"} height="20px" />
          <Text size={17} color={"black"} style={{ fontWeight: "400" }}>
            Kunjungi Penjual
          </Text>
        </BtnPrimary>
      </div>
      <hr
        style={{
          height: "100px",
          width: "1px",
          backgroundColor: "#787878",
          border: "none",
          borderRadius: "12px",
        }}
      />
      <div>
        <div>
          <Text style={{ fontWeight: "300" }} size={20}>
            Produk
          </Text>
          <Text
            bold
            size={20}
            style={{ fontWeight: "700", color: "#71492E", paddingLeft: "20px" }}
          >
            10
          </Text>
        </div>
        <div>
          <Text style={{ fontWeight: "300" }} size={20}>
            Penilaian
          </Text>
          <Text
            bold
            size={20}
            style={{ fontWeight: "700", color: "#71492E", paddingLeft: "20px" }}
          >
            12Rb
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Profile;
