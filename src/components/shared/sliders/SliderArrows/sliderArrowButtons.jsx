import s from "./sliderArrowButtons.module.scss";
import rightArrowImg from "../../../../img/sliderArrows/arrowThinSmallRight.png";
import leftArrowImg from "../../../../img/sliderArrows/arrowThinSmallLeft.png";
import React from "react";

export function NextArrow({style, positionStyles, onClick}) {
    return (
        <div
            className={s.nextArrow}
            style={{...style, backgroundImage: 'url(' + rightArrowImg + ')', ...positionStyles}}
            onClick={onClick}
        />
    );
}

export function PrevArrow({style, positionStyles, onClick}) {
    return (
        <div
            className={s.prevArrow}
            style={{...style, backgroundImage: 'url(' + leftArrowImg + ')', ...positionStyles}}
            onClick={onClick}
        />
    );
}