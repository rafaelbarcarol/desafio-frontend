import React from "react";
import Slider from "react-slick";
import "./Banner.scss";
import firstMainBanner from "../../assets/images/banner-home-desktop-1.png";
import secondMainBanner from "../../assets/images/banner-home-desktop-2.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  customPaging: (i) => (
    <div className="custom-dot">
      <div className="circle"></div>
    </div>
  ),
};

const banners = [
  {
    image: firstMainBanner,
    altDescription: "Simple and beauty",
  },
  {
    image: secondMainBanner,
    altDescription: "Imagem do Banner 2",
  },
];

const Banner = () => (
  <div className="banner">
    <button href="/conheca" className="banner__cta">
      <a href="/conheca" className="cta-button">
        Conheça Agora
      </a>
    </button>

    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div key={index} className="banner__content">
          <div className="banner__content__inner">
            <img
              src={banner.image}
              alt={banner.altDescription}
              className="banner-image"
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Banner;
