import React from "react";
import { useState } from "react";
import "./ourpillars.css";
import Title from "../title/Title";
import Pillarcard from "../pillarcards/Pillarcard";
import capacitybuilding from "../../assets/capacitybuilding.png";
import community from "../../assets/community Icon.png";
import culture from "../../assets/culture.png";
import resources from "../../assets/resources.png";
import skills from "../../assets/skills.png";

import Pillarcardtwo from "../pillarcards/Pillarcardtwo";
import Pillarcardthree from "../pillarcards/Pillarcardthree";
import Pillarcardfour from "../pillarcards/Pillarcardfour";
import Pillarcardfive from "../pillarcards/Pillarcardfive";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";

const Ourpillars = () => {
  // const slides = [
  //   <Pillarcard
  //     bgImage={community}
  //     headercontent={"Community Development"}
  //     text={"Strengthen Communities, Build peace and resilience"}
  //   />,

  //   <Pillarcard
  //     bgImage={skills}
  //     headercontent={"Skills + Livelihoods"}
  //     text={
  //       "Education & vocational training. Equip youth for income generation."
  //     }
  //   />,

  //   <Pillarcard
  //     bgImage={culture}
  //     headercontent={"Culture"}
  //     text={"Celebrate heritage. Broaden world view."}
  //   />,

  //   <Pillarcard
  //     bgImage={capacitybuilding}
  //     headercontent={"Avisory Services"}
  //     text={
  //       "Train & empower community leaders. Mentorship programs for youth & professionals."
  //     }
  //   />,

  //   <Pillarcard
  //     bgImage={resources}
  //     headercontent={"Resources"}
  //     text={
  //       "Scholarships & education assistance. Trauma-informed care & support."
  //     }
  //   />,
  // ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("cliked dropdown");
  };

  return (
    <div className="ourPillars-container" id="pillars">
      <div className="ourPillars-title">
        <Title content="Our Pillars" />
      </div>
      <div className="ourPillars-contents">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          a11y={true}
          spaceBetween={10}
          loopedSlides={5}
          breakpoints={{
            468: {
              slidesPerView: 1, // 1 slide for screens 640px and below
              loopedSlides: 5,
            },
            968: {
              slidesPerView: 2,
              loopedSlides: 2.5,
            },
            1024: {
              slidesPerView: 5,
              loopedSlides: 5,
            },
          }}
          // slidesPerView={3.5}
          // navigation
          loop={true}
          allowSlideNext={false}
          pagination={{
            clickable: true,
          }}
          scrollbar={false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 5000, // Delay between slides in milliseconds
            disableOnInteraction: true,
            reverseDirection: true,
          }}
        >
          <SwiperSlide className="custom-slide">
            <Pillarcard
              bgImage={community}
              headercontent={"Community Development"}
              text={
                "Education & vocational training. Equip youth for income generation."
              }
            />
          </SwiperSlide>

          <SwiperSlide className="custom-slide">
            <Pillarcardtwo
              bgImage={skills}
              headercontent={"Skills + Livelihoods"}
              text={
                "Education & vocational training. Equip youth for income generation."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <Pillarcardthree
              bgImage={culture}
              headercontent={"Culture"}
              text={"Celebrate heritage. Broaden world view."}
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <Pillarcardfour
              bgImage={capacitybuilding}
              headercontent={"Advisory Services"}
              text={
                "Train & empower community leaders. Mentorship programs for youth & professionals."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <Pillarcardfive
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
