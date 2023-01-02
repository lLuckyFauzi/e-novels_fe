import Image from "next/image";
import React from "react";
import StarIcon from "../../public/icons/Star.png";
import Text from "../Typography/Text";

interface StarProps {
  showDisplay?: boolean;
}

const Star = (props: StarProps) => {
  const { showDisplay } = props;

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Image src={StarIcon} height="25px" width={"25px"} />
        <Image src={StarIcon} height="25px" width={"25px"} />
        <Image src={StarIcon} height="25px" width={"25px"} />
        <Image src={StarIcon} height="25px" width={"25px"} />
        <Image src={StarIcon} height="25px" width={"25px"} />
      </div>
      {showDisplay && (
        <Text
          size={20}
          style={{
            fontWeight: "300",
            color: "#71492E",
            position: "relative",
            top: "5px",
          }}
        >
          / 9.0
        </Text>
      )}
    </div>
  );
};

export default Star;
