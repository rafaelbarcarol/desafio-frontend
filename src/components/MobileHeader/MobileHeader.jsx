import React, { useState, useEffect } from "react";
import "./MobileHeader.scss";
import hamburguer from "../../assets/images/hamburguer.svg";
import firstIcon from "../../assets/images/icon-header-1.svg";
import logoWhite from "../../assets/images/Logo-white.png";
import secondIcon from "../../assets/images/icon-header-2.svg";
import thirdIcon from "../../assets/images/icon-header-3.svg";
import logoBlack from "../../assets/images/logo-black.svg";
import close from "../../assets/images/close.svg";
import headerShoes from "../../assets/images/header-shoes.png";
import arrowRight from "../../assets/images/arrow-to-right.png";
import CepModal from "../CepModal/CepModal";

const MobileHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isCepModalOpen, setIsCepModalOpen] = useState(false);
  const [city, setCity] = useState("São Paulo");

  useEffect(() => {
    const storedCity = sessionStorage.getItem("city");
    if (storedCity) {
      setCity(storedCity);
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const openCepModal = () => {
    setIsCepModalOpen(true);
  };

  const closeCepModal = (newCity) => {
    setIsCepModalOpen(false);
    if (newCity) {
      setCity(newCity);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mobile-header">
      {isCepModalOpen && <CepModal closeModal={closeCepModal} />}
      <div
        className={`mobile-header__menu js-mobile-header-menu ${
          isMenuActive ? "active" : ""
        }`}
      >
        <div className="menu__top">
          <a href="/">
            <img src={logoBlack} alt="logo bebecê" />
          </a>
          <img
            className="close js-close-mobile-header-menu"
            src={close}
            alt="ícone para fechar menu"
            onClick={toggleMenu}
          />
        </div>
        <div className="menu__middle">
          <img src={headerShoes} alt="sapatos" />
          <div className="menu__middle__texts">
            <p>Celebration - 20 Anos</p>
            <a href="/celebration">Conheça</a>
          </div>
        </div>
        <div className="menu__navigation">
          <ul className="menu__navigation__list">
            <li className="menu__navigation__link">
              <a href="/liquida">Liquida</a>
            </li>
            <div
              className="menu__navigation__item js-shoes-accordion accordion"
              onClick={toggleAccordion}
            >
              <li>Sapatos</li>
              <img
                className={`js-arrow-right ${isAccordionOpen ? "rotated" : ""}`}
                src={arrowRight}
                alt=""
              />
            </div>
            {isAccordionOpen && (
              <div className="accordion-items">
                <a href="/scarpins" className="menu__navigation__item">
                  <li>Scarpins</li>
                </a>
                <a href="/mocassim" className="menu__navigation__item">
                  <li>Mocassim</li>
                </a>
                <a href="/sapatilhas" className="menu__navigation__item">
                  <li>Sapatilhas</li>
                </a>
              </div>
            )}
            <a href="/sandalias" className="menu__navigation__item">
              <li>Sandálias</li>
              <img src={arrowRight} alt="" />
            </a>
            <a href="/botas" className="menu__navigation__item">
              <li>Botas</li>
              <img src={arrowRight} alt="" />
            </a>
            <a href="/tenis" className="menu__navigation__item">
              <li>Tênis</li>
              <img src={arrowRight} alt="" />
            </a>
            <li className="menu__navigation__link--outlet">
              <a href="/outlet">Outlet</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-header__localization">
        <p className="mobile-header-city">
          Você está em: <span>{city}</span>
        </p>
        <p className="mobile-header-change" onClick={openCepModal}>
          Alterar
        </p>
      </div>
      <div className={`mobile-header__options ${scrolled ? "active" : ""}`}>
        <div className="options__left">
          <img
            className="hamburguer js-open-mobile-header-menu"
            src={hamburguer}
            alt="menu do header"
            onClick={toggleMenu}
          />
          <a href="/buscar">
            <img src={firstIcon} alt="ícone de lupa" />
          </a>
        </div>
        <div className="options__center">
          <img src={logoWhite} alt="logo bebecê" />
        </div>
        <div className="options__right">
          <a href="/perfil">
            <img src={secondIcon} alt="ícone de perfil" />
          </a>
          <a href="/carrinho">
            <img src={thirdIcon} alt="ícone de compras" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
