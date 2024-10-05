import React from "react";
import "./aboutevent.css";
import biliImage from "../../assets/Lakdbili.jpg";
// import Varpillarcard from "../../components/pillarcards/varpillarcard/Varpillarcard";
import Abeventpillars from "../../components/abouteventpillars/Abeventpillars";
import ExternalR from "../../components/pillarexternal/ExternalR";
const Aboutevent = () => {
  return (
    <div className="aboutevent-container">
      <div className="aboutevent-container-image">
        <img src={biliImage} alt="" />
        <div className="image-lebel">
          <p>Lake Bambili</p>
        </div>
      </div>
      <div className="aboutevent-container-contents">
        <h2>About Bambili</h2>
        <p>
          Bambili is a picturesque town in Cameroon's North West region. It is
          home to approximately 32,000 inhabitants. Lake Bambili and the
          University of Bamenda are key landmarks within the town, the latter
          drawing many youth from across the country. Like many areas in the
          North West, Bambili has been affected by the ongoing conflict{" "}
          <a
            href="https://en.wikipedia.org/wiki/Anglophone_Crisis"
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
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
