import React from "react";
import s from "./Button.module.scss";
import {NavLink} from "react-router-dom";


const Button = ({text = 'Кнопка', link = "#", onClick, style}) => {
    if (onClick) {
        return <div style={style} onClick={onClick} className={s.button}>
        <span>
            {text}
        </span>
        </div>
    } else return <NavLink style={style} className={s.button} to={link}>
        <span onClick={onClick}>
            {text}
        </span>
    </NavLink>
};

export default Button;

