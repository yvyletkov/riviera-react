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


const Link = ({title, icon, link = '#', extraClass = null}) => {
    return <a href={link} className={s.link + ' ' + extraClass}>
        <img src={icon} alt={title}/>
        {title ? <div>{title}</div> : null}
    </a>
};

const Header = () => {

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
        if(!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }

    return (<>

            <div className={s.wrapper}>

                <div className={ menuOpened ? s.menu + ' ' + s.opened : s.menu}>
                    <div onClick={toggleMenu}><NavLink isActive={checkActive} activeClassName={s.menuLinkActive} to={"/"}>Главная</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/rooms-and-prices"}>Номера и цены</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/modern/standart"}>Модерн Стандарт</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/modern/semi-lux"}>Модерн Полулюкс</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/family-vacation"}>Семейный отдых</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/vacation-with-friends"}>Отдых с друзьями</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/romantic-vacation"}>Романтический отдых</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/vacation-for-yourself"}>Отдых для себя</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/wedding"}>Свадьба</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/hen-party"}>Девичник</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/birthday"}>День рождения</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/visiting-ceremony"}>Выездная церемония</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/conference"}>Конференции</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/forum"}>Форум</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/event-tourism"}>Событийный туризм</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/trainings"}>Семинар/Тренинги</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/intensive"}>Интенсив</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/team-building"}>Тимбилдинг</NavLink></div>
                    <div onClick={toggleMenu}><NavLink activeClassName={s.menuLinkActive} to={"/exhibition"}>Выставки</NavLink></div>
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
                            <img src={logo} alt="Riviera Sunrise"/>
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

