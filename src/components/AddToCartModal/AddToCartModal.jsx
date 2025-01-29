import React from "react";
import "./AddToCartModal.scss";
import closeAddToCartModal from "../../assets/images/close-cep-modal.svg";

const AddToCartModal = ({
  selectedProduct,
  selectedSize,
  handleSizeClick,
  isAddCartModalActive,
  closeModal,
}) => {
  return (
    <div
      className={`add-modal js-add-cart-modal ${
        isAddCartModalActive ? "active" : ""
      }`}
    >
      <div className="add-modal__image">
        <img src={selectedProduct?.image} alt={selectedProduct?.name} />
      </div>
      <div className="add-modal__content">
        <div className="add-modal__content__title">{selectedProduct?.name}</div>
        <div className="add-modal__content__size">
          <span>Tamanho: {selectedSize}</span>
          <div className="size-wrapper">
            {[34, 35, 36, 37, 38, 39, 40, 41, 42].map((size) => (
              <div
                key={size}
                className={`size ${
                  selectedProduct?.sizes?.includes(size)
                    ? selectedSize === size
                      ? "active"
                      : ""
                    : "disabled"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button className="add-modal__content__button">
          Adicionar ao carrinho
        </button>
      </div>
      <div className="add-modal__close" onClick={closeModal}>
        <img src={closeAddToCartModal} alt="fechar modal" />
      </div>
    </div>
  );
};

export default AddToCartModal;
