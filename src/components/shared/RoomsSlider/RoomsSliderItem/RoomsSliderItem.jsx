import React from "react";
import s from "./RoomsSliderItem.module.scss";
import Button from "../../Button/Button";
import {NavLink} from "react-router-dom";


const RoomsSliderItem = (props) => {
    const {img, title, link, bookingLink, isFirst} = props;

    const padding = window.innerWidth <= 768 ? "10px 10px" : "18px 40px";
    const style = {position: "absolute", bottom: "36px", left: "18px", maxWidth: "60%", padding: padding};

    return (
        <NavLink to={link}>
            <div className={isFirst ? s.card + ' ' + s.defaultCursor : s.card}>
                <img className={s.img} src={img} alt={title}/>
                <div className={s.content}>{title}{!isFirst && ' →'}</div>
                {!isFirst && <Button style={style} to={bookingLink}
                        text={'Забронировать'}/> }
            </div>
        </NavLink>
    )
};

export default RoomsSliderItem;