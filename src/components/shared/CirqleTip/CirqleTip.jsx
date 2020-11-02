import React from "react";
import s from "./CirqleTip.module.scss";

const CirqleTip = ({accordeonStatus, onClick}) => {
    return <span className={accordeonStatus ? s.cirqleTip + ' ' + s.active : s.cirqleTip}
                 onClick={onClick}>!</span>
}

export default CirqleTip;