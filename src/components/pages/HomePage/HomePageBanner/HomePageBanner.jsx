import React from "react";
import s from "./HomePageBanner.module.scss";
import bannerImg from "../../../../img/home-page/banner-img.png"
import cirqlesImg from "../../../../img/home-page/cirqles.png"
import pauseImg from "../../../../img/home-page/pause.png"

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
                        <div className={s.playBtn}>
                            <img src={pauseImg} alt="пауза"/>
                        </div>
                    </div>
                    <div className={s.rightSide}>

                        <img className={s.cirqles} src={cirqlesImg} alt=""/>
                        <img style={{height: '800px'}} src={bannerImg} alt="Riviera Sunrise"/>
                    </div>
                </div>
            </div>
            {/*<div className={s.bookingBlock}></div>*/}
            <div style={{zIndex:'1000'}} id="tl-search-form" class="tl-container">
                <noindex><a href="http://www.travelline.ru/products/tl-hotel/" rel="nofollow">система онлайн-бронирования</a></noindex>
            </div>
        </section>
    )
};

export default HomePageBanner;
