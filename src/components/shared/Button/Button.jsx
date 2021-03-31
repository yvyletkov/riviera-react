import React from "react";
import s from "./Button.module.scss";
import {NavLink} from "react-router-dom";


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
        return <a style={style} className={notActive ? s.buttonNotActive : s.button} href={anchor}>
            <span>
                {text}
            </span>
        </a>
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

