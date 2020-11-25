import React from "react";
import s from "./HeadlineCenter.module.scss";

const HeadlineCenter = ({title, style}) => {
    return <h2 style={style} className={s.headlineCenter}>{title}</h2>
}

export default HeadlineCenter;
