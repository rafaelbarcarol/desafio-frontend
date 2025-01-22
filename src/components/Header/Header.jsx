import React, { useState, useEffect } from "react";
import "./Header.scss";
import logoWhite from "../../assets/images/Logo-white.png";
import arrow from "../../assets/images/angulo-direito-1.svg";
import firstIcon from "../../assets/images/icon-header-1.svg";
import secondIcon from "../../assets/images/icon-header-2.svg";
import thirdIcon from "../../assets/images/icon-header-3.svg";
import headerBoots from "../../assets/images/header-boots.png";
import headerSandals from "../../assets/images/header-sandals.png";
import headerScarpin from "../../assets/images/header-scarpins.png";
import headerShoes from "../../assets/images/header-shoes.png";
import CepModal from "../CepModal/CepModal";

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductMenuActive, setIsProductMenuActive] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isCepModalOpen, setIsCepModalOpen] = useState(false);
  const [city, setCity] = useState("São Paulo");

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

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
    setIsProductMenuActive((prevState) => !prevState);
  };

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const getImageClass = (item) => {
    return hoveredItem === item ? "active" : "";
  };

  const openCepModal = () => {
    setIsCepModalOpen(true);
  };

  const closeCepModal = (newCity) => {
    if (newCity) {
      setCity(newCity);
    } else {
      setCity("São Paulo");
    }
    setIsCepModalOpen(false);
  };

  return (
    <div className="header">
      <div className="header__upper">
        <div className="header__upper__localization">
          <p className="localization-city">
            Você está em: <span>{city}</span>
          </p>
          <p className="change-city" onClick={openCepModal}>
            Alterar
          </p>
        </div>
      </div>
      <div
        className={`header__lower js-header-lower ${
          isScrollingDown ? "scrolling" : ""
        } ${isMenuOpen ? "opened" : ""}`}
      >
        <div className="header__left">
          <img
            className={`header__left__logo js-header-logo ${
              isMenuOpen ? "active" : ""
            }`}
            src={logoWhite}
            alt="logo Bebecê"
          />
          <ul className="header__left__list">
            <li
              className={`header__left__products js-open-products-menu ${
                isProductMenuActive ? "active" : ""
              }`}
              onClick={handleMenuToggle}
            >
              <div className="open-products">Produtos</div>
              <img src={arrow} alt="flecha para baixo" />
            </li>
            <li>
              <a
                className={`header__left__link js-header-releases ${
                  isMenuOpen ? "active" : ""
                }`}
                href="/lancamentos"
              >
                Lançamentos
              </a>
            </li>
            <li>
              <a
                className={`header__left__link js-header-outlet outlet ${
                  isScrollingDown ? "show" : ""
                } ${isMenuOpen ? "open" : ""}`}
                href="/outlet"
              >
                Outlet
              </a>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <ul className="header__right__list">
            <li
              className={`header-right-icon js-header-right-icon ${
                isMenuOpen ? "active" : ""
              }`}
            >
              <a href="/buscar">
                <img src={firstIcon} alt="ícone de lupa" />
              </a>
            </li>
            <li
              className={`header-right-icon js-header-right-icon ${
                isMenuOpen ? "active" : ""
              }`}
            >
              <a href="/perfil">
                <img src={secondIcon} alt="ícone de pessoa" />
              </a>
            </li>
            <li
              className={`header-right-icon shopping js-header-right-icon ${
                isMenuOpen ? "active" : ""
              }`}
            >
              <img src={thirdIcon} alt="ícone de compras" />
              <div
                className={`number js-cart-number ${
                  isMenuOpen ? "active" : ""
                }`}
              >
                0
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`header__menu js-header-menu ${isMenuOpen ? "active" : ""}`}
      >
        <ul className="header__menu__list">
          <li
            className="header__menu__item js-header-menu-item"
            onMouseEnter={() => handleHover("shoes")}
            onMouseLeave={() => handleHover(null)}
          >
            <a href="/sapatos">Sapatos</a>
          </li>
          <li
            className="header__menu__item js-header-menu-item"
            onMouseEnter={() => handleHover("scarpins")}
            onMouseLeave={() => handleHover(null)}
          >
            <a href="/scarpins">Scarpins</a>
          </li>
          <li
            className="header__menu__item js-header-menu-item"
            onMouseEnter={() => handleHover("sandals")}
            onMouseLeave={() => handleHover(null)}
          >
            <a href="/sandalias">Sandálias</a>
          </li>
          <li
            className="header__menu__item js-header-menu-item"
            onMouseEnter={() => handleHover("boots")}
            onMouseLeave={() => handleHover(null)}
          >
            <a href="/botas">Botas</a>
          </li>
        </ul>
        <div className="header__menu__pictures">
          <img
            className={`js-header-menu-image ${getImageClass("shoes")}`}
            src={headerShoes}
            alt="Sapatos"
          />
          <img
            className={`js-header-menu-image ${getImageClass("scarpins")}`}
            src={headerScarpin}
            alt="Scarpins"
          />
          <img
            className={`js-header-menu-image ${getImageClass("sandals")}`}
            src={headerSandals}
            alt="Sandálias"
          />
          <img
            className={`js-header-menu-image ${getImageClass("boots")}`}
            src={headerBoots}
            alt="Botas"
          />
        </div>
      </div>

      {isCepModalOpen && <CepModal closeModal={closeCepModal} />}
    </div>
  );
};

export default Header;
