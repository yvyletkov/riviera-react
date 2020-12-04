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
import Menu from "./Menu/Menu";


const Link = ({title, icon, link = '#', extraClass = null}) => {
    return <NavLink to={link} className={s.link + ' ' + extraClass}>
        <img src={icon} alt={title}/>
        {title ? <div>{title}</div> : null}
    </NavLink>
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

    return (<>

            <div className={s.wrapper}>

                <Menu toggleMenu={toggleMenu} menuOpened={menuOpened} />

                <div className={s.container}>

                    <div
                        className={scrolledFromTop > window.innerHeight / 3 ? `${s.content} ${s.minified}` : s.content}>
                        <div className={menuOpened ? s.menuIcon + ' ' + s.opened : s.menuIcon} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={s.leftBlock}>
                            <Link title={"Спецпредложение"} icon={star} link={"/promotions"}/>
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

