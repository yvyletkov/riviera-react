import React from "react";
import s from "./AnimatedMouseIcon.module.scss";

const AnimatedMouseIcon = () => {
    return (
        <span className={s.scrollBtn}>
            <a href="#">
                <span className={s.mouse}>
                    <span/>
                </span>
            </a>
        </span>
    )
};

export default AnimatedMouseIcon;