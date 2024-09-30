import React from "react";
import "./ourpillars.css";
import Title from "../title/Title";
import Pillarcard from "../pillarcards/Pillarcard";
import capacitybuilding from "../../assets/capacitybuilding.png";
import community from "../../assets/community Icon.png";
import culture from "../../assets/culture.png";
import resources from "../../assets/resources.png";
import skills from "../../assets/resources.png";

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";

const Ourpillars = () => {
  return (
    <div className="ourPillars-container" id="pillars">
      <div className="ourPillars-title">
        <Title content="Our Pillars" />
      </div>
      <div className="ourPillars-contents">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          breakpoints={{
            468: {
              slidesPerView: 1.5, // 1 slide for screens 640px and below
            },
            968: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          // slidesPerView={3.5}
          // navigation
          loop={true}
          pagination={{ clickable: true

           }}
          scrollbar={false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 5000, // Delay between slides in milliseconds
            disableOnInteraction: false,
            reverseDirection: true
          }}
        >
          <SwiperSlide className="custom-slide">
            <Pillarcard
              bgImage={community}
              headercontent={"Community Development"}
              text={"Strengthen Communities, Build peace and resilience"}
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <Pillarcard
              bgImage={skills}
              headercontent={"Skills + Livelyhoods"}
              text={
                "Education & vocational training. Equip youth for income generation."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <Pillarcard
              bgImage={culture}
              headercontent={"Culture"}
              text={"Celebrate heritage. Broaden world view."}
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <Pillarcard
              bgImage={capacitybuilding}
              headercontent={"Capacity-Building"}
              text={
                "Train & empower community leaders. Mentorship programs for youth & professionals."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <Pillarcard
              bgImage={resources}
              headercontent={"Resources"}
              text={
                "Scholarships & education assistance. Trauma-informed care & support."
              }
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Ourpillars;
