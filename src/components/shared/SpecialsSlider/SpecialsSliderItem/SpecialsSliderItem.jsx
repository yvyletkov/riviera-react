import React from "react";
import s from "./SpecialsSliderItem.module.scss";


const SpecialsSliderItem = (props) => {
    const {img, title, subtitle, time, house, active} = props;

    let [lifted, setLifted] = React.useState(active);

    return (
        <div
            onMouseEnter={() => setLifted(true)}
            onMouseLeave={() => setLifted(false)}
            className={lifted ? `${s.card} ${s.lifted}` : s.card}>
            <img className={s.img} src={img} alt="Афиша"/>
            <div className={s.content}>
                <p>{title}</p>
                <p>{subtitle}</p>
                <p>{time}</p>
                <p>{house}</p>
            </div>
        </div>
    );
};

export default SpecialsSliderItem;
