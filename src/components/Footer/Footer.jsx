import React from "react";
import s from "./Footer.module.scss";
import logo from "../../img/logo.svg";
import logoVk from "../../img/footer/vk.png";
import logoFb from "../../img/footer/facebook.png";
import logoInst from "../../img/footer/inst.png";
import logoYt from "../../img/footer/youtube.png";
import logoPin from "../../img/footer/pin.png";
import logoPhone from "../../img/footer/phone.png";

const Footer = () => {
    return (<>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.footer}>
                        <div className={s.footerContacts}>
                            <img src={logo} alt=""/>


                            <div className={s.footerFlex}>
                                <img src={logoPin} alt="Лого"/>
                                <p>ул.Ленина 2, Алушта, Крым</p>
                            </div>
                            <div className={s.footerFlex}>
                                <img src={logoPhone} alt="Лого"/>
                                <p>8 800 300 68 41</p>
                            </div>


                        </div>
                        <div className={s.footerNav}>
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
                        <div className={s.footerSocials}>
                            <p>Мы в соцсетях</p>
                            <div className={s.icons}>
                                <img src={logoInst} alt="Лого"/>
                                <img src={logoFb} alt="Лого"/>
                                <img src={logoYt} alt="Лого"/>
                                <img src={logoVk} alt="Лого"/>
                            </div>
                            <div className={s.flexWrapper}>
                                <p>Документы</p>
                                <p>Программа лояльности UPRO CLUB</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={s.footerGray}>
                    <p>
                        Riviera Sunrise Resort & SPА, Alushta © 2020 Официальный сайт
                        гостиницы <span className={s.thinLine}>&nbsp; | &nbsp;</span><a href='https://upro.group/'
                                                                                        className={s.managedBy}>Managed
                        by UPRO</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
