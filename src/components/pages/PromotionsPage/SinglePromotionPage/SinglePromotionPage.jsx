import React from "react";
import s from "./SinglePromotionPage.module.scss";
import barhatniiSeasonBannerImg from "../../../../img/promos/promo-barhat-seaon.jpg"
import MapSection from "../../../shared/MapSection/MapSection";
import walletImg from "../../../../img/wallet.png";

const SinglePromotionPage = ({img, title = ['Бархатный', 'сезон']}) => {

    const [showDescr, setShowDescr] = React.useState(false);


    return (<>
            <section className='section'>
                <div className={s.wrapper} style={{background: `center top url(${barhatniiSeasonBannerImg})`}}/>
            </section>


            <section className='section'>
                <div className={s.contentWrapper}>
                    <div className={s.container}>

                        <div className={s.topRow}>
                            <h1 className={s.title}>
                                <span>Бархатный</span>
                                <span>сезон</span>
                            </h1>
                            <div className={s.textContent}>
                                <p>
                                    Отель Riviera Sunrise Resort & SPA предлагает Вам продлить лето и неспеша
                                    погрузиться в мир осенней гармонии, со скидкой 20% по акции «Бархатный сезон».
                                </p>
                                <div className={s.btn} onClick={() => setShowDescr(!showDescr)}><b>Политика оплаты</b>
                                </div>
                                <div className={showDescr ? s.description + ' ' + s.active : s.description}>
                                    <img src={walletImg} alt="Кошелек"/>
                                    <ul>
                                        <li>
                                            Бронирование производится при внесении предоплаты за первые сутки
                                            проживания, в
                                            течение пяти дней;
                                        </li>
                                        <li>
                                            При аннуляции более чем за 14 дня до заезда – бесплатно;
                                        </li>
                                        <li>
                                            При аннуляции менее чем за 14 дня до заезда – взимается стоимость
                                            бронирования
                                            первых суток.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={s.flexWrapper}>

                            <div className={s.col}>
                                <h3><b>Условия акции:</b></h3>
                                <ul>
                                    <li>Выгода 20%;</li>
                                    <li>Срок проживания от 7 ночей;</li>
                                    <li>Период проживания С 01.10.2020 по 31.12.2020</li>
                                    <li>Акция распространяется на номера любой категории с любым типом питания;</li>
                                    <li>Детям до 5 лет бесплатное размещение (при условии размещения родителей на основных местах).</li>
                                    <li>Второй и последующие дети в номере размещаются по стоимости соответствующей программы питания для детей от 5 до 12 лет.</li>
                                    <li>Ранний заезд/поздний выезд (при условии наличия свободных номеров);</li>
                                    <li>Акция не суммируется с другими акциями, специальными предложениями и программами лояльности отеля.</li>
                                    <li>Доступно по программе Кэшбэк.</li>
                                </ul>
                            </div>

                            <div className={s.col}>
                                <h3><b>В стоимость входит:</b></h3>
                                <ul>
                                    <li>Парковка;</li>
                                    <li>Размещение в комфортных номерах;</li>
                                    <li>Вкусные и насыщенные завтраки;</li>
                                    <li>Посещение крытого бассейна;</li>
                                    <li>Посещение тренажерного зала;</li>
                                    <li>Посещение зоны отдыха «Теплый сон»;</li>
                                    <li>Прогулки в парке;</li>
                                    <li>Wi-Fi по всей территории отеля;</li>
                                    <li>Посещение SPA-центра: соляной пещеры, финской сауны, римской парной.</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
};

export default SinglePromotionPage;
