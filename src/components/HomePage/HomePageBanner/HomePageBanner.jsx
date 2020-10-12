import React from "react";
import s from "./HomePageBanner.module.scss";
import bannerImg from "../../../img/home-page/banner-img.png"

const HomePageBanner = () => {
    return (
        <section className={s.bannerWrapper}>
            <div className='container'>
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
                        <img src={bannerImg} alt="Riviera Sunrise"/>
                    </div>
                </div>
                <div className={s.bookingBlock}></div>
            </div>
        </section>
    )
};

export default HomePageBanner;