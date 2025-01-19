import React from "react";
import "./Concept.scss";
import beSimpleImage from "../../assets/images/be-simple.png";
import surprising from "../../assets/images/surprising.png";

const Concept = () => (
  <div className="concept">
    <div className="concept__wrapper">
      <div className="concept__wrapper__left">
        <img src={beSimpleImage} alt="Be Simple" />
      </div>
      <div className="concept__wrapper__right">
        <img src={surprising} alt="Surprising" />
      </div>
    </div>
  </div>
);

export default Concept;
