import React from "react";
import s from "./Footer.module.scss";
import logo from "../../img/footer/logo-footer.jpg";
import logoVk from "../../img/footer/vk.png";
import logoFb from "../../img/footer/facebook.png";
import logoInst from "../../img/footer/inst.png";
import logoYt from "../../img/footer/youtube.png";
import logoPin from "../../img/footer/pin.png";
import logoPhone from "../../img/footer/phone.png";

const Footer = () => {
  return (
    <>
      <div className={s.footer}>
        <div className={s.footerLeft}>
          <img src={logo} alt="" />
          <div className={s.footerFlex}>
            <img src={logoPin} alt="Лого" />
            <p>ул.Ленина 2, Алушта, Крым</p>
          </div>
          <div className={s.footerFlex}>
            <img src={logoPhone} alt="Лого" />
            <p>8 800 300 68 41</p>
          </div>
        </div>
        <div className={s.footerCenter}>
          <ul>
            <li>О нас</li>
            <li>Размещение</li>
            <li>Бары и рестораны</li>
            <li>Детям</li>
            <li>Курортный отдых</li>
            <li>Инфраструктура</li>
          </ul>
          <ul>
            <li>Мероприятия</li>
            <li>Галерея</li>
            <li>Спецпредложения</li>
            <li>Отзывы</li>
            <li>Контакты</li>
            <li>Партнерам</li>
          </ul>
          <ul>
            <li>Вакансии/карьера</li>
            <li>Новости/пресс-релизы</li>
            <li>FAQ</li>
            <li>Medical SPA</li>
            <li>Развлечения</li>
          </ul>
        </div>
        <div className={s.footerRight}>
          <p>Мы в соцсетях</p>
          <div className={s.icons}>
            <img src={logoInst} alt="Лого" />
            <img src={logoFb} alt="Лого" />
            <img src={logoYt} alt="Лого" />
            <img src={logoVk} alt="Лого" />
          </div>
          <p>Документы</p>
          <p>Программа лояльности UPRO CLUB</p>
        </div>
      </div>
      <div className={s.footerGray}>
        <p>
          Riviera Sunrise Resort & SPА, Alushta © 2020 Официальный сайт
          гостиницы &nbsp; | &nbsp; Managed by UPRO
        </p>
      </div>
    </>
  );
};

export default Footer;
