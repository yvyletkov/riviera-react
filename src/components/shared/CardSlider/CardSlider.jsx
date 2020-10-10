import React from "react";
import s from "./CardSlider.module.scss";
import afisha from "../../../img/afisha/afisha1.png"
import afisha1 from "../../../img/afisha/afisha2.png"
import afisha2 from "../../../img/afisha/afisha3.png"
import afisha3 from "../../../img/afisha/afisha4.png"
import afisha4 from "../../../img/afisha/afisha5.png"

const CardSlider = () => {
  return (
    <div className={s.afishaCard}>
      <img className={s.afishaImg} src={afisha} alt="Афиша"/>
      <div className={s.afishaText}>
        <p>Караоке бар</p>
        <p>Green Stage</p>
        <p>
          21:00 <span>8 августа</span>
        </p>
        <p>Корпус Classic</p>
      </div>
    </div>
  );
};

export default CardSlider;
