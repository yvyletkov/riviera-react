import React from "react";
import s from "./Header.module.scss";
import logo from "../../img/logo.png"
import star from "../../img/header/star.png"
import speaker from "../../img/header/speaker.png"
import microphone from "../../img/header/microphone.png"
import search from "../../img/header/search.png"
import phone from "../../img/header/phone.png"
import Button from "../shared/Button/Button";
import {NavLink} from "react-router-dom";
import arrowIcon from "../../img/arrow-accordeon.png";
import logoVk from "../../img/footer/vk.png";
import logoFb from "../../img/footer/facebook.png";
import logoInst from "../../img/footer/inst.png";
import logoYt from "../../img/footer/youtube.png";
import logoPin from "../../img/footer/pin.png";
import logoPhone from "../../img/footer/phone.png";


const Link = ({title, icon, link = '#', extraClass = null}) => {
    return <a href={link} className={s.link + ' ' + extraClass}>
        <img src={icon} alt={title}/>
        {title ? <div>{title}</div> : null}
    </a>
};

const Header = () => {

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

    let [scrolledFromTop, setScrolledFromTop] = React.useState(0);
    let [menuOpened, setMenuOpened] = React.useState(false);

    const listenToScroll = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;
        setScrolledFromTop(scroll)
    };

    React.useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll)
    }, []);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened)
    };

    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }

    return (<>

            <div className={s.wrapper}>

                <div className={!menuOpened ? s.menuWrapper : s.menuWrapper + ' ' + s.opened}>

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

                                    <NavLink to={"/rooms-and-prices"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Номера корпуса Модерн
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/rooms-and-prices"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Номера корпуса Классик
                                        </div>
                                    </NavLink>

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

                                    <NavLink to={"/"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Бассейны и пляж
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            SPA комплекс
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Рестораны
                                        </div>
                                    </NavLink>

                                    <NavLink to={"/rooms-and-prices"}>
                                        <div className={s.listItem} onClick={toggleMenu}>
                                            Номера
                                        </div>
                                    </NavLink>


                                </div>

                            </div>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/promotions"}>
                                    Спецпредложения
                                </NavLink>
                            </div>

                        </div>

                        <div className={s.col}>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/"}>
                                    Отзывы
                                </NavLink>
                            </div>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/"}>
                                    Анимация
                                </NavLink>
                            </div>

                            <div className={s.menuItem} onClick={toggleMenu}>
                                <NavLink to={"/contacts"}>
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
                                <a href="https://vk.com" target='_blank'><img src={logoInst} alt="Instagram"/></a>
                                <a href="https://fb.com" target='_blank'><img src={logoFb} alt="Facebook"/></a>
                                <a href="https://youtube.com" target='_blank'><img src={logoYt} alt="Youtube"/></a>
                                <a href="https://vk.com" target='_blank'><img src={logoVk} alt="VK"/></a>
                            </div>

                        </div>


                    </div>


                </div>

                <div className={s.container}>

                    <div
                        className={scrolledFromTop > window.innerHeight / 3 ? `${s.content} ${s.minified}` : s.content}>
                        <div className={menuOpened ? s.menuIcon + ' ' + s.opened : s.menuIcon} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={s.leftBlock}>
                            <Link title={"Спецпредложение"} icon={star} link={"#"}/>
                            <Link title={"Анимация"} icon={speaker} link={"#"}/>
                            <Link title={"Новости"} icon={microphone} link={"#"}/>
                        </div>
                        <div className={s.logo}>
                            <NavLink to={'/'}><img src={logo} alt="Riviera Sunrise"/></NavLink>
                        </div>
                        <div className={s.rightBlock}>
                            <Link icon={search} extraClass={s.searchIcon} link={"#"}/>
                            <div className={s.contacts}>
                                <Link icon={phone} href={"tel:+78005557856"} extraClass={s.number}
                                      title={"+7 (800) 555-78-56"}/>
                                <div>Крым, г. Алушта</div>
                            </div>
                            <Button className={s.button} href={'#'} text={'Забронировать'}/>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;

