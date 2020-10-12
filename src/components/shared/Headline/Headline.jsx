import React from "react";
import s from "./Headline.module.scss"

const Headline = ({subtitle = "Какой-то", title = "заголовок"}) => {
    return (<>
        <h4 className={s.subtitle}>{subtitle}</h4>
        <h2 className={s.title}>{title}</h2>
    </>)
};

export default Headline;