import React, { useState, useEffect } from "react";
import "./Header.scss";
import logoWhite from "../../assets/images/Logo-white.png";
import arrow from "../../assets/images/angulo-direito-1.svg";
import firstIcon from "../../assets/images/icon-header-1.svg";
import secondIcon from "../../assets/images/icon-header-2.svg";
import thirdIcon from "../../assets/images/icon-header-3.svg";

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="header__upper">
        <div className="header__upper__localization">
          <p>Você está em: São Paulo</p>
          <p>Alterar</p>
        </div>
      </div>
      <div className={`header__lower ${isScrollingDown ? "scrolling" : ""}`}>
        <div className="header__left">
          <img src={logoWhite} alt="logo Bebecê" />
          <ul className="header__left__list">
            <li className="header__left__products">
              <div className="open-products">Produtos</div>
              <img src={arrow} alt="flecha para baixo" />
            </li>
            <li>
              <a className="header__left__link" href="/lancamentos">
                Lançamentos
              </a>
            </li>
            <li>
              <a className="header__left__link outlet" href="/outlet">
                Outlet
              </a>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <ul className="header__right__list">
            <li>
              <img src={firstIcon} alt="ícone de lupa" />
            </li>
            <li>
              <img src={secondIcon} alt="ícone de pessoa" />
            </li>
            <li className="shopping">
              <img src={thirdIcon} alt="ícone de compras" />
              <div className="number">0</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
