import React from "react";
import s from "./RoomsAndPricesPageBanner.module.scss";
import bannerImg from "../../../../img/rooms-and-prices-page/banner-bg.jpg";
import bannerImgTopLayer from "../../../../img/rooms-and-prices-page/banner-top-layer.png"
import BookingBlock from "../../../additional/BookingBlock/BookingBlock";

const RoomsAndPricesPageBanner = () => {

    let [descriptionShown, setDescriptionShown] = React.useState(false);

    return (
        <section className={s.bannerWrapper}>
            <img className={s.bannerImg} src={bannerImg} alt="Номера и цены"/>
            <div className={s.container}>
                <div className={s.textBlock}>
                    <h2>Идеальный отдых в Крыму</h2>
                    <h1>Номера</h1>
                    <h1>И цены</h1>
                    <div className={s.descriptionBtn} onClick={() => setDescriptionShown(!descriptionShown)}>
                        Подробнее&nbsp;&nbsp;• • •
                    </div>
                </div>
            </div>
            <div className={s.descriptionWrapper}>
                <div className={descriptionShown ? s.description + ' ' + s.shown : s.description}>
                    <p>Один из лучших курортных отелей Riviera Sunrise Resort & SPA, г. Алушта включает в себя два корпуса проживания:</p>
                    <p>
                        – Современный корпус Модерн;<br/>
                        – Исторический корпус Классик.
                    </p>
                    <p>
                        В гостиничном комплексе 209 номеров различных категорий: от «Стандарта» до «Президентского люкса». Элегантный дизайн, современное оснащение номеров, высококлассный сервис – создают идеальные условия для Вашего комфортного отдыха.
                    </p>
                </div>
            </div>
            <img className={s.bannerImgTop} src={bannerImgTopLayer} alt="Номера и цены"/>
            <BookingBlock/>
        </section>
    )
};

export default RoomsAndPricesPageBanner;