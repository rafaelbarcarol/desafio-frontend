import React from "react";
import Slider from "react-slick";
import "./MobileCategories.scss";

import firstCategoryImage from "../../assets/images/banner-botas.png";
import secondCategoryImage from "../../assets/images/banner-scarpins.png";
import thirdCategoryImage from "../../assets/images/banner-sapatilhas.png";
import fourthCategoryImage from "../../assets/images/banner-sandalias.png";

const mobileCategories = [
  {
    image: firstCategoryImage,
    imageAlt: "botas Bebecê",
    name: "Botas",
  },
  {
    image: secondCategoryImage,
    imageAlt: "scarpins Bebecê",
    name: "Scarpins",
  },
  {
    image: thirdCategoryImage,
    imageAlt: "sapatilhas Bebecê",
    name: "Sapatilhas",
  },
  {
    image: fourthCategoryImage,
    imageAlt: "sandálias Bebecê",
    name: "Sandálias",
  },
];

const MobileCategories = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };

  return (
    <div className="mobile-categories">
      <h3 className="mobile-categories__title">Categorias</h3>
      <Slider {...settings}>
        {mobileCategories.map((category, index) => (
          <div key={index} className="mobile-categories__item">
            <img src={category.image} alt={category.imageAlt} />
            <p>{category.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileCategories;
