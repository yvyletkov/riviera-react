import React from "react";
import s from "./Button.module.scss";
import {NavLink} from "react-router-dom";


const Button = ({text = 'Кнопка', link = "#", onClick, style}) => {
    return <NavLink style={style} className={s.button} to={link}>
        <span onClick={onClick}>
            {text}
        </span>
    </NavLink>
};

export default Button;

