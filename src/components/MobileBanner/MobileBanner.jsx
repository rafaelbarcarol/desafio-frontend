import React from "react";
import Slider from "react-slick";
import "./MobileBanner.scss";
import firstBannerImage from "../../assets/images/banner-mobile-1.png";
import secondBannerImage from "../../assets/images/banner-mobile-2.png";
import thirdBannerImage from "../../assets/images/banner-mobile-3.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MobileBanner = () => (
  <div className="mobile-banner">
    <Slider {...settings}>
      <div>
        <img src={firstBannerImage} alt="imagem de fundo do carrossel" />
      </div>
      <div>
        <img src={secondBannerImage} alt="imagem de fundo do carrossel" />
      </div>
      <div>
        <img src={thirdBannerImage} alt="imagem de fundo do carrossel" />
      </div>
    </Slider>
    <button className="mobile-banner__button">
      <a href="/conheca">Conheça agora!</a>
    </button>
  </div>
);

export default MobileBanner;
