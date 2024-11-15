import React from "react";
import "./oursupport.css";
import Title from "../title/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Swippercard from "../swippercard/Swippercard";


import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";
import Inpartners from "../inpartners/Inpartners";
import { BiBorderRadius } from "react-icons/bi";

const Oursupport = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="oursupport-container">
      {/* <div className="oursupport-contents">
        <div className="oursupport-title">
          <Title content="What we support" />
        </div>
      </div>

      <div className="swipper-contents">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="custom-slide">
                <Swippercard
                  bgImage={swipperchild}
                  headercontent={"Livelihood Training"}
                  text={
                    "(solar electrification and entrepreneurship) for  at-risk youths in the Community"
                  }
                />
              </div>
            </div>
            <div>
              <div className="custom-slide">
                <Swippercard
                  bgImage={graduation}
                  headercontent={"Scholarship"}
                  text={
                    "Dedicated to support post-primary school girls, girls in STEM."
                  }
                />
              </div>
            </div>
            <div>
              <div className="custom-slide">
                <Swippercard
                  bgImage={together}
                  headercontent={"Community Development"}
                  text={
                    "Dedicated to empowering the community through women and girls’ health, education, and economic wellbeing. "
                  }
                />
              </div>
            </div>
            <div>
              <div className="custom-slide">
                <Swippercard
                  bgImage={swipperchild}
                  headercontent={"The Sechwi Refuge Home"}
                  text={
                    "Planned for women and children seeking shelter from abuse and conflict, to be piloted in line with best practice and coordinated with existing health care and counselling services (incl. online)."
                  }
                />
              </div>
            </div>
          </Slider>
        </div>
      </div> */}
      <div className="ipartner-container">
        <Inpartners />
      </div>
    </div>
  );
};

export default Oursupport;
