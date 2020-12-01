import React from "react";
import s from "./GalleryWeddingSliderItem.module.scss";
import LazyImage from "../../../../additional/LazyImg";

const GalleryWeddingSliderItem = ({img, fourth, first}) => {

    return (
        <div className={fourth ? s.photo + ' ' + s.nthChild4 : first ?  s.photo + ' ' + s.nthChild1 : s.photo}>

            <LazyImage className={s.img} src={img} alt={'Свадьба'}/>
        </div>
    );
};

export default GalleryWeddingSliderItem;
