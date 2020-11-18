import React from "react";
import s from "./CirqleTip.module.scss";

const CirqleTip = ({accordeonStatus, onClick, style}) => {
    return <span style={style} className={accordeonStatus ? s.cirqleTip + ' ' + s.active : s.cirqleTip}
                 onClick={onClick}>
        <p>!</p>
    </span>
}

export default CirqleTip;