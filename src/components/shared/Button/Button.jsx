import React from "react";
import s from "./Button.module.scss";

const Button = ({color = "orange", text = 'Кнопка', href}) => {
    console.log(s);
    return <a className={s.button} href={href}>
        {text}
    </a>
};

export default Button;

