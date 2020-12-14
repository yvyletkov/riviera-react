import React from "react";
import s from "./HomePageBanner.module.scss";
import bannerImg from "../../../../img/home-page/banner-img.png"
import cirqlesImg from "../../../../img/home-page/cirqles.png"
import pauseImg from "../../../../img/home-page/pause.png"
import BookingBlock from "../../../additional/BookingBlock/BookingBlock";

const HomePageBanner = () => {
    return (
        <section className={s.bannerWrapper}>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <div className={s.textBlock}>
                            <h2>Рассвет совершенного сервиса</h2>
                            <h1>Riviera
                                <span>Sunrise</span></h1>
                            <div>RESORT & SPA</div>
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <div className={s.playBtn}>
                            <img src={pauseImg} alt="пауза"/>
                        </div>
                        <img className={s.cirqles} src={cirqlesImg} alt=""/>
                        <img style={{height: '740px', marginTop: "60px"}} src={bannerImg} alt="Riviera Sunrise"/>
                    </div>
                </div>
            </div>
            <BookingBlock/>
        </section>
    )
};

export default HomePageBanner;
