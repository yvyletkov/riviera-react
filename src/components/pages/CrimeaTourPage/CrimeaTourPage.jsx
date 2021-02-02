import React from "react";
import {TheGrilledData} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../img/the-grilled/restoran-gril.png";
import img1 from "../../../img/the-grilled/restoran-gril-1.jpg";
import imgContact from "../../../img/the-grilled/restoran-gril-kontakty.jpg";
import s from "./CrimeaTourPage.module.scss";
import Headline from "../../shared/Headline/Headline";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import decisionBlockImg from "../../../img/mice/conference/14.jpg";
import ContactForm from "../../additional/ContactForm/ContactForm";
import bannerMobileImg from "../../../img/loveDay/bannerMobile.jpg";
import BookingBlock from "../../additional/BookingBlock/BookingBlock";
import AnimatedMouseIcon from "../../shared/AnimatedMouseIcon/AnimatedMouseIcon";


const CrimeaTourPage = () => {

    React.useEffect(() => document.title = `Ресторан The Grilled – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    return <>
        <section className={s.bannerWrapper}
                 style={{background: 'right url(' + bannerImg + ')', backgroundSize: 'cover'}}>
            <div className={s.container}>
                <div className={s.background} style={{background: 'center url(' + bannerMobileImg + ')', backgroundSize: 'cover'}}/>
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <div className={s.pageNameBlock}>
                            <h2 style={{zIndex: '-10', visibility: 'hidden'}}>Kids free</h2>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '11vw' : '85px'}}>Незабываемый</h1>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '12vw' : '76px'}}>Тур в Крым</h1>
                            <h3 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '11vw' : '56px'}}
                                className={s.extraline}>мы знаем, какой тур Вам нужен</h3>
                            <p><b>В стоимость включено:</b></p>
                            <ul>
                                <li>Экскурсионная программа</li>
                                <li>Питание</li>
                                <li>SPA услуги</li>
                                <li>Развлекательная программа</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <BookingBlock/>

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon black/>
            </div>

        </section>

        <section className='section first'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'«The Grilled»'} title={'паназиатское меню'}/>

                        <p>
                            Азиатская эстетика и сочетание вкусов, легли в основу новых блюд меню ресторана «The
                            Grilled» от нашего шеф-повара, которые можно попробовать.
                        </p>

                        <p>
                            В меню каждый гость сможет найти себе блюдо по вкусу: севиче и татаки под устричным и
                            азиатским соусом, поке и WOK, аппетитные супы с мясом и морепродуктами на кокосовом молоке,
                            блюда на гриле и азиатские десерты.
                        </p>

                        <p>Целый раздел представлен японской кухней и блюдам из свежей рыбы.</p>

                        <p>Для любителей европейской кухни в меню представлены классические салаты и горячие блюда.
                            Винная карта представлена знаменитыми Крымскими винзаводами: Массандра, Инкерман, Сатера ТМ
                            «Esse», а также европейские и южноамериканские вина.
                        </p>

                    </div>
                    <img className={s.wide} src={img1} alt={"Лучший праздник"}/>

                </div>
            </div>
        </section>

        <section className='section'>
            <EventMainSlider slides={TheGrilledData.theGrilledMainSlides}
                             title={'НАШИ БЕСТСЕЛЛЕРЫ'}
                             titleMobile={'НАШИ БЕСТСЕЛЛЕРЫ'}
                            onlyTitle/>
        </section>

        <section className='section'>
            <div className={s.conferencesDecisionBlock}>
                <div className={s.wrapper}>
                    <div className={s.grid}>
                        <div className={s.imageBlock}>
                            <img src={decisionBlockImg} alt="Riviera Sunrise"/>
                        </div>
                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                <Headline subtitle={'«The Grilled»'} title={'мир экзотических блюд'}/>
                                <p>
                                    Приглашаем Вас в увлекательный мир экзотических блюд, ярких красок, вкусов и запахов в ресторан «The Grilled», каждый день с 12:00 до 22:00 часов
                                    Вас ждет высококлассное облуживание, а каждый вечер выходного дня атмосферу дополнит живая музыка.
                                </p>

                                <p>
                                    <b>Бронирование столов по телефону</b>
                                </p>

                                <p>+7 (978) 905-18-52</p>

                                <p><b>Адрес</b></p>

                                <p>Алушта, ул. Ленина, 2</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default CrimeaTourPage;

