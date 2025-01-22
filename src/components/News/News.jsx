import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { ReactComponent as ArrowPrev } from "../../assets/images/arrow-prev.svg";
import { ReactComponent as ArrowNext } from "../../assets/images/arrow-next.svg";
import blogImage1 from "../../assets/images/blog-1.png";
import blogImage2 from "../../assets/images/blog-2.png";
import blogImage3 from "../../assets/images/blog-3.png";
import "./News.scss";

const News = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const products = [
    {
      id: 1,
      image: blogImage1,
      title: "É AMANHÃ",
      subtitle:
        "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️",
      cta: "Saiba mais!",
    },
    {
      id: 2,
      image: blogImage2,
      title: "NOVO LOGO, MESMA ESSÊNCIA.",
      subtitle:
        "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!",
      cta: "Saiba mais!",
    },
    {
      id: 3,
      image: blogImage3,
      title: "DESCUBRA O GLAMOUR EM CADA PASSO.",
      subtitle:
        "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨",
      cta: "Saiba mais!",
    },
    {
      id: 4,
      image: blogImage1,
      title: "É AMANHÃ",
      subtitle:
        "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️",
      cta: "Saiba mais!",
    },
    {
      id: 5,
      image: blogImage2,
      title: "NOVO LOGO, MESMA ESSÊNCIA.",
      subtitle:
        "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!",
      cta: "Saiba mais!",
    },
    {
      id: 6,
      image: blogImage3,
      title: "DESCUBRA O GLAMOUR EM CADA PASSO.",
      subtitle:
        "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨",
      cta: "Saiba mais!",
    },
    {
      id: 7,
      image: blogImage1,
      title: "É AMANHÃ",
      subtitle:
        "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️",
      cta: "Saiba mais!",
    },
    {
      id: 8,
      image: blogImage2,
      title: "NOVO LOGO, MESMA ESSÊNCIA.",
      subtitle:
        "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!",
      cta: "Saiba mais!",
    },
    {
      id: 9,
      image: blogImage3,
      title: "DESCUBRA O GLAMOUR EM CADA PASSO.",
      subtitle:
        "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨",
      cta: "Saiba mais!",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 910) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalDots = Math.ceil(products.length / slidesToShow);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    beforeChange: (current, next) =>
      setActiveIndex(Math.floor(next / slidesToShow)),
    responsive: [
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index * slidesToShow);
  };

  const handlePrevClick = () => sliderRef.current.slickPrev();
  const handleNextClick = () => sliderRef.current.slickNext();

  return (
    <div className="news">
      <h2 className="news__title">Lançamentos</h2>
      <div className="news__mobile__title">
        <p>Conheça mais</p>
        <span>Fique por dentro de tudo que acontece na Bebecê.</span>
      </div>
      <Slider {...sliderSettings} ref={sliderRef}>
        {products.map((product) => (
          <div className="news__item" key={product.id}>
            <img
              className="news__item__image"
              src={product.image}
              alt={product.title}
            />
            <h3 className="news__item__text title">{product.title}</h3>
            <h4 className="news__item__text subtitle">{product.subtitle}</h4>
            <a href="/novidades" className="news__item__text cta">
              {product.cta}
            </a>
          </div>
        ))}
      </Slider>

      <div className="custom-dots-container">
        <div
          className={`custom-arrow prev ${activeIndex === 0 ? "disabled" : ""}`}
          onClick={handlePrevClick}
        >
          <ArrowPrev />
        </div>

        <div className="custom-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <div
              key={index}
              className={`custom-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        <div
          className={`custom-arrow next ${
            activeIndex === totalDots - 1 ? "disabled" : ""
          }`}
          onClick={handleNextClick}
        >
          <ArrowNext />
        </div>
      </div>
    </div>
  );
};

export default News;
