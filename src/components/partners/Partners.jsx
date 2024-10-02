import React from "react";
import { Link } from "react-router-dom";

import "./partners.css";
import Title from "../title/Title";
import PartnerCard from "../partnercard/PartnerCard";

const Partners = () => {
  return (
    <div className="OurPartners-container">
      <div className="ourPartners-title">
        <Title content="Our Partners" />
      </div>

      <div className="ourPartner-container-bottom">
        <div className="ourPartnerCard">
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </div>
      </div>
    </div>
  );
};

export default Partners;
