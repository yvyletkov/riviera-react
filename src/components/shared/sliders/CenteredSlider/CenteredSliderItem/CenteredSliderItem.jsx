import React from "react";
import s from "./CenteredSliderItem.module.scss";


const CenteredSliderItem = (props) => {
    const {img, title, subtitle, time, date, campus, campusName, type = "home-page", subsubtitle, fontsizeSubsubtitle, active} = props;
    switch (type) {
        case "home-page":
            return (
                <div className={active ? s.card + ' ' + s.active : s.card}>
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
        case 2 :
            return (
                <div className={active ? s.card + ' ' + s.active : s.card}>
                    <img className={s.img} src={img} alt={title}/>
                    <div className={s.content}>
                        <p className={s.title}>{title}</p>
                        <p className={s.subtitle1}>{subtitle}</p>
                        <p className={s.subsubtitle} style={{fontSize:fontsizeSubsubtitle}}>{subsubtitle}</p>
                    </div>
                </div>
            );
        default :
            return null
    }

};

export default CenteredSliderItem;
