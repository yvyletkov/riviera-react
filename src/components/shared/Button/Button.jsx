import React from "react";
import s from "./Button.module.scss";
import {NavLink} from "react-router-dom";


const Button = ({text = 'Кнопка', to = '#', onClick}) => {
    console.log(s);
    return <NavLink className={s.button} to={to}>
        <div onClick={onClick}>
            {text}
        </div>
    </NavLink>
};

export default Button;

