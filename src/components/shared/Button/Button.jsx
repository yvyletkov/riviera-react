import React from "react";
import s from "./Button.module.scss";
import {NavLink} from "react-router-dom";


const Button = ({text = 'Кнопка', to = '#', onClick, style}) => {
    return <NavLink style={style} className={s.button} to={to}>
        <div onClick={onClick}>
            {text}
        </div>
    </NavLink>
};

export default Button;

