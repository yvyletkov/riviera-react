import React from "react";
import s from "./InfraMainSliderItem.module.scss";
import {NavLink} from "react-router-dom";
import LazyLoadImgComponent from "../../../../additional/LazyLoadImgComponent/LazyLoadImgComponent";
// import LazyImage from "../../../../additional/LazyImg";


const InfraMainSliderItem = (props) => {
    const {img, link, firstLine, secondLine, active} = props;

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    return (
        <div className={active ? s.card + ' ' + s.active : s.card}>
            <NavLink onClick={handleLinkClick} to={link ? link : '#'}>
                <LazyLoadImgComponent className={s.img} src={img} alt={firstLine[0] + ' ' + secondLine[0]}/>
                <div className={s.content}>
                    <p dangerouslySetInnerHTML={{__html: firstLine[0]}} style={{fontSize: firstLine[1]}} className={s.firstLine}/>
                    <p dangerouslySetInnerHTML={{__html: secondLine[0]}} style={{fontSize: secondLine[1]}} className={s.secondLine}/>
                </div>
            </NavLink>
        </div>
    );


};

export default InfraMainSliderItem;
