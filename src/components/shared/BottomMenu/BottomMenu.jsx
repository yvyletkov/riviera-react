import React from "react";
import s from "./BottomMenu.module.scss"
import bedIcon from "../../../img/bed-icon.png";
import calendarIcon from "../../../img/calendar-icon.png";
import phoneIcon from "../../../img/phone-icon.png";
import {NavLink} from "react-router-dom";

const BottomMenu = (props) => {

    let [scrolledFromTop, setScrolledFromTop] = React.useState(0);

    const listenToScroll = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;
        setScrolledFromTop(scroll)
    };

    React.useEffect(() => {
        window.addEventListener('scroll', listenToScroll);

        return () => window.removeEventListener('scroll', listenToScroll)
    }, []);

    return <div className={scrolledFromTop > window.innerHeight / 3 ? `${s.bottomMenu} ${s.minified}` : s.bottomMenu}>
        <NavLink to="" className={s.item}>
            <img src={bedIcon} alt=""/>
            <div>Номера и цены</div>
        </NavLink>
        <NavLink to="" className={s.item}>
            <img src={calendarIcon} alt=""/>
            <div>Бронировать</div>
        </NavLink>
        <NavLink to="" className={s.item}>
            <img src={phoneIcon} alt=""/>
            <div>Позвонить</div>
        </NavLink>
    </div>
};

export default BottomMenu;