import React from "react";
import s from "./Button.module.scss";

const Button = ({color = "orange", text, href}) => {
    console.log(s);
    return <a className={s.button_orange} href={href}>
        {text}
    </a>
};

export default Button;

