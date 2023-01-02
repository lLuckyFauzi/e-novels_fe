import React from "react";
import CardComment from "../../../component/CardComment/CardComment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperStyle from "../../Home/HomeStyle.module.scss";

const Comment = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        paddingTop: "50px",
      }}
      className={SwiperStyle.swiperContainer}
    >
      <Swiper slidesPerView={3} spaceBetween={30} freeMode={true}>
        {[1, 2, 3, 4, 5, 6].map((el) => {
          return (
            <div>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardComment />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Comment;
