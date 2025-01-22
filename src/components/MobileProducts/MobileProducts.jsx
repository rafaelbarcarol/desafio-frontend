import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getProducts } from "../../utils";
import "./MobileProducts.scss";

const MobileProducts = ({ settings }) => {
  const [mobileProducts, setMobileProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        const repeatedProducts = Array.from(
          { length: 5 },
          () => productList
        ).flat();
        setMobileProducts(repeatedProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const sliderSettings = {
    ...settings,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className="mobile-products">
      <h3 className="mobile-products__title">Produtos</h3>
      <Slider {...sliderSettings}>
        {mobileProducts.map((product) => {
          const discountPercentage = product.price.isDiscount
            ? ((product.price.amount - product.price.isDiscount) /
                product.price.amount) *
              100
            : 0;

          return (
            <div key={product.id} className="mobile-products__item">
              <div className="image-container">
                <img src={product.image} alt={product.name} />
                {product.price.isDiscount && (
                  <span className="discount-badge">
                    -{discountPercentage.toFixed(0)}% OFF
                  </span>
                )}
              </div>
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                {product.price.isDiscount ? (
                  <>
                    <span className="price-discount">
                      R$ {product.price.amount.toFixed(2)}
                    </span>
                    <span className="price-original">
                      R$ {product.price.isDiscount.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="price-original">
                    R$ {product.price.amount.toFixed(2)}
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MobileProducts;
