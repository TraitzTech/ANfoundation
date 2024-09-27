import React from "react";
import "./oursupport.css";
import Title from "../title/Title";
import Swippercard from "../swippercard/Swippercard";

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";

const Oursupport = () => {
  return (
    <div className="oursupport-container">
      <div className="oursupport-contents">
        <div className="oursupport-title">
          <Title content="What we support" />
        </div>
      </div>

      <div className="swipper-contents">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2, // 1 slide for screens 640px and below
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
          // slidesPerView={3.5}
          // navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="swiperSlide-container">
            <SwiperSlide>
              <Swippercard />
            </SwiperSlide>
            <SwiperSlide>
              <Swippercard />
            </SwiperSlide>
            <SwiperSlide>
              <Swippercard />
            </SwiperSlide>
            <SwiperSlide>
              <Swippercard />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Oursupport;
