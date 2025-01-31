import React, { useState, useEffect } from "react";
import "./Cart.scss";
import close from "../../assets/images/close.svg";

const Cart = ({ isVisible, onCloseCart }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [isVisible]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = item.price.isDiscount || item.price.amount;
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const calculateSubtotal = () => {
    return cart.reduce((subtotal, item) => {
      return subtotal + item.price.amount * item.quantity;
    }, 0);
  };

  const calculateDiscount = () => {
    return cart.reduce((discount, item) => {
      const discountAmount = item.price.isDiscount
        ? (item.price.amount - item.price.isDiscount) * item.quantity
        : 0;
      return discount + discountAmount;
    }, 0);
  };

  const updateQuantity = (index, type) => {
    const newCart = [...cart];
    if (type === "increase") {
      newCart[index].quantity = (newCart[index].quantity || 1) + 1;
    } else if (type === "decrease" && newCart[index].quantity > 1) {
      newCart[index].quantity = newCart[index].quantity - 1;
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const onRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className={`cart ${isVisible ? "show" : ""}`}>
      <div className="cart__upper">
        <div className="cart__titles-wrapper">
          <p className="cart__upper__title">Carrinho</p>
          <div>
            <div className="cart__close" onClick={onCloseCart}>
              <img src={close} alt="fechar modal" />
            </div>
          </div>
        </div>
        {cart.length === 0 ? (
          <p className="empty-cart">Seu carrinho está vazio.</p>
        ) : (
          <div className="cart__items">
            {cart.map((item, index) => (
              <div key={index} className="cart__item">
                <div className="cart__item__image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart__item__image"
                  />
                </div>
                <div className="cart__item__controls">
                  <div className="quantity-controls">
                    <div
                      className={`minus ${
                        item.quantity === 1 ? "disabled" : ""
                      }`}
                      onClick={() => updateQuantity(index, "decrease")}
                    >
                      -
                    </div>

                    <p className="cart__item__quantity">{item.quantity}</p>
                    <div
                      className="plus"
                      onClick={() => updateQuantity(index, "increase")}
                    >
                      +
                    </div>
                  </div>
                  <p
                    className="cart__item__remove"
                    onClick={() => onRemoveFromCart(index)}
                  >
                    Remover
                  </p>
                </div>
                <div className="cart__item__wrapper">
                  <div className="cart__item__info">
                    <div className="cart__item__upper-wrapper">
                      <p className="cart__item__name">{item.name}</p>
                      <p className="cart__item__size">Tamanho: {item.size}</p>
                    </div>
                    <p className="cart__item__price">
                      {formatCurrency(
                        item.price.isDiscount || item.price.amount
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart__footer">
        {cart.length > 0 && (
          <div className="cart__totals">
            <div className="cart__subtotal">
              <p>Subtotal:</p>
              <p>{formatCurrency(calculateSubtotal())}</p>
            </div>
            <div className="cart__discount">
              <p>Desconto:</p>
              <p className="total-discount">
                -{formatCurrency(calculateDiscount())}
              </p>
            </div>
            <div className="cart__total">
              <p>Total:</p>
              <p>{formatCurrency(calculateTotal())}</p>
            </div>
          </div>
        )}
        {cart.length > 0 && (
          <button className="cart__checkout">
            <a href="/checkout">Finalizar pedido</a>
          </button>
        )}
        <p
          className="cart__continue-shopping js-continue-shopping"
          onClick={onCloseCart}
        >
          Continuar comprando
        </p>
      </div>
    </div>
  );
};

export default Cart;
