import React from "react";
import s from "./Button.module.scss";
import {NavLink} from "react-router-dom";


const Button = ({
                    text = 'Кнопка',
                    link = "#",
                    onClick,
                    style,
                    notActive = false,
                    withIcon = false,
                    icon,
                    href,
                }) => {
    if (onClick) {
        return <div style={style} onClick={onClick} className={notActive ? s.buttonNotActive : s.button}>
        <span>
            {text}
        </span>
        </div>
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

