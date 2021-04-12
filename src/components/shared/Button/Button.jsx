import React from "react";
import s from "./Button.module.scss";
import {NavLink} from "react-router-dom";
import {Link as Scroll} from "react-scroll";


const Button = ({
                    text = 'Кнопка',
                    link = "#",
                    otherWindow = false,
                    onClick,
                    style,
                    notActive = false,
                    withIcon = false,
                    icon,
                    href,
                    anchor = false
                }) => {

    if (anchor) {
        return (
            <Scroll to={anchor} spy={true} smooth={true} offset={-150} duration={1000}>
                <div style={style} className={notActive ? s.buttonNotActive : s.button}>
                <span>
                    {text}
                </span>
                </div>
            </Scroll>)
    }
    if (onClick) {
        return <div style={style} onClick={onClick} className={notActive ? s.buttonNotActive : s.button}>
        <span>
            {text}
        </span>
        </div>
    }
    if (otherWindow) {
        return <a style={style} target="_blank" className={notActive ? s.buttonNotActive : s.button} href={href}>
            <span>
                {text}
            </span>
        </a>
    }
    if (withIcon) {
        return (
            <a style={style} href={href} target="_blank" className={s.buttonWithIcon}>
                <span>{text}</span>
                <img className={s.icon} src={icon} alt="whatsapp"/>
            </a>)
    } else return <NavLink style={style} className={notActive ? s.buttonNotActive : s.button} to={link}>
        <span onClick={onClick}>
            {text}
        </span>
    </NavLink>
};

export default Button;

