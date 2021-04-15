import React from "react";
import s from "./WideSliderItem.module.scss";
import Button from "../../../Button/Button";
import {NavLink} from "react-router-dom";
import LazyLoadImgComponent from "../../../../additional/LazyLoadImgComponent/LazyLoadImgComponent";


const WideSliderItem = (props) => {
    const {img, title, link, isFirst} = props;

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    return (
        <NavLink onClick={handleLinkClick} to={link ? link : '#'}>
            <div className={isFirst ? s.card + ' ' + s.wide : s.card}>
                <LazyLoadImgComponent className={s.img} src={img} alt={title}/>
                <div className={s.content}>{title}</div>
            </div>
        </NavLink>
    )
};

export default WideSliderItem;
