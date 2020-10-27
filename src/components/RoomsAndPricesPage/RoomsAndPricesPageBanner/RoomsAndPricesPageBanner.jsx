import React from "react";
import s from "./RoomsAndPricesPageBanner.module.scss";
import bannerImg from "../../../img/rooms-and-prices-page/banner-bg.jpg";
import bannerImgTopLayer from "../../../img/rooms-and-prices-page/banner-top-layer.png"

const RoomsAndPricesPageBanner = () => {
    return (
        <section className={s.bannerWrapper}>
            <img className={s.bannerImg} src={bannerImg} alt="Номера и цены"/>
            <div className={s.container}>
                <div className={s.textBlock}>
                    <h2>Идеальный отдых в Крыму</h2>
                    <h1>Номера</h1>
                    <h1>И цены</h1>
                    {/*<div>RESORT & SPA</div>*/}
                </div>
            </div>
            <img className={s.bannerImgTop} src={bannerImgTopLayer} alt="Номера и цены"/>
            <div className={s.bookingBlock}></div>

        </section>
    )
};

export default RoomsAndPricesPageBanner;