import React from "react";
import s from "./ZoomSliderItem.module.scss";

const ZoomSliderItem = (props) => {
    const {img} = props;


    return (
        <div className={s.cardWrapper}>
            <img className={s.img} src={img} alt="Афиша"/>
        </div>);
};

export default ZoomSliderItem;
