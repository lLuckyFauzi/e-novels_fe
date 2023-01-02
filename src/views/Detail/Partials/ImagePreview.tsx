import Image from "next/image";
import React from "react";
import SampleDetail from "../../../public/image/sampleDetail.png";

const ImagePreview = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Image src={SampleDetail} width="429px" height={"632px"} />
      </div>
    </div>
  );
};

export default ImagePreview;
