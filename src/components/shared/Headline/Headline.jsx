import React from "react";
import s from "./Headline.module.scss"

const Headline = ({subtitle, title = "заголовок"}) => {
    return (<div className={s.wrapper}>
        { subtitle && <h4 className={s.subtitle}>{subtitle}</h4> }
        <h2 className={s.title}>{title}</h2>
    </div>)
};

export default Headline;