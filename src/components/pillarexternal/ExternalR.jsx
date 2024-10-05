import React from "react";
import "./externalR.css";

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

import Pillarcardtwo from "../pillarcards/Pillarcardtwo";
import Pillarcardthree from "../pillarcards/Pillarcardthree";
import Pillarcardfour from "../pillarcards/Pillarcardfour";
import Pillarcardfive from "../pillarcards/Pillarcardfive";
import Varpillarcard from "../pillarcards/varpillarcard/Varpillarcard";
import ExternalP5 from "./externalPillars/ExternalP5";
import ExternalP3 from "./externalPillars/ExternalP3";

const ExternalR = () => {
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
        <Title content="Our External Resources" />
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
                    "Education & vocational training. Equip youths for income generation."
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
                    "Trainings in renewable energy, construction and skill traits"
                  }
                />
              </div>
            </div>
            <div>
              <div className="custom-slide">
                {/* <Pillarcardthree
                  bgImage={culture}
                  headercontent={"Culture"}
                  text={"Celebrate heritage. Broaden world view."}
                /> */}
                <ExternalP3 bgImage={culture}
                  headercontent={"Culture"}/>
              </div>
            </div>
            <div>
              <div className="custom-slide">
                <Pillarcardfour
                  bgImage={capacitybuilding}
                  headercontent={"Advisory Services"}
                  text={
                    "Train & empower community leaders. Mentorship programs for youths & professionals."
                  }
                />
              </div>
            </div>

            <div>
              <div className="custom-slide">
                <ExternalP5 bgImage={resources} headercontent={"Resources"} />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ExternalR;
