import Image from "next/image";
import React from "react";
import Text from "../../../component/Typography/Text";
import MailIcon from "../../../public/icons/Mail.png";

const TagInfo = () => {
  return (
    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
      <div
        style={{
          padding: "8px",
          backgroundColor: "#F3F3F3",
          borderRadius: "12px",
          display: "flex",
          alignContent: "center",
          width: "35px",
          height: "35px",
        }}
      >
        <Image src={MailIcon} />
      </div>
      <div>
        <Text
          style={{
            display: "block",
          }}
          size={15}
        >
          Luckyfauzi2004@gmail.com
        </Text>
        <Text
          style={{
            display: "block",
            fontWeight: "300",
            color: "#0000004e",
          }}
          size={10}
        >
          Mail Address
        </Text>
      </div>
    </div>
  );
};

export default TagInfo;
