import React from "react";
import s from "./WidthSpecialsSliderItem.module.scss";
import {NavLink} from "react-router-dom";
import LazyLoadImgComponent from "../../../../additional/LazyLoadImgComponent/LazyLoadImgComponent";


const WidthSpecialsSliderItem = (props) => {
    const {img, isActive, title, subtitle, link} = props;

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    return (
        <div className={s.cardWrapper}>
            <NavLink onClick={handleLinkClick} to={link ? link : '#'}>
                <div
                    className={isActive ? `${s.card} ${s.lifted}` : s.card}>
                    <LazyLoadImgComponent className={s.img} src={img} alt="Афиша"/>
                    <div className={s.content}>
                        <p className={s.title}>{title}</p>
                        <p className={s.subtitle}>{subtitle}</p>
                        { link && <a href="">Подробнее →</a> }
                    </div>
                </div>
            </NavLink>
        </div>);
};

export default WidthSpecialsSliderItem;
