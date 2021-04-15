import React from "react";
import s from "./GalleryWeddingSliderItem.module.scss";
import LazyImage from "../../../../additional/LazyImg";
import LazyLoadImgComponent from "../../../../additional/LazyLoadImgComponent/LazyLoadImgComponent";

const GalleryWeddingSliderItem = ({img, fourth, first}) => {

    return (
        <div className={fourth ? s.photo + ' ' + s.nthChild4 : first ?  s.photo + ' ' + s.nthChild1 : s.photo}>

            <LazyLoadImgComponent className={s.img} src={img} alt={'Свадьба'}/>
        </div>
    );
};

export default GalleryWeddingSliderItem;
