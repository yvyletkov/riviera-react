import React from "react";
import s from "./SpecialsSliderItem.module.scss";
import {NavLink} from "react-router-dom";

const SpecialsSliderItem = (props) => {
    const {img, active, title, subtitle, link, decolorized} = props;

    let [lifted, setLifted] = React.useState(active);

    return (
        <div className={s.cardWrapper}>
            <NavLink to={link}>
                <div
                    className={lifted ? `${s.card} ${s.lifted}` : s.card}
                    onMouseEnter={() => setLifted(true)}
                    onMouseLeave={() => setLifted(false)}>
                    <img className={decolorized ? s.img + ' ' + s.decolorized : s.img} src={img} alt="Афиша"/>
                    <div className={s.content}>
                        <p dangerouslySetInnerHTML={{__html: subtitle}} className={s.subtitle}/>
                        <p dangerouslySetInnerHTML={{__html: title}} className={s.title}/>
                        <div>Подробнее →</div>
                    </div>
                </div>
            </NavLink>
        </div>);
};

export default SpecialsSliderItem;
