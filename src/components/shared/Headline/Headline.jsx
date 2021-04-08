import React from "react";
import s from "./Headline.module.scss"

const Headline = ({
                      subtitle,
                      title = "заголовок",
                      subtitle1 = null,
                      styleTitle = null
                      }) => {
    return (
        <div className={s.wrapper}>
            {subtitle && <h4 className={s.subtitle}>{subtitle}</h4>}
            {subtitle1 && <h2 className={s.subtitle1}>{subtitle1}</h2>}
            <h2 className={s.title} style={styleTitle}>{title}</h2>
        </div>)
};

export default Headline;
