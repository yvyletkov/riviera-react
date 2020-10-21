import React from "react";
import s from "./HomePageBanner.module.scss";
import bannerImg from "../../../img/home-page/banner-img.png"
import bannerMobileImg from "../../../img/home-page/banner-mobile-img.jpg"
import cirqlesImg from "../../../img/home-page/cirqles.png"
import pauseImg from "../../../img/home-page/pause.png"

const HomePageBanner = () => {
    return (
        <section className={s.bannerWrapper}>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <div className={s.textBlock}>
                            <h2>Рассвет совершенного сервиса</h2>
                            <h1>Riviera</h1>
                            <h1>Sunrise</h1>
                            <div>RESORT & SPA</div>
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <div className={s.playBtn}>
                            <img src={pauseImg} alt="пауза"/>
                        </div>
                        <img className={s.cirqles} src={cirqlesImg} alt=""/>
                        <img src={bannerImg} alt="Riviera Sunrise"/>
                    </div>
                </div>
            </div>
            <div className={s.bookingBlock}></div>

        </section>
    )
};

export default HomePageBanner;