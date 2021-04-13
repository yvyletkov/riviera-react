import React, {useState} from "react";
import s from "./Header.module.scss";
import logo from "../../img/logo.svg"
import star from "../../img/header/star.svg"
import news from "../../img/header/newspaper.svg"
import reviews from "../../img/header/reviews.svg"
import search from "../../img/header/search.svg"
import phone from "../../img/header/phone.svg"
import Button from "../shared/Button/Button";
import {NavLink} from "react-router-dom";
import Menu from "./Menu/Menu";


const Link = ({title, style, icon, link = '#', extraClass = null, onClickHandler, href = ''}) => {
    if (href) return <a href={href} onClick={onClickHandler ? onClickHandler : null} style={style}
                        className={s.link + ' ' + extraClass}>
        <img src={icon} alt={title}/>
        {title ? <div>{title}</div> : null}
    </a>

    return <NavLink onClick={onClickHandler ? onClickHandler : null} style={style} to={link}
                    className={s.link + ' ' + extraClass}>
        <img src={icon} alt={title}/>
        {title ? <div>{title}</div> : null}
    </NavLink>
};

const Header = () => {

    let [scrolledFromTop, setScrolledFromTop] = useState(0);
    let [menuOpened, setMenuOpened] = useState(false);

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
        document.querySelector('.frisbuy-sr-widget.frisbuy-sr-mobile-fixed.frisbuy-sr-right')
            .style.zIndex = (menuOpened ? '1100' : '999')
    };

    const handleLinkClick = (e) => {
        e.preventDefault()
    }

    return (<>

            <div className={s.wrapper}>

                <Menu toggleMenu={toggleMenu}
                      menuOpened={menuOpened}/>

                <div className={s.container}>

                    <div
                        className={scrolledFromTop > window.innerHeight / 3 ? `${s.content} ${s.minified}` : s.content}>
                        <div className={menuOpened ? s.menuIcon + ' ' + s.opened : s.menuIcon} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={s.leftBlock}>
                            <Link title={"Новости"} icon={news} link={"/news"}/>
                            <Link title={"Спецпредложения"} icon={star} link={"/offers"}/>
                            {/*<Link onClickHandler={handleLinkClick} style={{cursor: 'not-allowed'}} title={"Новости"}*/}
                            {/*      icon={microphone} link={""}/>*/}
                            <Link title={"Отзывы"}
                                  icon={reviews} link={"/reviews"}/>
                        </div>
                        <div className={s.logo}>
                            <NavLink to={'/'}><img src={logo} alt="Riviera Sunrise"/></NavLink>
                        </div>
                        <div className={s.rightBlock}>
                            <Link icon={search}
                                  extraClass={s.searchIcon} href={"/search"}/>
                            <div className={s.contacts}>
                                <a href={"tel:+78005509824"}
                                         className={s.link + ' ' + s.number}>
                                    <img src={phone} alt={'Riviera Phone Number'}/>
                                    <div>+7 (800) 550-98-24</div>
                                </a>
                                <div>Крым, г. Алушта</div>
                            </div>
                            <Button className={s.button} link={'/booking/?promo-offer=mir'} text={'Забронировать'}/>

                        </div>

                    </div>
                </div>

                {/*<div className={s.wrapper}*/}
                {/*     style={{zIndex: '1', background: "#7bc05d", position: "absolute", top: 'unset'}}>*/}
                {/*    <div className={s.container} style={{padding: '5px 20px'}}>*/}
                {/*        <p style={{fontSize: '13px', color: '#fff', textAlign: 'center'}}>*/}
                {/*            Дорогие гости! Рады видеть Вас на нашем новом сайте! Данный сайт является официальным сайтом*/}
                {/*            отеля Riviera Sunrise Resort&SPA - Алушта, Крым.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className='frisbuy-stories-widget' style={menuOpened ? {zIndex: '999'} : {zIndex: '1000'}}/>
        </>
    )
};

export default Header;

