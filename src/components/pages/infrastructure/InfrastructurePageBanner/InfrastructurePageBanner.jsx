import React from "react";
import s from "./InfrastructurePageBanner.module.scss";

const InfrastructurePageBanner = ({bannerData, style}) => {

    const {subtitleText, headlineText, headlineFontSize, headlineMobileFontSize, descriptionText, bgImg} = bannerData;

    let [descriptionShown, setDescriptionShown] = React.useState(false);

    return (
        <section className={s.bannerWrapper}>
            <img className={s.bannerImg} style={style} src={bgImg} alt="Инфраструктура Riviera Sunrise"/>
            <div className={s.container}>
                <div className={s.textBlock}>
                    <h2>{subtitleText}</h2>
                    <h1>
                        <span style={{fontSize: !window.matchMedia('screen and (max-width: 600px)').matches ? headlineFontSize[0] : headlineMobileFontSize[0]}}>
                            {headlineText[0]}
                        </span>
                        <span style={{fontSize: !window.matchMedia('screen and (max-width: 600px)').matches ? headlineFontSize[1] : headlineMobileFontSize[1]}}>
                            {headlineText[1]}
                        </span>
                        { !!headlineText[2] &&
                        <span style={{fontSize: !window.matchMedia('screen and (max-width: 600px)').matches ? headlineFontSize[2] : headlineMobileFontSize[2]}}>
                            {headlineText[2]}
                        </span> }
                    </h1>
                    <div className={s.descriptionBtn} onClick={() => setDescriptionShown(!descriptionShown)}>
                        Подробнее&nbsp;&nbsp;• • •
                    </div>
                </div>
            </div>
            <div className={s.descriptionWrapper}>
                <div className={descriptionShown ? s.description + ' ' + s.shown : s.description}>
                    <p dangerouslySetInnerHTML={{__html: descriptionText}}/>
                </div>
            </div>
        </section>
    )
};

export default InfrastructurePageBanner;
