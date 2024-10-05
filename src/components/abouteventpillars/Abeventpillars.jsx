import React from "react";
import "./abevenpillars.css";

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
import Varpillar1 from "../pillarcards/varpillarcard/varpillarsourcards/Varpillar1";
import Varpillar2 from "../pillarcards/varpillarcard/varpillarsourcards/Varpillar2";
import Varpillar3 from "../pillarcards/varpillarcard/varpillarsourcards/Varpillarcard3";
import Varpillar4 from "../pillarcards/varpillarcard/varpillarsourcards/Varpillar4";
import Varpillar5 from "../pillarcards/varpillarcard/varpillarsourcards/Varpillar5";

const Abeventpillars = () => {
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
        <Title content="Programs" />
      </div>
      <div className="ourPillars-contents">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="custom-slide varPillarcard-community">
                <Varpillar2
                  bgImage={skills}
                  headercontent={"Skills, Livelihoods & Entrepreneurship"}
                />
              </div>
            </div>
            <div>
              <div className="custom-slide varPillarcard-community">
                <Varpillar1
                  bgImage={community}
                  headercontent={"Community Development"}
                />
              </div>
            </div>
            <div>
              <div className="custom-slide varPillarcard-skills">
                <Varpillar3 bgImage={culture} headercontent={"Culture"} />
              </div>
            </div>
            <div>
              <div className="custom-slide varPillarcar-capacity">
                <Varpillar4
                  bgImage={capacitybuilding}
                  headercontent={"Advisory Services"}
                />
              </div>
            </div>

            <div>
              <div className="custom-slide">
                <Varpillar5
                  bgImage={resources}
                  headercontent={"Women's Health & Resilience"}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Abeventpillars;
