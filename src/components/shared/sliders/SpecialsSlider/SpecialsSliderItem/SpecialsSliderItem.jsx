import React from "react";
import s from "./SpecialsSliderItem.module.scss";
import {NavLink} from "react-router-dom";


const SpecialsSliderItem = (props) => {
    const {img, active, link} = props;

    let [lifted, setLifted] = React.useState(active);

    return (
        <div className={s.cardWrapper}>
            <NavLink to={link}>
                <div
                    className={lifted ? `${s.card} ${s.lifted}` : s.card}
                    onMouseEnter={() => setLifted(true)}
                    onMouseLeave={() => setLifted(false)}>
                    <img className={s.img} src={img} alt="Афиша"/>
                    <div className={s.content}>
                        <p className={s.subtitle}>на отдых</p>
                        <p className={s.title}>Скидка 10%</p>
                        <a href="">Подробнее →</a>
                    </div>
                </div>
            </NavLink>
        </div>);
};

export default SpecialsSliderItem;
