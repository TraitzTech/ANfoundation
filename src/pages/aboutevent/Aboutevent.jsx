import React from "react";
import "./aboutevent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import biliImage from "../../assets/Lakdbili.png";
import image2 from "../../assets/juju.png";
import image3 from "../../assets/schooluniversity.png";
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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
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
      <div className="slider-container">
        <Slider {...settings}>
          <div className="aboutevent-container-image">
            <img src={image3} alt="" />
            <div className="image-lebel">{/* <p>Lake Bambili</p> */}</div>
          </div>

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
          It is home to approximately 32,000 inhabitants.{" "}
          <a
            style={{ color: "orange" }}
            href="https://uniba.cm/"
            target="_blank"
            rel="noreferrer"
          >
            The University of Bamenda
          </a>{" "}
          (in Bambili) and Lake Bambili are key landmarks within the town, the
          former drawing many youth from across the country. Like many parts of
          the North West Region, Bambili has been affected by the ongoing {""}
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
