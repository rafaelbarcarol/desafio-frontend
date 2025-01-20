import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import pinterest from "../../assets/images/pinterest.svg";
import tiktok from "../../assets/images/tik-tok.svg";
import twitter from "../../assets/images/twitter.svg";

const socialLinks = [
  { name: "Facebook", url: "/facebook", icon: facebook },
  { name: "Instagram", url: "/instagram", icon: instagram },
  { name: "Pinterest", url: "/pinterest", icon: pinterest },
  { name: "TikTok", url: "/tiktok", icon: tiktok },
  { name: "Twitter", url: "/twitter", icon: twitter },
];

const SocialIcons = socialLinks.map(({ name, url, icon }) => (
  <a href={url} key={name}>
    <img src={icon} alt={`Ícone do ${name}`} />
  </a>
));

const Footer = () => (
  <div className="footer">
    <div className="footer__upper">
      <div className="footer__upper__cta">
        Cadastre-se e receba <strong>10% OFF</strong> na sua primeira compra!
      </div>
      <form className="footer__upper__form" action="">
        <input type="email" placeholder="Digite seu e-mail" />
        <button type="submit">Enviar</button>
      </form>
    </div>
    <div className="footer__lower">
      <a href="/">
        <img src={logo} alt="Logo Bebecê" />
      </a>
      <div className="footer__lower__social">{SocialIcons}</div>
      <div className="footer__lower__about">
        <h4 className="footer__title">Sobre a empresa</h4>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="/quem-somos" className="footer__link">
              Quem somos
            </a>
          </li>
          <li className="footer__item">
            <a href="/fale-conosco" className="footer__link">
              Fale conosco
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__lower__policies">
        <h4 className="footer__title">Políticas</h4>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="/politica-de-privacidade" className="footer__link">
              Política de Privacidade
            </a>
          </li>
          <li className="footer__item">
            <a href="/termos-de-uso" className="footer__link">
              Termos de Uso
            </a>
          </li>
          <li className="footer__item">
            <a href="/politica-de-entrega" className="footer__link">
              Política de Entrega
            </a>
          </li>
          <li className="footer__item">
            <a href="politica-de-cupom-e-descontos" className="footer__link">
              Política de Cupom e Descontos
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
