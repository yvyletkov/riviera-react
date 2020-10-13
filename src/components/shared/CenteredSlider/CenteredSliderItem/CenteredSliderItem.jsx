import React from "react";
import s from "./CenteredSliderItem.module.scss";


const CenteredSliderItem = (props) => {
  const { img, title, subtitle, time, house } = props;
  return (
    <div className={s.afishaCard}>
      <img className={s.afishaImg} src={img} alt="Афиша" />
      <div className={s.afishaText}>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{time}</p>
        <p>{house}</p>
      </div>
    </div>
  );
};

export default CenteredSliderItem;
