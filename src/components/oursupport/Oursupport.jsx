import React from "react";
import "./oursupport.css";
import Title from "../title/Title";
import Swippercard from "../swippercard/Swippercard";

import farmers from "../../assets/farmers.png";
import together from "../../assets/together.png";
import swipperchild from "../../assets/swipperchildren.png";
import capacity from "../../assets/capacity.png";
import graduation from "../../assets/graduation.png";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";
import Inpartners from "../inpartners/Inpartners";

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
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          breakpoints={{
            568: {
              slidesPerView: 1, // 1 slide for screens 640px and below
            },
            968: {
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
          autoplay={{
            delay: 5000, // Delay between slides in milliseconds
            disableOnInteraction: false,
            reverseDirection: true
          }}
        >
          <div className="swiperSlide-container">
            <SwiperSlide className="custom-slide">
              <Swippercard
                bgImage={farmers}
                headercontent={"Livelihood Training"}
                text={
                  "(solar electrification and entrepreneurship) for two at-risk young men in recovery from drug addiction"
                }
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <Swippercard
                bgImage={graduation}
                headercontent={"Tuition/textbook Scholarship"}
                text={
                  "Dedicated to support to a an post-primary girls in Bambili, NWR "
                }
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <Swippercard
                bgImage={together}
                headercontent={"Community Development"}
                text={
                  "Dedicated to empowering the community through women and girls’ health, education, and economic wellbeing. "
                }
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <Swippercard
                bgImage={swipperchild}
                headercontent={"The Sechwi Refuge Home"}
                text={
                  "Planned for women and children seeking shelter from abuse and conflict, to be piloted in line with best practice and coordinated with existing health care and counselling services (incl. online)."
                }
              />
            </SwiperSlide>
            
          </div>
        </Swiper>
      </div>
      <div className="ipartner-container">
        <Inpartners />
      </div>
    </div>
  );
};

export default Oursupport;
