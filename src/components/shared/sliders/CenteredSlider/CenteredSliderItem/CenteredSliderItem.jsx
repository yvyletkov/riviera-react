import React from "react";
import s from "./CenteredSliderItem.module.scss";


const CenteredSliderItem = (props) => {
    const {img, title, subtitle, time, date, campus, campusName} = props;
    return (
        <div className={s.card}>
            <img className={s.img} src={img} alt={title}/>
            <div className={s.content}>
                <p className={s.title}>{title}</p>
                <p className={s.subtitle}>{subtitle}</p>
                <p className={s.time}>{time}
                    <span>{date}</span></p>
                <p className={s.campus}>{campus}
                    <div>{campusName}</div>
                </p>
            </div>
        </div>
    );
};

export default CenteredSliderItem;
