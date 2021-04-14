import React from "react";
import s from "./RoomsSliderItem.module.scss";
import Button from "../../../Button/Button";
import {NavLink} from "react-router-dom";
import styled from 'styled-components'

const Styled = styled.div`
  &:hover *:not(span) {
    background: #eeeeee !important;
  }
`

const RoomsSliderItem = (props) => {
    const {img, title, link, bookingLink, isFirst} = props;

    const padding = window.innerWidth <= 768 ? "10px 10px" : "18px 40px";
    const style = {position: "absolute", bottom: "12%", left: "5%", maxWidth: "39%", padding: padding};
    let style1 = {background: '#fff', color: '#000', position: "absolute", bottom: "12%", left: window.matchMedia('(max-width: 600px').matches ? "47%" : '43%', maxWidth: "39%", padding: padding};

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    return (
            <div className={isFirst ? s.card + ' ' + s.defaultCursor : s.card}>
                <img className={s.img} src={img} alt={title}/>
                <div className={s.content}>{title}</div>
                {!isFirst && <>
                    <Button style={style} link={bookingLink}
                        text={'Забронировать'}/>
                    <Styled><Button style={style1} link={link}
                            text={'Подробнее'}/></Styled></> }
            </div>
    )
};

export default RoomsSliderItem;
