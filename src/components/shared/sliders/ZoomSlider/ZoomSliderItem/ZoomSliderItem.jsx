import React from "react";
import s from "./ZoomSliderItem.module.scss";
import LazyLoadImgComponent from "../../../../additional/LazyLoadImgComponent/LazyLoadImgComponent";

const ZoomSliderItem = (props) => {
    const {img} = props;


    return (
        <div className={s.cardWrapper}>
            <LazyLoadImgComponent className={s.img} src={img} alt="Афиша"/>
        </div>);
};

export default ZoomSliderItem;
