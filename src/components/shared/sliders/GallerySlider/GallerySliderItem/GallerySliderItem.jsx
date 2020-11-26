import React from "react";
import s from "./GallerySliderItem.module.scss";


const GallerySliderItem = ({img, title, description, href}) => {
    let [showDescription, setShowDescription] = React.useState(false);

    return (
        <div onMouseEnter={() => setShowDescription(true)}
             onMouseLeave={() => setShowDescription(false)}
             className={s.photo}>
            <img className={s.img} src={img} alt={title}/>
            <div className={showDescription ? `${s.description} ${s.shown}` : s.description}>
                {/*<div className={s.title}>{title}</div>*/}
                {/*<div className={s.text}>{description}</div>*/}
                <a href={href} className={s.href}>Подробнее →</a>
            </div>
        </div>
    );
};

export default GallerySliderItem;
