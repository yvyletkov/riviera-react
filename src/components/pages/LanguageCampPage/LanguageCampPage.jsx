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
import ContactForm from "../../additional/ContactForm/ContactForm";
import img from "../../../img/loveDay/4.jpg";
import formBluredImg from "../../../img/language-camp/Group-1.png";
import Button from "../../shared/Button/Button";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";


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
                             descr={'с 3 по 10 апреля<br/>Уроки с носителями языка и экспертами ЕГЭ'}
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
                            Даты работы языкового лагеря - <b>с 3 по 10 апреля</b> 2021 года
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
            <div className={s.formBlock}>
                <div className={s.wrapper}>
                    <img className={s.bluredImg} src={formBluredImg} alt=""/>

                    <div className={s.container}>
                        <h4 className={s.title}>
                            <span>Запишитесь на образовательно</span>
                            <span>развлекательную программу по </span>
                            <span>английскому языку</span>
                        </h4>
                        <p>Оставьте свои контакты и мы рассчитаем стоимость отдыха с обучением</p>

                        <ContactForm submitBtnText={'Рассчитать стоимость'}
                                     formName={`Форма заявки со страницы Английские каникулы`}
                                     withPhone
                                     withAge
                                     withDate
                                     requestUrl={'https://language-camp.rivierasunrise.ru/language-camp'}
                                     swalText={'очень скоро мы свяжемся с Вами и сообщим все подробности'}/>

                    </div>
                </div>
            </div>
        </section>

        <section>
            <HeadlineCenter title={"ПРОГРАММЫ ОБУЧЕНИЯ"} />
            <div className={s.programsBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.card}>
                            <h5>Для учеников младших классов</h5>
                            <ul>
                                <li>4 занятия английским языком в день с носителями языка</li>
                                <li>Занятия в первой половине дня, с 9.00 до 12.30 с небольшим перерывом</li>
                            </ul>
                            <p>20 уроков английского языка в неделю</p>
                            <div className={s.priceBlock}>
                                <p>Стоимость:</p>
                                <p className={s.price}>15 000 &#8381;/смена</p>
                            </div>
                            <Button text="Оставить заявку"
                                    onClick={() => setPopupOpen(!popupOpen)}
                                    style={{maxWidth: "270px", margin: "0 auto", width:"100%"}} />
                        </div>

                        <div className={s.card}>
                            <h5>Для учащихся старших классов</h5>
                            <ul>
                                <li>2 урока английского языка в день с носителями языка</li>
                                <li>2 урока подготовки к международным экзаменам </li>
                            </ul>
                            <div>
                                <p>Максимальное количество человек в группе - 15</p>
                                <p>20 уроков английского языка в неделю</p>
                            </div>
                            <div className={s.priceBlock}>
                                <p>Стоимость:</p>
                                <p className={s.price}>15 000 &#8381;/смена</p>
                            </div>
                            <Button text="Оставить заявку"
                                    onClick={() => setPopupOpen(!popupOpen)}
                                    style={{maxWidth: "270px", margin:"0 auto", width:"100%"}}/>
                        </div>
                        <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                          popupTitleText={'Чтобы оставить заявку, пожалуйста, оставьте свои контактные данные️'}
                                          submitBtnText='Оставить заявку'
                                          formName={`Форма обратной связи с Языкового лагеря`}
                                          swalText={'в ближайшее время с Вами свяжется координатор проекта!'}
                                          withAge
                                          withPhone
                                          requestUrl={'https://language-camp.rivierasunrise.ru/language-camp'}/>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <InfoSlider subtitle={'Экскурсионная'}
                            title={'программа'}
                            slides={LanguageCampData.excursions}
                            text={"Экскурсионная программа предполагает посещение замка Ласточкино Гнездо, Красных пещер, Ялты и зоопарка, Севастополя, Никитского Ботанического сада, канатной дороги на Ай-Петри <br/><br/>" +
                            "В стоимость включено транспортное обслуживание, услуги профессионального гида, все входные билеты и обед на одном из маршрутов (экскурсия на весь день с посещением Ливадийского дворца и подъем на гору Ай Петри).<br/><br/>" +
                            "Стоимость экскурсионной программы: 7 500 руб за 1 человека"}/>
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

