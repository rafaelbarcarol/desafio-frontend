import React from "react";
import "./AddToCartModal.scss";
import closeAddToCartModal from "../../assets/images/close-cep-modal.svg";

const AddToCartModal = ({
  selectedProduct,
  selectedSize,
  handleSizeClick,
  isAddCartModalActive,
  closeModal,
  handleAddToCart,
}) => {
  return (
    <div className={`layer-wrapper ${isAddCartModalActive ? "active" : ""}`}>
      <div
        className={`add-modal js-add-cart-modal ${
          isAddCartModalActive ? "active" : ""
        }`}
      >
        <div className="add-modal__image">
          <img src={selectedProduct?.image} alt={selectedProduct?.name} />
        </div>
        <div className="add-modal__content">
          <div className="add-modal__content__title">
            {selectedProduct?.name}
          </div>
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
          <button
            className="add-modal__content__button js-save-add-product"
            onClick={handleAddToCart}
          >
            <p>Adicionar ao carrinho</p>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 3C9.5 2.20435 9.18393 1.44129 8.62132 0.87868C8.05871 0.31607 7.29565 0 6.5 0C5.70435 0 4.94129 0.31607 4.37868 0.87868C3.81607 1.44129 3.5 2.20435 3.5 3H0.5V10.5C0.5 10.8978 0.658035 11.2794 0.93934 11.5607C1.22064 11.842 1.60218 12 2 12H7.5V11H2C1.86739 11 1.74021 10.9473 1.64645 10.8536C1.55268 10.7598 1.5 10.6326 1.5 10.5V4H3.5V5H4.5V4H8.5V5H9.5V4H11.5V7H12.5V3H9.5ZM4.5 3C4.5 2.46957 4.71071 1.96086 5.08579 1.58579C5.46086 1.21071 5.96957 1 6.5 1C7.03043 1 7.53914 1.21071 7.91421 1.58579C8.28929 1.96086 8.5 2.46957 8.5 3H4.5Z"
                fill="white"
              />
              <path
                d="M11 8H10V9.5H8.5V10.5H10V12H11V10.5H12.5V9.5H11V8Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="add-modal__close" onClick={closeModal}>
          <img src={closeAddToCartModal} alt="fechar modal" />
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
