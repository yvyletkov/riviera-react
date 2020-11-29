import React from "react";
import s from "./SpecialsSliderItem.module.scss";
import {NavLink} from "react-router-dom";
import cx from "classnames";

const SpecialsSliderItem = (props) => {
    const {img, active, title, subtitle, link, decolorized} = props;

    let [lifted, setLifted] = React.useState(active);

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    const cardClassNames = cx(s.card, {[s.lifted]: lifted, [s.noLink]: !link});

    return (
        <div className={s.cardWrapper}>
            <NavLink onClick={handleLinkClick} to={link ? link : "#"}>
                <div
                    className={cardClassNames}
                    onMouseEnter={() => setLifted(true)}
                    onMouseLeave={() => setLifted(false)}>
                    <img className={decolorized ? s.img + ' ' + s.decolorized : s.img} src={img} alt="Афиша"/>
                    <div className={s.content}>
                        <p dangerouslySetInnerHTML={{__html: subtitle}} className={s.subtitle}/>
                        <p dangerouslySetInnerHTML={{__html: title}} className={s.title}/>
                        { link && <div>Подробнее →</div>}
                    </div>
                </div>
            </NavLink>
        </div>);
};

export default SpecialsSliderItem;
