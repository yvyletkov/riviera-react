import React from "react";
import s from "./PageBanner.module.scss";
import cirqlesImg from "../../../img/home-page/cirqles.png"

const PageBanner = ({fontSize, topLine, bottomLine, bannerImg, descr}) => {

    let [descriptionShown, setDescriptionShown] = React.useState(false);

    return (
        <section className={s.bannerWrapper}>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <div className={s.pageNameBlock}>
                            <h2>Рассвет совершенного сервиса</h2>
                            <h1 style={{fontSize: fontSize[0]}}>{topLine}</h1>
                            <h1 style={{fontSize: fontSize[1]}}>{bottomLine}</h1>
                        </div>
                        <div className={s.descriptionBtn} onClick={() => setDescriptionShown(!descriptionShown)}>
                            Подробнее ↓
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <img className={s.cirqles} src={cirqlesImg} alt=""/>
                        <img src={bannerImg} alt="Riviera Sunrise"/>
                    </div>
                </div>
            </div>
            <div className={s.descriptionWrapper}>
                <div className={descriptionShown ? s.description + ' ' + s.shown : s.description}>
                    <p>
                        {descr}
                    </p>
                </div>
            </div>
            <div className={s.bookingBlock}></div>

        </section>
    )
};

export default PageBanner;