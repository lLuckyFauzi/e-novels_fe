import React from "react";
import Card from "../../../component/Card/Card";
import Text from "../../../component/Typography/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import SwiperStyle from "../HomeStyle.module.scss";

export default function BestSeller() {
  return (
    <div>
      <Text
        style={{ textAlign: "center", display: "block", paddingTop: "50px" }}
        size={40}
      >
        Best Seller Books
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          paddingTop: "50px",
        }}
        className={SwiperStyle.swiperContainer}
      >
        <Swiper
          className={SwiperStyle.swiper}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SwiperSlide
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
