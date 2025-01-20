import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { getProducts } from "../../utils";
import "./Products.scss";
import { ReactComponent as ArrowPrev } from "../../assets/images/arrow-prev.svg";
import { ReactComponent as ArrowNext } from "../../assets/images/arrow-next.svg";

const Products = () => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesToShow = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        const repeatedProducts = Array.from(
          { length: 5 },
          () => productList
        ).flat();
        setProducts(repeatedProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    beforeChange: (current, next) => {
      setActiveIndex(Math.floor(next / slidesToShow));
    },
  };

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index * slidesToShow);
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const totalDots = Math.min(
    Math.ceil(products.length / slidesToShow),
    Math.floor(products.length / slidesToShow)
  );

  const isFirstPage = activeIndex === 0;
  const isLastPage = activeIndex === totalDots - 1;

  return (
    <div className="products">
      <h2 className="products__title">Lançamentos</h2>
      <Slider {...sliderSettings} ref={sliderRef}>
        {products.map((product) => (
          <div className="products__item" key={product.id}>
            <img
              className="products__item__image"
              src={product.image}
              alt={product.name}
            />
            <p className="products__item__name">{product.name}</p>
            <div
              className={`products__item__price ${
                product.price.isDiscount ? "flex" : ""
              }`}
            >
              {product.price.isDiscount ? (
                <>
                  <p className="products__item__price--discount">
                    {formatCurrency(product.price.isDiscount)}
                  </p>
                  <p className="products__item__price--original">
                    {formatCurrency(product.price.amount)}
                  </p>
                </>
              ) : (
                <p className="products__item__price--original">
                  {formatCurrency(product.price.amount)}
                </p>
              )}
            </div>
          </div>
        ))}
      </Slider>

      <div className="custom-dots-container">
        <div
          className={`custom-arrow prev ${isFirstPage ? "disabled" : ""}`}
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
          className={`custom-arrow next ${isLastPage ? "disabled" : ""}`}
          onClick={handleNextClick}
        >
          <ArrowNext />
        </div>
      </div>
    </div>
  );
};

export default Products;
