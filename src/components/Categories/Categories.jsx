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
    link: "/produtos/categorias/botas",
  },
  {
    image: secondCategoryImage,
    imageAlt: "scarpins Bebecê",
    name: "Scarpins",
    link: "/produtos/categorias/scarpins",
  },
  {
    image: thirdCategoryImage,
    imageAlt: "sapatilhas Bebecê",
    name: "Sapatilhas",
    link: "/produtos/categorias/sapatilhas",
  },
  {
    image: fourthCategoryImage,
    imageAlt: "sandálias Bebecê",
    name: "Sandálias",
    link: "/produtos/categorias/sandalias",
  },
];

const Categories = () => (
  <div className="categories">
    <h2 className="categories__title">Categorias</h2>
    <div className="categories__grid">
      {categories.map((category, index) => (
        <a href={category.link} key={index} className="item">
          <div className="image-overflow">
            <img src={category.image} alt={category.imageAlt} />
          </div>
          <span className="item__category">{category.name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default Categories;
