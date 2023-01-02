import Link from "next/link";
import React from "react";
import Text from "../../component/Typography/Text";
import BestSeller from "../Home/Partials/AnotherBook";
import Comment from "./Partials/Comment";
import ImagePreview from "./Partials/ImagePreview";
import ProductDetail from "./Partials/ProductDetail";
import Profile from "./Partials/Profile";

const Detail = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "160px 0px 500px 0px",
        backgroundColor: "#F2F2F2",
      }}
    >
      <div
        style={{
          padding: "120px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "170px",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <div>
            <ImagePreview />
          </div>
          <div>
            <ProductDetail />
          </div>
        </div>
        <div
          style={{
            margin: "60px 0px",
          }}
        >
          <hr
            style={{
              width: "1050px",
              height: "1px",
              border: "none",
              backgroundColor: "#71492E",
              borderRadius: "12px",
            }}
          />
        </div>
        <div>
          <Profile />
        </div>
        <div
          style={{
            marginTop: "125px",
          }}
        >
          <Text
            size={40}
            style={{ fontWeight: "300", display: "block", textAlign: "center" }}
          >
            Comment
          </Text>
          <Comment />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href={"#"}>
              <Text
                size={25}
                style={{
                  fontWeight: "400",
                  color: "#71492E",
                  paddingTop: "50px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                Show More
              </Text>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
        }}
      >
        <BestSeller />
      </div>
    </div>
  );
};

export default Detail;
