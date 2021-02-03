import React from "react";
import {LanguageCampData} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../img/language-camp/main.png";
import img1 from "../../../img/language-camp/lc-1.jpg";
import s from "./LanguageCampPage.module.scss";
import Headline from "../../shared/Headline/Headline";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import decisionBlockImg from "../../../img/mice/conference/14.jpg";


const LanguageCampPage = () => {

    React.useEffect(() => document.title = `Английские каникулы – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    return <>
        <VacationsPageBanner fontSize={["70px", "57px"]}
                             fontSizeMobile={["14.7vw", "10.5vw"]}
                             subtitle={'Riviera Sunrise Resort & SPA'}
                             topLine={"АНГЛИЙСКИЕ"}
                             bottomLine={"КАНИКУЛЫ"}
                             bannerImg={bannerImg}
                             bannerMobileImg={bannerImg}
                             descr={'С 24 по 31 октября 2020 года. Уроки с носителями языка и экспертами ЕГЭ'}
                             positionBackground={'0 110px'}/>

        <section className='section first'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'КАНИКУЛЫ С ПОЛЬЗОЙ'} title={'ДЛЯ ВСЕЙ СЕМЬИ'}/>

                        <p>
                            Приглашаем вас провести весенние каникулы с пользой и удовольствием!
                            Совместно с агентством по образованию за рубежом компанией "Хартфорд Партнерс" и английской
                            языковой школой "UK Language Courses" мы организуем языковой лагерь на базе нашей гостиницы
                            для детей от 7 лет и родителей/ сопровождающих взрослых.

                        </p>

                        <p>
                            Даты работы языкового лагеря - <b>с 20 по 27 марта и с 3 по 10 апреля</b> 2021 года
                        </p>

                        <p>
                            Отель предлагает для вас проживание в номерах различных категорий - от «Стандарта» до
                            «Президентского люкса». Отличный климат, элегантный дизайн, современное оснащение номеров,
                            высококлассный сервис, анимация для детей и взрослых и многое другое – создают идеальные
                            условия для Вашего комфортного отдыха и обучения.
                        </p>

                    </div>
                    <img src={img1} alt={"КАНИКУЛЫ С ПОЛЬЗОЙ"}/>

                </div>
            </div>
        </section>

        <section className='section'>
            <EventMainSlider slides={LanguageCampData.languageCampMainSlides}
                             title={'ПРЕПОДАВАТЕЛИ КУРСА'}
                             titleMobile={'ПРЕПОДАВАТЕЛИ КУРСА'}
                             onlyTitle
                             topText={"Профессиональные преподаватели курса являются носителями языка и работают на постоянной основе в языковых школах Англии и Ирландии:"}
                             bottomText={"* cостав педагогов может быть изменен"}/>
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
                                    Приглашаем Вас в увлекательный мир экзотических блюд, ярких красок, вкусов и запахов
                                    в ресторан «The Grilled», каждый день с 12:00 до 22:00 часов
                                    Вас ждет высококлассное облуживание, а каждый вечер выходного дня атмосферу дополнит
                                    живая музыка.
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


export default LanguageCampPage;

