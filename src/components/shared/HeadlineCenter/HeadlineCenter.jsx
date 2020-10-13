import React from "react";
import s from "./HeadlineCenter.module.scss";

const HeadlineCenter = ({title}) => {
    return <h2 className={s.headlineCenter}>{title}</h2>
}

export default HeadlineCenter;