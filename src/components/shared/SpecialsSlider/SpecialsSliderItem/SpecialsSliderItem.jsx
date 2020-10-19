import React from "react";
import s from "./SpecialsSliderItem.module.scss";


const SpecialsSliderItem = (props) => {
    const {img, title, subtitle, time, house, active} = props;

    let [lifted, setLifted] = React.useState(active);

    return (
        <div className={s.cardWrapper}>
            <div className={s.content}>
                <p>{title}</p>
                <p>{subtitle}</p>
                <p>{time}</p>
                <p>{house}</p>
            </div>
            <div
                className={lifted ? `${s.card} ${s.lifted}` : s.card}
                onMouseEnter={() => setLifted(true)}
                onMouseLeave={() => setLifted(false)}>
                <img className={s.img} src={img} alt="Афиша"/>
                <div className={s.content}>
                    <p className={s.subtitle}>на отдых</p>
                    <p className={s.title}>Скидка 10%</p>
                    <a href="">подробнее</a>
                </div>
            </div>
        </div>);
};

export default SpecialsSliderItem;
