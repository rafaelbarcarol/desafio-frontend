import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { getProducts } from "../../utils";
import "./Products.scss";
import { ReactComponent as ArrowPrev } from "../../assets/images/arrow-prev.svg";
import { ReactComponent as ArrowNext } from "../../assets/images/arrow-next.svg";
import addToCart from "../../assets/images/add-to-cart.svg";
import AddToCartModal from "../AddToCartModal/AddToCartModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isAddCartModalActive, setIsAddCartModalActive] = useState(false);
  const slidesToShow = 5;

  const handleSizeClick = (size) => {
    if (selectedProduct?.sizes?.includes(size)) {
      setSelectedSize(size);
    }
  };

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setIsAddCartModalActive(true);
  };

  const closeModal = () => {
    setIsAddCartModalActive(false);
  };

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

  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    return Math.round(
      ((originalPrice - discountedPrice) / originalPrice) * 100
    );
  };

  return (
    <div className="products">
      <h2 className="products__title">Lançamentos</h2>
      <Slider {...sliderSettings} ref={sliderRef}>
        {products.map((product) => {
          const isDiscounted = product.price.isDiscount;
          const discountPercentage = isDiscounted
            ? calculateDiscountPercentage(
                product.price.amount,
                product.price.isDiscount
              )
            : null;

          return (
            <div className="products__item">
              <div className="products__item__image-container">
                <img
                  className="products__item__image product-image"
                  src={product.image}
                  alt={product.name}
                />
                {isDiscounted && (
                  <div className="discount-badge">
                    {discountPercentage}% OFF
                  </div>
                )}
                <div
                  className="add-to-cart js-open-add-cart-modal"
                  onClick={() => handleAddToCartClick(product)}
                >
                  <img src={addToCart} alt="adicionar ao carrinho" />
                </div>
              </div>
              <p className="products__item__name">{product.name}</p>
              <div
                className={`products__item__price ${
                  isDiscounted ? "flex" : ""
                }`}
              >
                {isDiscounted ? (
                  <>
                    <p className="products__item__price--discount">
                      {formatCurrency(product.price.amount)}
                    </p>
                    <p className="products__item__price--original">
                      {formatCurrency(product.price.isDiscount)}
                    </p>
                  </>
                ) : (
                  <p className="products__item__price--original">
                    {formatCurrency(product.price.amount)}
                  </p>
                )}
              </div>
            </div>
          );
        })}
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

      {selectedProduct && (
        <AddToCartModal
          selectedProduct={selectedProduct}
          selectedSize={selectedSize}
          handleSizeClick={handleSizeClick}
          isAddCartModalActive={isAddCartModalActive}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Products;
