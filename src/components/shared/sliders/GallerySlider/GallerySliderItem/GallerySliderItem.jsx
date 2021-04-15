import React from "react";
import s from "./GallerySliderItem.module.scss";
import LazyImage from "../../../../additional/LazyImg";
import LazyLoadImgComponent from "../../../../additional/LazyLoadImgComponent/LazyLoadImgComponent";


const GallerySliderItem = ({img, title, description, href}) => {
    let [showDescription, setShowDescription] = React.useState(false);

    return (
        <div onMouseEnter={() => setShowDescription(true)}
             onMouseLeave={() => setShowDescription(false)}
             className={s.photo}>
            <LazyLoadImgComponent className={s.img} src={img} alt={title}/>
            {/*<div className={showDescription ? `${s.description} ${s.shown}` : s.description}>*/}
            {/*    /!*<div className={s.title}>{title}</div>*!/*/}
            {/*    /!*<div className={s.text}>{description}</div>*!/*/}
            {/*    <a href={href} className={s.href}>Подробнее →</a>*/}
            {/*</div>*/}
        </div>
    );
};

export default GallerySliderItem;
