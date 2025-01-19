import React from "react";
import "./Categories.scss";
import firstCategoryImage from "../../assets/images/banner-botas.png";
import secondCategoryImage from "../../assets/images/banner-scarpins.png";
import thirdCategoryImage from "../../assets/images/banner-sapatilhas.png";
import fourthCategoryImage from "../../assets/images/banner-sandalias.png";

const categories = [
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

const Categories = () => (
  <div className="categories">
    <h2 className="categories__title">Categorias</h2>
    <div className="categories__grid">
      {categories.map((category, index) => (
        <div key={index} className="item">
          <img src={category.image} alt={category.imageAlt} />
          <span className="item__category">{category.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Categories;
