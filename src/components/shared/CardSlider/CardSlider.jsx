import React from "react";
import s from "./CardSlider.module.scss";

const CardSlider = (props) => {
  return (
    <div className={s.afishaCard}>
      <img className={s.afishaImg} src={props.img} alt="Афиша"/>
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
