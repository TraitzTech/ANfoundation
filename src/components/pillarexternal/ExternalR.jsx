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
import ExternalP1 from "./externalPillars/ExternalP1";
import ExternalP2 from "./externalPillars/ExternalP2";
import ExternalP4 from "./externalPillars/ExternalP4";

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
                {/* <Pillarcard
                  bgImage={community}
                  headercontent={"Social Services"}
                  text={
                    "Education & vocational training. Equip youths for income generation."
                  }
                /> */}
                <ExternalP1
                  bgImage={community}
                  headercontent={"Community Developement"}
                />
              </div>
            </div>
            <div>
              <div className="custom-slide">
                <ExternalP2
                  bgImage={skills}
                  headercontent={"Skills, Livelihoods & Entrepreneurship"}
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
                <ExternalP3 bgImage={culture} headercontent={"Culture"} />
              </div>
            </div>
            <div>
              <div className="custom-slide">
                

                <ExternalP4
                  bgImage={capacitybuilding}
                  headercontent={"Social Services"}
                />
              </div>
            </div>

            <div>
              <div className="custom-slide">
                <ExternalP5 bgImage={resources} headercontent={"Community Expertise"} />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ExternalR;
