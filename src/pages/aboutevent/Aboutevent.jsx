import React from "react";
import "./aboutevent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import biliImage from "../../assets/Lakdbili1.jpg";
import image2 from "../../assets/image two.jpg";
// import Varpillarcard from "../../components/pillarcards/varpillarcard/Varpillarcard";
import Abeventpillars from "../../components/abouteventpillars/Abeventpillars";
import ExternalR from "../../components/pillarexternal/ExternalR";
const Aboutevent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="aboutevent-container">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="aboutevent-container-image">
            <img src={image2} alt="" />
            <div className="image-lebel">{/* <p>Lake Bambili</p> */}</div>
          </div>

          <div className="aboutevent-container-image">
            <img src={biliImage} alt="" />
            <div className="image-lebe">{/* <p>Lake Bambili</p> */}</div>
          </div>
        </Slider>
      </div>

      <div className="aboutevent-container-contents">
        <h2>About Bambili</h2>
        <p>
          Bambili is a vibrant university town in Cameroon's North West region.
          It is home to approximately 32,000 inhabitants. Lake Bambili and the
          University of Bamenda are key landmarks within the town, the latter
          drawing many youth from across the country. Like many areas in the
          North West, Bambili has been affected by the ongoing {""}
          <a
            href="https://en.wikipedia.org/wiki/Anglophone_Crisis"
            target="_blank"
            rel="noreferrer"
          >
            conflict
          </a>
          , leading to insecurity, forced displacement, human development
          challenges, and humanitarian concerns. Bambili's rich cultural
          heritage and diverse community offer hope and opportunities for
          brighter future.
        </p>
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
