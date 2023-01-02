import React from "react";
import BtnPrimary from "../../../component/Button/Primary/Primary";
import Text from "../../../component/Typography/Text";

const Description = () => {
  return (
    <div>
      <div style={{ lineHeight: "50px" }}>
        <Text size={45}>Find Your Best</Text>
        <br />
        <Text size={60} bold>
          Novel Collection
        </Text>
      </div>
      <br />
      <div style={{ lineHeight: "28px" }}>
        <Text size={25}>Lets make it easy to find your best</Text>
        <br />
        <Text size={25}>novel collection</Text>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Text>Here</Text>
        <BtnPrimary
          style={{ width: "150px", fontWeight: "500", fontSize: "18px" }}
        >
          Shop
        </BtnPrimary>
      </div>
    </div>
  );
};

export default Description;
