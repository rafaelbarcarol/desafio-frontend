import React from "react";
import "./Concept.scss";
import beSimpleImage from "../../assets/images/be-simple.png";
import surprising from "../../assets/images/surprising.png";
import surprisingMobile from "../../assets/images/surprising-mobile.png";

const Concept = () => (
  <div className="concept">
    <div className="concept__wrapper">
      <div className="concept__wrapper__left">
        <img src={beSimpleImage} alt="Be Simple" />
      </div>
      <div className="concept__wrapper__right">
        <img className="desktop" src={surprising} alt="Surpreenda" />
        <img className="mobile" src={surprisingMobile} alt="Surpreenda" />
      </div>
    </div>
  </div>
);

export default Concept;
