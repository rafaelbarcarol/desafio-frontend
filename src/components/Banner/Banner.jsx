import React from "react";
import Slider from "react-slick";
import "./Banner.scss";
import firstMainBannerRight from "../../assets/images/main_banner_1_right.png";
import firstMainBannerLeft from "../../assets/images/main_banner_1_left.png";

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
    leftImage: firstMainBannerLeft,
    rightImage: firstMainBannerRight,
    altLeft: "Simple and beauty",
    altRight: "Coleção Bebecê Outono/Inverno 2024",
  },
  {
    leftImage: firstMainBannerLeft,
    rightImage: firstMainBannerRight,
    altLeft: "Imagem do Banner 2",
    altRight: "Coleção Bebecê Primavera/Verão 2024",
  },
];

const Banner = () => (
  <div className="banner">
    <div className="banner__cta">
      <button className="cta-button">Conheça Agora</button>
    </div>

    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div key={index} className="banner__content">
          <div className="banner__content__left">
            <img
              src={banner.leftImage}
              alt={banner.altLeft}
              className="banner-image"
            />
          </div>
          <div className="banner__content__right">
            <img
              src={banner.rightImage}
              alt={banner.altRight}
              className="banner-image"
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Banner;
