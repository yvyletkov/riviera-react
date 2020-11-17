import React from "react";
import s from "./WidthSpecialsSliderItem.module.scss";
import {NavLink} from "react-router-dom";


const WidthSpecialsSliderItem = (props) => {
    const {img, isActive, title, subtitle, link} = props;

    return (
        <div className={s.cardWrapper}>
            <NavLink to={link}>
                <div
                    className={isActive ? `${s.card} ${s.lifted}` : s.card}>
                    <img className={s.img} src={img} alt="Афиша"/>
                    <div className={s.content}>
                        <p className={s.title}>{title}</p>
                        <p className={s.subtitle}>{subtitle}</p>
                        <a href="">Подробнее →</a>
                    </div>
                </div>
            </NavLink>
        </div>);
};

export default WidthSpecialsSliderItem;
