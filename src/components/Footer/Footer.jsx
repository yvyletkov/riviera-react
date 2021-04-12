import React from "react";
import s from "./Footer.module.scss";
import logo from "../../img/logo.svg";
import logoVk from "../../img/footer/vk.png";
import logoFb from "../../img/footer/facebook.png";
import logoInst from "../../img/footer/inst.png";
import logoYt from "../../img/footer/youtube.png";
import logoPin from "../../img/footer/pin.png";
import logoPhone from "../../img/footer/phone.png";
import {NavLink} from "react-router-dom";

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
                                <a href='tel:88005509824'>8 800 550 98 24</a>
                            </div>


                        </div>
                        <div className={s.footerNav}>
                            <ul>
                                <li><NavLink to={'/nomera-i-tseny'}>Номера и цены</NavLink></li>
                                <li><NavLink to={'/family-vacation'}>Семейный отдых</NavLink></li>
                                <li><NavLink to={'/vacation-for-yourself'}>Отдых без детей</NavLink></li>
                                <li><NavLink to={'/romantic-vacation'}>Романтический отдых</NavLink></li>
                                <li><NavLink to={'/vacation-with-friends'}>Отдых с друзьями</NavLink></li>
                                <li><NavLink to={'/animation'}>Анимация</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink to={'/afisha'}>Афиша</NavLink></li>
                                <li><NavLink to={'/medical-spa'}>Medical SPA</NavLink></li>
                                <li><NavLink to={'/offers'}>Специальные предложения</NavLink></li>
                                <li><NavLink to={'/spa'}>SPA комплекс</NavLink></li>
                                <li><NavLink to={'/restaurant'}>Бары и рестораны</NavLink></li>
                                <li><NavLink to={'/infrastructure/beach-and-pools'}>Бассейны и пляж</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink to={'/transfer'}>Трансфер</NavLink></li>
                                <li><NavLink to={'/partners'}>Партнёрам</NavLink></li>
                                <li><NavLink to={'/reviews'}>Отзывы</NavLink></li>
                                <li><NavLink to={'/contact'}>Контакты</NavLink></li>
                                <li><NavLink to={'/vacancies'}>Вакансии/карьера</NavLink></li>
                                <li><NavLink style={window.matchMedia('(min-width: 768px)').matches ? {whiteSpace: 'nowrap'} : null} to={'/faq'}>FAQ (частые вопросы)</NavLink></li>
                                {/*<li>Новости/пресс-релизы</li>*/}
                                {/*<li>Развлечения</li>*/}
                            </ul>
                        </div>
                        <div className={s.footerSocials}>
                            <p>Мы в соцсетях:</p>
                            <div className={s.icons}>
                                <a target={'_blank'} href="https://www.instagram.com/rivierasunrise/"><img src={logoInst} alt="Instagram"/></a>
                                <a target={'_blank'} href="https://www.facebook.com/RivieraSunrise"><img src={logoFb} alt="Лого"/></a>
                                <a target={'_blank'} href="https://www.youtube.com/channel/UCi35hEb1HZKVvGbu5bRNXRw"><img src={logoYt} alt="Лого"/></a>
                                <a target={'_blank'} href="https://vk.com/rivierasunrise"><img src={logoVk} alt="ВК"/></a>
                            </div>
                            <div className={s.flexWrapper}>
                                <NavLink to={'/documents'}>Документы</NavLink>
                                {/*<p>Программа лояльности UPRO CLUB</p>*/}
                            </div>
                            <div id="tl-visa-support-block" style={{marginTop: '15px'}}>
                                <noindex>
                                    <a href="https://rivierasunrise.ru/visa-support" rel="nofollow">Получить визовое приглашение</a>
                                </noindex>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.footerGray}>
                    <p> Riviera Sunrise Resort & SPА, Alushta © 2020 Официальный сайт гостиницы
                        <span className={s.thinLine}>&nbsp; | &nbsp;</span>
                        <a href='https://upro.group/' className={s.managedBy}>Managed by UPRO</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
