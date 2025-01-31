import React from "react";
import "./Cart.scss";

const Cart = ({ isVisible, cartItems = [], onRemoveFromCart, onCloseCart }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price.isDiscount || item.price.amount);
    }, 0);
  };

  return (
    <div className={`cart ${isVisible ? "show" : ""}`}>
      <h2>Carrinho</h2>
      <div>
        <button className="cart__close" onClick={onCloseCart}>
          Fechar
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="cart__items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart__item">
              <img
                src={item.image}
                alt={item.name}
                className="cart__item__image"
              />
              <div className="cart__item__info">
                <p className="cart__item__name">{item.name}</p>
                <p className="cart__item__size">Tamanho: {item.size}</p>
                <p className="cart__item__price">
                  {formatCurrency(item.price.isDiscount || item.price.amount)}
                </p>
              </div>
              <button
                className="cart__item__remove"
                onClick={() => onRemoveFromCart(index)}
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart__footer">
        {cartItems.length > 0 && (
          <p className="cart__total">
            Total: {formatCurrency(calculateTotal())}
          </p>
        )}
        <button className="cart__checkout">Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Cart;
