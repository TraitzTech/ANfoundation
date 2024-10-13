import React from "react";
import { useState } from "react";
import "./aboutevent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Start of slider images import
import stud from "../../assets/slide2.jpg";
import women from "../../assets/slide3.jpg";
import tradPeople from "../../assets/slide5.jpg";
import image2 from "../../assets/juju.png";
import school from "../../assets/slide4.jpg";
import isoschool from "../../assets/isoschool.jpg";
import biliImage from "../../assets/The_Lake_Bambili_1.jpg";
import biliMap from "../../assets/bilimap.png";
import sittingWomena from "../../assets/sitting_women.jpg";
import corners from "../../assets/corners.jpg";
import ubahttc from "../../assets/ubahttc.jpg";
import ccast from "../../assets/ccast.jpg";

// End of Slider Images import

// import Varpillarcard from "../../components/pillarcards/varpillarcard/Varpillarcard";
import Abeventpillars from "../../components/abouteventpillars/Abeventpillars";
import ExternalR from "../../components/pillarexternal/ExternalR";
const Aboutevent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 15000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => {
      // Prevent moving to the fixed slide (e.g., slide at index 2)
      if (next % 4 === 2) {
        return false; // Prevent transition
      }
    },
    afterChange: (index) => {
      setCurrentSlide(index);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
        },
      },
    ],
  };

  return (
    <div className="aboutevent-container">
      <div className="aboutevent-container-contents">
        <h2>About Bambili</h2>
        <p>
          Bambili is a vibrant university town in Cameroon's North West region.
          It is home to approximately 32,000 inhabitants.{" "}
          <a
            style={{ color: "orange" }}
            href="https://uniba.cm/"
            target="_blank"
            rel="noreferrer"
          >
            The University of Bamenda
          </a>{" "}
          (in Bambili),{" "}
          <a style={{ color: "orange" }} href="#" target="_blank">
            CCAST Bambili
          </a>
          , and{" "}
          <a
            style={{ color: "orange" }}
            href="https://upload.wikimedia.org/wikipedia/commons/7/7c/The_Lake_Bambili.jpg"
            target="_blank"
          >
            Lake Bambili
          </a>{" "}
          are key landmarks within the town, with the educational institutions
          drawing many youth from across the country. Like many parts of the
          North West Region, Bambili has been affected by the ongoing {""}
          <a
            style={{ color: "orange" }}
            href="https://en.wikipedia.org/wiki/Anglophone_Crisis"
            target="_blank"
            rel="noreferrer"
          >
            conflict
          </a>
          , leading to insecurity, forced displacement, human development
          challenges, and humanitarian concerns. Bambili's rich cultural
          heritage and diverse community offer hope and opportunities for a
          brighter future.
        </p>
      </div>

      <div className="aboutevent-slider-container">
        <div className="aboutevent-container-image static-slider">
          <a href="https://maps.app.goo.gl/qyUYBSox5ESrDyuD8" target="_blank">
            <img src={biliMap} alt="" />
          </a>
          <div className="image-lebel"></div>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            <div className="aboutevent-container-image slider-static-img">
              <img src={women} alt="" />
              <div className="image-lebel"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={stud} alt="" />
              <div className="image-lebel"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={isoschool} alt="" />
              <div className="image-lebel"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={tradPeople} alt="" />
              <div className="image-lebel"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={biliImage} alt="" />
              <div className="image-lebe"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={ccast} alt="" />
              <div className="image-lebe"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={ubahttc} alt="" />
              <div className="image-lebel"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={corners} alt="" />
              <div className="image-lebel"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={school} alt="" />
              <div className="image-lebel"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={sittingWomena} alt="" />
              <div className="image-lebel"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={image2} alt="" />
              <div className="image-lebel"></div>
            </div>

            <div className="aboutevent-container-image">
              <img src={isoschool} alt="" />
              <div className="image-lebel"></div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="aboutevent-container-Abeventpillars">
        <Abeventpillars />
      </div>

      <div className="aboutevent-container-external-resources">
        <ExternalR />
      </div>
    </div>
  );
};

export default Aboutevent;
