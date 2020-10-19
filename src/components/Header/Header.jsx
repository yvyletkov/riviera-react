import React from "react";
import s from "./Header.module.scss";
import logo from "../../img/logo.png"
import star from "../../img/header/star.png"
import speaker from "../../img/header/speaker.png"
import microphone from "../../img/header/microphone.png"
import search from "../../img/header/search.png"
import phone from "../../img/header/phone.png"
import Button from "../shared/Button/Button";



const Link = ( {title, icon, href = '#', extraClass = null} ) => {
    return <a href={href} className={s.link + ' ' + extraClass}>
        <img src={icon} alt={title}/>
        {title?<div>{title}</div>:null}
    </a>
}

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.menuIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={s.leftBlock}>
                        <Link title={"Спецпредложение"} icon={star} href={"#"}/>
                        <Link title={"Анимация"} icon={speaker} href={"#"}/>
                        <Link title={"Новости"} icon={microphone} href={"#"}/>
                    </div>
                    <div className={s.logo}>
                        <img src={logo} alt="Riviera Sunrise"/>
                    </div>
                    <div className={s.rightBlock}>
                            <Link icon={search} extraClass={s.searchIcon} href={"#"}/>
                            <div className={s.contacts}>
                                <Link icon={phone} href={"tel:+78005557856"} extraClass={s.number} title={"+7 (800) 555-78-56"}/>
                                <div>Крым, г. Алушта</div>
                            </div>
                            <Button className={s.button} href={'#'} text={'Забронировать'}/>

                    </div>

                </div>
            </div>

        </div>
    )
};

export default Header;

