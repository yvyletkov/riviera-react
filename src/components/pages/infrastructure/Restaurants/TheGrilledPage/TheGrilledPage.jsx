import React from "react";
import {TheGrilledData} from "../../../../../data";
import MapSection from "../../../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../../../img/the-grilled/restoran-gril.png";
import img1 from "../../../../../img/the-grilled/restoran-gril-1.jpg";
import s from "./TheGrilledPage.module.scss";
import Headline from "../../../../shared/Headline/Headline";
import EventMainSlider from "../../../../shared/sliders/EventMainSlider/EventMainSlider";
import decisionBlockImg from "../../../../../img/mice/conference/14.jpg";


const TheGrilledPage = () => {

    React.useEffect(() => document.title = `Ресторан The Grilled – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    return <>
        <VacationsPageBanner fontSize={["70px", "57px"]}
                             fontSizeMobile={["14.7vw", "10.5vw"]}
                             subtitle={'Новое паназиатское меню'}
                             topLine={"Ресторан"}
                             bottomLine={"The Grilled"}
                             bannerImg={bannerImg}
                             bannerMobileImg={bannerImg}
                             descr={'Спешим представить Вам новое паназиатское меню ресторана «The Grilled», ' +
                             'в отеле Riviera Sunrise Resort & SPA, которое порадует Вас свежими и яркими вкусами, ' +
                             'необычными сочетаниями, адаптированными под европейский вкус.'}/>

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


export default TheGrilledPage;

