import React from "react";
import { useState } from "react";
import "./ourpillars.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Title from "../title/Title";
import Pillarcard from "../pillarcards/Pillarcard";
import capacitybuilding from "../../assets/capacitybuilding.png";
import community from "../../assets/community Icon.png";
import culture from "../../assets/culture.png";
import resources from "../../assets/resources.png";
import skills from "../../assets/skills.png";
import whr from "../../assets/whr.png";
import advisory from "../../assets/advisoryicon.png";

import Pillarcardtwo from "../pillarcards/Pillarcardtwo";
import Pillarcardthree from "../pillarcards/Pillarcardthree";
import Pillarcardfour from "../pillarcards/Pillarcardfour";
import Pillarcardfive from "../pillarcards/Pillarcardfive";

const Ourpillars = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="ourPillars-container" id="pillars">
      <div className="ourPillars-title">
        <Title content="Our Pillars" />
      </div>
      <div className="ourPillars-contents">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="custom-slide">
                <Pillarcard
                  bgImage={community}
                  headercontent={"Community Development"}
                  text={
                    "Collaborate with community organizations, promote community ownership, build capacity and promote sustainable practices."
                  }
                />
              </div>
            </div>
            <div>
              <div className="custom-slide">
                <Pillarcardtwo
                  bgImage={skills}
                  headercontent={"Skills, Livelihoods & Entrepreneurship"}
                  text={
                    "Promote education and economic empowerment of at-risk youth and women."
                  }
                />
              </div>
            </div>
            <div>
              <div className="custom-slide">
                <Pillarcardthree
                  bgImage={culture}
                  headercontent={"Culture"}
                  text={
                    "Foster equitable traditions, harness local content, and promote sustainable tourism."
                  }
                />
              </div>
            </div>
            <div>
              <div className="custom-slide">
                <Pillarcardfour
                  bgImage={advisory}
                  headercontent={"Advisory Services"}
                  text={
                    "Empower community leaders, mentor youth and enterprise."
                  }
                />
              </div>
            </div>

            <div>
              <div className="custom-slide">
                <Pillarcardfive
                  bgImage={whr}
                  headercontent={"Women's Health & Resilience"}
                  text={
                    "Financial security, sex and reproductive health education, and gender-based violence (GBV) prevention."
                  }
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Ourpillars;
