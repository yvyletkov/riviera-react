import React from "react";
import s from "./Header.module.scss";
import logo from "../../img/logo.svg"
import star from "../../img/header/star.png"
import speaker from "../../img/header/speaker.png"
import microphone from "../../img/header/microphone.png"
import search from "../../img/header/search.png"
import phone from "../../img/header/phone.png"
import Button from "../shared/Button/Button";
import {NavLink} from "react-router-dom";
import Menu from "./Menu/Menu";


const Link = ({title, style, icon, link = '#', extraClass = null, onClickHandler}) => {
    return <NavLink onClick={onClickHandler ? onClickHandler : null} style={style} to={link}
                    className={s.link + ' ' + extraClass}>
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

    const handleLinkClick = (e) => {
        e.preventDefault()
    }

    return (<>

            <div className={s.wrapper}>

                <Menu toggleMenu={toggleMenu} menuOpened={menuOpened}/>

                <div className={s.container}>

                    <div
                        className={scrolledFromTop > window.innerHeight / 3 ? `${s.content} ${s.minified}` : s.content}>
                        <div className={menuOpened ? s.menuIcon + ' ' + s.opened : s.menuIcon} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={s.leftBlock}>
                            <Link title={"Спецпредложения"} icon={star} link={"/offers"}/>
                            <Link onClickHandler={handleLinkClick} style={{cursor: 'not-allowed'}} title={"Анимация"}
                                  icon={speaker} link={""}/>
                            <Link onClickHandler={handleLinkClick} style={{cursor: 'not-allowed'}} title={"Новости"}
                                  icon={microphone} link={""}/>
                        </div>
                        <div className={s.logo}>
                            <NavLink to={'/'}><img src={logo} alt="Riviera Sunrise"/></NavLink>
                        </div>
                        <div className={s.rightBlock}>
                            <Link onClickHandler={handleLinkClick} style={{cursor: 'not-allowed'}} icon={search}
                                  extraClass={s.searchIcon} link={""}/>
                            <div className={s.contacts}>
                                <Link icon={phone} href={"tel:88005509824"} extraClass={s.number}
                                      title={"+7(800)550-98-24"}/>
                                <div>Крым, г. Алушта</div>
                            </div>
                            <Button className={s.button} link={'/booking'} text={'Забронировать'}/>

                        </div>

                    </div>
                </div>

                {/*<div className={s.wrapper} style={{zIndex: '1', background: "#7bc05d", position: "absolute", top: 'unset'}}>*/}
                {/*    <div className={s.container} style={{padding: '5px 20px'}}>*/}
                {/*    <p style={{fontSize: '13px', color: '#fff'}}>*/}
                {/*        Уважаемые гости, с 28 декабря по 15 января, при заселении, необходимо предоставить справку об*/}
                {/*        отрицательном тесте на COVID-19, полученную не позднее, чем за 72 часа до заезда.*/}
                {/*    </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </>
    )
};

export default Header;

