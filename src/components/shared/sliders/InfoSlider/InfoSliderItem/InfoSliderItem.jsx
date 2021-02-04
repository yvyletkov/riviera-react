import React from "react";
import s from "./InfoSliderItem.module.scss";
import cx from "classnames";

const InfoSliderItem = (props) => {
    const {img, active, title, subtitle, decolorized, oneLine, smallText} = props;

    let [lifted, setLifted] = React.useState(active);

    const cardClassNames = cx(s.card, {
        [s.lifted]: lifted,
        [s.small]: oneLine,
        [s.smallText]: smallText
    });

    return (
        <div className={s.cardWrapper}>
            <div className={cardClassNames}
                 onMouseEnter = {() => !window.matchMedia("screen and (max-width: 1200px)").matches ? setLifted((subtitle || title) && true) : null}
                 onMouseLeave={() => !window.matchMedia("screen and (max-width: 1200px)").matches ? setLifted((subtitle || title) && false) : null}>
                <img className={decolorized ? s.img + ' ' + s.decolorized : s.img} src={img} alt="Афиша"/>
                {(subtitle || title) &&
                <div className={s.content}>
                    <p dangerouslySetInnerHTML={{__html: subtitle}} className={s.subtitle}/>
                    <p dangerouslySetInnerHTML={{__html: title}} className={s.title}/>
                </div>
                }
            </div>
        </div>);
};

export default InfoSliderItem;
