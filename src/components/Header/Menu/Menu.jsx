import React from "react";
import s from "./Menu.module.scss";
import {NavLink} from "react-router-dom";
import arrowIcon from "../../../img/arrow-accordeon.png";
import logoVk from "../../../img/footer/vk.png";
import logoFb from "../../../img/footer/facebook.png";
import logoInst from "../../../img/footer/inst.png";
import logoYt from "../../../img/footer/youtube.png";
import logoPin from "../../../img/footer/pin.png";
import logoPhone from "../../../img/footer/phone.png";


const Menu = ({menuOpened, toggleMenu}) => {

    let [resortVacationOpened, setResortVacationOpened] = React.useState(false);
    let [miceOpened, setMiceOpened] = React.useState(false);
    let [eventOpened, setEventOpened] = React.useState(false);
    let [infrastructureOpened, setInfrastructureOpened] = React.useState(false);

    const toggleResortVacation = () => {
        setMiceOpened(false);
        setResortVacationOpened(!resortVacationOpened)
    };
    const toggleMice = () => {
        setResortVacationOpened(false);
        setMiceOpened(!miceOpened)
    };
    const toggleEvent = () => {
        setInfrastructureOpened(false);
        setEventOpened(!eventOpened)
    };
    const toggleInfrastructure = () => {
        setEventOpened(false);
        setInfrastructureOpened(!infrastructureOpened)
    };

    const handleLinkClick = (e) => {
        e.preventDefault()
    }

    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }

    return <div className={!menuOpened ? s.menuWrapper : s.menuWrapper + ' ' + s.opened}>

                    <div className={s.flexContainer}>

                        <div className={s.col}>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink isActive={checkActive} to={"/"}>
                                    Главная
                                </NavLink>
                            </div>

                            <div className={!resortVacationOpened ? `${s.menuItem}` : `${s.menuItem} ${s.opened}`}>
                                <p onClick={toggleResortVacation}>
                                    Курортный отдых
                                </p>
                                <img src={arrowIcon} onClick={toggleResortVacation}
                                     className={!resortVacationOpened ? s.arrow + ' ' + s.rotated : s.arrow}
                                     alt=""/>


                                <div className={s.list}>

                                    <NavLink to={"/family-vacation"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Семейный отдых
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/vacation-for-yourself"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Отдых без детей
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/romantic-vacation"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Романтический отдых
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/vacation-with-friends"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Отдых с друзьями
                                        </div>
                                    </NavLink>

                                </div>

                            </div>

                            <div className={!miceOpened ? `${s.menuItem}` : `${s.menuItem} ${s.opened}`}>
                                <p onClick={toggleMice}>
                                    Мероприятия
                                </p>
                                <img src={arrowIcon} onClick={toggleMice}
                                     className={!miceOpened ? s.arrow + ' ' + s.rotated : s.arrow}
                                     alt="a"/>


                                <div className={s.list}>

                                    <NavLink to={"/conference"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Конференция
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/forum"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Форум
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/event-tourism"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Событийный туризм
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/trainings"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Семинар/Тренинг
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/intensive"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Интенсив
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/team-building"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Тимбилдинг
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/exhibition"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Выставки
                                        </div>
                                    </NavLink>

                                </div>

                            </div>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink isActive={checkActive} to={"/afisha"}>
                                    Афиша
                                </NavLink>
                            </div>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink isActive={checkActive} to={"/nomera-i-tseny"}>
                                    Номера и цены
                                </NavLink>
                            </div>

                        </div>

                        <div className={s.col}>

                            <div className={!eventOpened ? `${s.menuItem}` : `${s.menuItem} ${s.opened}`}>
                                <p onClick={toggleEvent}>
                                    События
                                </p>
                                <img src={arrowIcon} onClick={toggleEvent}
                                     className={!eventOpened ? s.arrow + ' ' + s.rotated : s.arrow}
                                     alt=""/>


                                <div className={s.list}>

                                    <NavLink to={"/wedding"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Свадьба
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/visiting-ceremony"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Выездная церемония
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/birthday"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            День рождения
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/bachelor-party"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Мальчишник
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/hen-party"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Девичник
                                        </div>
                                    </NavLink>

                                </div>

                            </div>

                            <div className={!infrastructureOpened ? `${s.menuItem}` : `${s.menuItem} ${s.opened}`}>
                                <p onClick={toggleInfrastructure}>
                                    Инфраструктура
                                </p>
                                <img src={arrowIcon} onClick={toggleInfrastructure}
                                     className={!infrastructureOpened ? s.arrow + ' ' + s.rotated : s.arrow}
                                     alt=""/>


                                <div className={s.list}>

                                    <NavLink to={"/infrastructure/beach-and-pools"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Бассейны и пляж
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/spa"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            SPA комплекс
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/restaurant"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Рестораны
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/nomera-i-tseny"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Номера
                                        </div>
                                    </NavLink>


                                </div>

                            </div>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/offers"}>
                                    Спецпредложения
                                </NavLink>
                            </div>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/medical-spa"}>
                                    Medical SPA
                                </NavLink>
                            </div>

                            <div className={s.menuItem + ' ' + s.march8} onClick={toggleMenu}>
                                <NavLink to={"/8-march"}>
                                    8 марта
                                </NavLink>
                            </div>

                        </div>

                        <div className={s.col}>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/faq"}>
                                    Частые вопросы
                                </NavLink>
                            </div>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/reviews"}>
                                    Отзывы
                                </NavLink>
                            </div>

                            {/*<div className={s.menuItem} onClick={toggleMenu}>*/}
                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/animation"}>
                                    Анимация
                                </NavLink>
                            </div>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/contact"}>
                                    Контакты
                                </NavLink>
                            </div>

                        </div>

                        <div className={`${s.col}`}>
                            <div className={s.callUs}>Свяжитесь с нами</div>
                            <div className={s.location}>
                                <img src={logoPin} alt="Локация"/>
                                ул. Ленина 2, Алушта, Крым
                            </div>
                            <div className={s.phone}>
                                <img src={logoPhone} alt="Телефон"/>
                                <a href='tel:8 800 300 68 41'>8 800 300 68 41</a>
                            </div>
                            <div className={s.icons}>
                                <a href="https://www.instagram.com/rivierasunrise/" target='_blank'><img src={logoInst} alt="Instagram"/></a>
                                <a href="https://www.facebook.com/RivieraSunrise" target='_blank'><img src={logoFb} alt="Facebook"/></a>
                                <a href="https://www.youtube.com/channel/UCi35hEb1HZKVvGbu5bRNXRw" target='_blank'><img src={logoYt} alt="Youtube"/></a>
                                <a href="https://vk.com/rivierasunrise" target='_blank'><img src={logoVk} alt="VK"/></a>
                            </div>

                        </div>


                    </div>


                </div>

};

export default Menu;

