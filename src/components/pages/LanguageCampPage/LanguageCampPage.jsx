import React from "react";
import {eventPagesData, LanguageCampData} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../img/language-camp/main.png";
import img1 from "../../../img/language-camp/lc-1.jpg";
import s from "./LanguageCampPage.module.scss";
import Headline from "../../shared/Headline/Headline";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import InfoSlider from "../../shared/sliders/InfoSlider/InfoSlider";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import formBluredImg from "../../../img/language-camp/Group-1.png";
import Button from "../../shared/Button/Button";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";
import LanguageCampForm from "../../additional/LanguageCampForm/LanguageCampForm";


const LanguageCampPage = () => {

    React.useEffect(() => document.title = `Английские каникулы – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    let [popupOpen, setPopupOpen] = React.useState(false);

    return <>
        <VacationsPageBanner fontSize={["70px", "57px"]}
                             fontSizeMobile={["11.7vw", "10.5vw"]}
                             subtitle={'Riviera Sunrise Resort & SPA'}
                             topLine={"АНГЛИЙСКИЕ"}
                             bottomLine={"КАНИКУЛЫ"}
                             bannerImg={bannerImg}
                             bannerMobileImg={bannerImg}
                             descr={'с 29 мая по 12 июня 2021 года'}
                             positionBackground={'0 110px'}/>

        <section className='section first'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'КАНИКУЛЫ С ПОЛЬЗОЙ'} title={'ДЛЯ ВСЕЙ СЕМЬИ'}/>

                        <p>
                            Приглашаем вас провести летние каникулы с пользой и удовольствием! Совместно с агентством по
                            образованию за рубежом компанией "Хартфорд Партнерс" мы организуем языковой лагерь на базе
                            нашей гостиницы для детей от 7 лет и родителей/ сопровождающих взрослых. Все уровни, от
                            начинающих до самых продвинутых (уровень B2+).
                        </p>

                        <p>
                            Даты работы языкового лагеря - <b>с 29 мая по 12 июня</b> 2021 года
                        </p>

                        <p>Программа предполагает 20 уроков английского языка в неделю с профессиональными
                            преподавателями, носителями языка, работающими на постоянной основе в школах Англии и
                            Ирландии, экскурсии, активный отдых и развлекательные мероприятия. Занятия будут проходить в
                            корпусе Модерн в конференц залах на втором этаже с понедельника по пятницу с 9.00 до
                            12.45. </p>

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
                             squaredCards
                             topText={"Профессиональные преподаватели курса являются носителями языка и работают на постоянной основе в языковых школах Англии и Ирландии:"}
                             bottomText={"* cостав педагогов может быть изменен"}/>
        </section>

        <section className='section'>
            <div className={s.formBlock}>
                <div className={s.wrapper}>
                    <img className={s.bluredImg} src={formBluredImg} alt=""/>

                    <div className={s.container}>
                        <h4 className={s.title}>
                            <span>Запишитесь на образовательно</span>
                            <span>развлекательную программу по </span>
                            <span>английскому языку</span>
                        </h4>
                        <p>Оставьте заявку - наш специалист свяжется с вами и ответит на все вопросы.</p>

                        <LanguageCampForm submitBtnText={'Рассчитать стоимость'}
                                          requestUrl={'https://language-camp.rivierasunrise.ru/language-camp'}
                                          swalText={'очень скоро мы свяжемся с Вами и сообщим все подробности'}/>

                    </div>
                </div>
            </div>
        </section>

        <section>
            <HeadlineCenter title={"ПРОГРАММА ОБУЧЕНИЯ"}/>
            <div className={s.programsBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.card}>
                            <ul>
                                <li>обучение (40 уроков за 2 недели) – 30000 рублей</li>
                                <li>обучение и экскурсии – 45000 рублей</li>
                                <li>активный отдых, развлекательные мероприятия – бесплатно</li>
                            </ul>
                            <p>20 уроков английского языка в неделю</p>
                            <div className={s.priceBlock}>
                                <p>Стоимость:</p>
                                <p className={s.price}>30 000 &#8381; за 2 недели</p>
                            </div>
                            <Button text="Оставить заявку"
                                    onClick={() => setPopupOpen(!popupOpen)}
                                    style={{maxWidth: "270px", margin: "0 auto", width: "100%"}}/>
                        </div>

                        <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                          popupTitleText={'Чтобы оставить заявку, пожалуйста, оставьте свои контактные данные️'}
                                          submitBtnText='Оставить заявку'
                                          formName={`Форма обратной связи с Языкового лагеря`}
                                          swalText={'в ближайшее время с Вами свяжется координатор проекта!'}
                                          withPhone
                                          requestUrl={'https://language-camp.rivierasunrise.ru/language-camp'}/>
                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <InfoSlider subtitle={'Экскурсионная'}
                        title={'программа'}
                        slides={LanguageCampData.excursions}
                        text={"Экскурсионная программа предполагает посещение замка Ласточкино Гнездо, Красных пещер, Ялты и зоопарка, Севастополя, Никитского Ботанического сада, канатной дороги на Ай-Петри <br/><br/>" +
                        "В стоимость включено транспортное обслуживание, услуги профессионального гида, все входные билеты и обед на одном из маршрутов (экскурсия на весь день с посещением Ливадийского дворца и подъем на гору Ай Петри).<br/><br/>" +
                        "7 экскурсий за 15 000 руб. за 1 человека"}/>
        </section>

        <section className='section'>
            <HeadlineCenter title={'"Весенние каникулы с пользой" в Riviera Sunrise Resort & SPА'}/>
            <div style={{display:'flex', justifyContent: 'center'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hjZiCOdMB3M"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
            </div>
        </section>

        <section>
            <InfoSlider subtitle={'Программа'}
                        title={'анимации'}
                        slides={LanguageCampData.animations}
                        text={"Детские развлекательные программы в отеле: спортивные состязания, веселые конкурсы и настольные игры для детей нескольких возрастных групп.<br/><br/>" +
                        "Команда аниматоров подготовила веселое путешествие по странам мира во время каникул"}/>
        </section>

        <section>
            <InfoSlider subtitle={'Комплексное'}
                        title={'ВКУСНОЕ ПИТАНИЕ'}
                        slides={LanguageCampData.food}
                        text={"В ресторане «The Grilled» ежедневно накрывается завтрак, обед и ужин европейской кухни в формате «Шведский стол». Так же с 13 до 22-х часов можно побаловать себя блюдами из нового паназиатского меню. Взрыв вкуса обеспечен!"}/>
        </section>

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={eventPagesData.modernDescr}
                         data={eventPagesData.modernSlides} noPaddingTop/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={eventPagesData.classicDescr} data={eventPagesData.classicSlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default LanguageCampPage;

