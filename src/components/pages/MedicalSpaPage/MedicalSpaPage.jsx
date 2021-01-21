import React from "react";
import s from "./MedicalSpaPage.module.scss";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import {medicalSpaPage, roomsAndPricesPageData} from "../../../data";
import Button from "../../shared/Button/Button";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";
import AnimatedMouseIcon from "../../shared/AnimatedMouseIcon/AnimatedMouseIcon";
import AdvantagesBlock from "../../shared/AdvantagesBlock/AdvantagesBlock";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import medicalSpaPopupImgVosstan from "../../../img/medical-spa/popup/восстановление.jpg";
import medicalSpaPopupImgDihanieZdorovya from "../../../img/medical-spa/popup/дыхание-здоровья.jpg";
import medicalSpaPopupImgDetox from "../../../img/medical-spa/popup/детокс.jpg";
import medicalSpaPopupImgSpina from "../../../img/medical-spa/popup/здоровая-спина.jpg";
import medicalSpaPopupImgDvizhenie from "../../../img/medical-spa/popup/свобода-движения.jpg";
import medicalSpaPopupImgSerdce from "../../../img/medical-spa/popup/сильное-сердце.jpg";
import medicalSpaPopupImgStress from "../../../img/medical-spa/popup/управление-стрессом.jpg";
import topBlockImg from "../../../img/medical-spa/topBlockImg.jpg";
import closeBtn from "../../../img/close.svg";
import Headline from "../../shared/Headline/Headline";
import GallerySlider from "../../shared/sliders/GallerySlider/GallerySlider";
import MapSection from "../../shared/MapSection/MapSection";
import dihanieZdorovyaPriceImg from "../../../img/medical-spa/dihanieZdorovyaPriceImg.png";



const MedicalSpaPage = ({bannerImg, bannerIcons, advantagesIcons}) => {

    let [popupContactFormOpen, setPopupContactFormOpen] = React.useState(false);
    let [showPopup, setShowPopup] = React.useState(false);
    let [popupIndex, setPopupIndex] = React.useState(0);
    let [chosenProgram, setChosenProgram] = React.useState('');
    let [formPopupOpen, setFormPopupOpen] = React.useState(false);

    const activatePopup = (index) => {
        setPopupIndex(index);
        setShowPopup(true);
    }

    React.useEffect(() => document.title = `Medical SPA - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    return <>

        <div className={s.bannerWrapper} style={{
            background: window.matchMedia("(max-width: 620px)").matches ? `center no-repeat url("${bannerImg}")` : `center no-repeat url("${bannerImg}")`,
            backgroundSize: "cover"
        }}>
            <div className={s.container}>
                <div className={s.headings}>
                    <h1>
                        <span>Medical</span>
                        <span>SPA</span>
                    </h1>
                    <h2>
                        <span>Совершенный</span>
                        <span>уровень отдыха</span>
                    </h2>
                </div>

                <div className={s.icons}>
                    {bannerIcons.map((item, index) => <div key={index} className={s.icon}>
                        <img style={index === 1 ? {height: '29px', position: 'relative', top: '3px'} : {}} src={item}
                             alt=""/>
                    </div>)}
                </div>

                <Button style={{width: "fit-content"}}
                        onClick={() => setPopupContactFormOpen(true)} text={"Узнать подробности"}/>
                <PopupContactForm popupOpen={popupContactFormOpen} setPopupOpen={setPopupContactFormOpen}
                                  popupTitleText={'Чтобы узнать больше, пожалуйста, оставьте свои контактные данные, и мы Вам перезвоним'}
                                  submitBtnText='Узнать подробности'
                                  formName={`Форма с верхнего баннера страницы Медикал СПА (кнопка "Подробнее")`}
                                  swalText={'очень скоро наши менеджеры с Вами свяжутся'}
                                  withPhone/>

            </div>

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon/>
            </div>
        </div>

        <section className='section first'>
            <AdvantagesBlock slidesToShow={5} icons={advantagesIcons} title={'Всё лучшее в одном месте'}/>
        </section>

        <section className='section'>
            <EventMainSlider withButton activatePopup={activatePopup} title={'Программы оздоровления'} manySlides={true}
                             titleMobile={'Программы оздоровления'} initialSlideIndex={1}
                             slides={medicalSpaPage.mainSlides}
                             // withTip
            />
        </section>

        <section className='section'>
            <div className={s.topBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'Философия'} title={'качества'}/>

                        <p>
                            Riviera Sunrise Resort & SPА объединяет все, что отдыхающие ищут в отелях - комфортные
                            номера, безупречный сервис и десятки возможностей полезного времяпрепровождения. Мы
                            практикуем холистический подход к здоровью и отдыху: создали полноценную систему
                            восстановления физических и душевных сил. Предлагаем только немедикаментозные методики
                            лечения, потому что знаем - организм человека обладает колоссальными ресурсами
                            самовосстановления. Нужно только пробудить их, и мы знаем как.

                            <Button text="Скачать меню SPA"
                                    style={{marginTop: '20px'}}
                                    onClick={() => window.open('/documents/spa2.pdf')}/>
                        </p>

                    </div>

                    <img src={topBlockImg} alt={"Medical SPA – Riviera Sunrise"}/>

                </div>
            </div>
        </section>

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={roomsAndPricesPageData.modernDescr}
                         data={roomsAndPricesPageData.modernSlides} noPaddingTop/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={roomsAndPricesPageData.classicDescr} data={roomsAndPricesPageData.classicSlides}/>
        </section>


        <section className='section'>
            <GridSlider slides={roomsAndPricesPageData.gridSlides}/>
        </section>

        <section className='section'>
            <CenteredSlider title={'Сегодня в программе'} slides={roomsAndPricesPageData.centeredSlides}/>
        </section>

        <section className='section'>
            <GallerySlider blockName={'Фотогалерея'} slides={medicalSpaPage.gallerySlides}/>
        </section>

        <section className='section'>
            <MapSection/>
        </section>

        {/* Попап бронирования программы */}
        <PopupContactForm popupOpen={formPopupOpen} setPopupOpen={setFormPopupOpen}
                          popupTitleText={'Чтобы забронировать программу, пожалуйста, оставьте свои контактные данные'}
                          submitBtnText='Забронировать'
                          formName={`Форма бронирования программы Medical SPA (${chosenProgram})`}
                          swalText={'мы свяжемся с Вами в ближайшее время'}
                          withPhone/>


        {/* POPUP Дышать здорово*/}
        <div onClick={() => setShowPopup(false)}
             className={showPopup && popupIndex === 1 ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}>
                    <img src={medicalSpaPage.bannerIcons[2]} alt=""/>
                    <h4>Дышать – здорово</h4>
                    <p>Общий комплекс оздоровления</p>
                    <h5>Продолжительность</h5>
                    <p>Оптимально – 10-24 дней</p>

                    <div>
                        <h5>Для кого?</h5>
                        <p>Программа рекомендуется широкому кругу людей с усталостью, раздражением, стрессом, низким
                            уровнем иммунитета, концентрации и работоспособности.</p>
                        <h5>Результат</h5>
                        <p>
                            Восстановление показателей здоровья у людей, чьё физическое и психоэмоциональное состояние
                            нарушено наличием патологии дыхательной системы, вследствие различных причин: осложнениями
                            после перенесенных острых заболеваний, в том числе и новой коронавирусной инфекцией,
                            хроническими заболеваниями верхних дыхательных путей, бронхиального дерева и лёгких.
                        </p>

                        <Button text="Забронировать"
                                onClick={ () => {
                                    setFormPopupOpen(true);
                                    setChosenProgram('Дыхание здоровья');
                                }}
                                style={{position: 'relative', zIndex: 5, margin: '30px auto 20px', maxWidth:'300px'}}/>

                    </div>

                </div>
                <div className={s.col}>
                    <img src={medicalSpaPopupImgDihanieZdorovya} alt="Дышать – здорово"/>
                </div>
                <div className={s.col}>
                    <img style={{position: 'absolute', left: '-105px', top: '0'}} src={dihanieZdorovyaPriceImg} alt="стоимость программы - от 17950 рублей"/>

                    <img className={s.closeBtn} onClick={() => setShowPopup(false)} src={closeBtn} alt="close"/>

                    <h5>Методика восстановления</h5>
                    <ul>
                        <li>Прием терапевта</li>
                        <li>Клинический анализ крови</li>
                        <li>Клинический анализ мочи</li>
                        <li>Пульсоксиметрия</li>
                        <li>Консультация физиотерапевта</li>
                        <li>Грязелечение  (одна зона)</li>
                        <li>Ингаляции</li>
                        <li>Классический массаж 1,5 ед.</li>
                        <li>Бальнеолечение (солевые, фитованны) или бассейн</li>
                        <li>Аппаратная физиотерапия (1 вид)</li>
                        <li>Галотерапия (спелеотерапия)</li>
                        <li>Ингаляции кислорода аппаратные</li>
                        <li>Климатотерапия</li>
                        <li>Фиточай (сбор лечебных трав)</li>
                        <li>Утренняя гимнастика, лечебная физкультура</li>
                        <li>Талассотерапия</li>
                        <li>Медикаментозное лечение (неотложная помощь)</li>
                    </ul>

                </div>
            </div>

        </div>

        {/* POPUP Восстановление*/}
        <div onClick={ () => setShowPopup(false)} className={showPopup && popupIndex === 2 ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}>
                    <img src={medicalSpaPage.bannerIcons[2]} alt=""/>
                    <h4>Восстановление</h4>
                    <p>Общий комплекс оздоровления</p>
                    <h5>Продолжительность</h5>
                    <p>Определяется пожеланием гостя</p>

                    <div>
                        <h5>Для кого?</h5>
                        <p>Программа рекомендуется широкому кругу людей с усталостью, раздражением, стрессом, низким
                            уровнем иммунитета, концентрации и работоспособности.</p>
                        <h5>Результат</h5>
                        <p>Восстановление организма после заболеваний или травм, снижение обострений хронических
                            недугов, активация защитных сил организма для профилактики заболевания, адаптация к
                            стресс-факторам городской среды, избавление от острых проявлений хронических заболеваний,
                            возвращение функциональности суставов, повышение жизненного тонуса и работоспособности.</p>
                    </div>
                    <Button text="Забронировать"
                            onClick={ () => {
                                setFormPopupOpen(true);
                                setChosenProgram('Восстановление');
                            }}
                            style={{position: 'relative', zIndex: 5, margin: '30px auto 20px', maxWidth:'300px'}}/>

                </div>
                <div className={s.col}>
                    <img src={medicalSpaPopupImgVosstan} alt="Восстановление"/>
                </div>
                <div className={s.col}>
                    <img className={s.closeBtn} onClick={() => setShowPopup(false)} src={closeBtn} alt="close"/>

                    <h5>Методика восстановления</h5>
                    <ul>
                        <li>Консультации врачей</li>
                        <li>Аппаратная физиотерапия</li>
                        <li>Бальнеология</li>
                        <li>Грязелечение</li>
                        <li>Мануальная физиотерапия</li>
                        <li>Климатотерапия</li>
                        <li>Фитотерапия</li>
                        <li>Вегето-резонансная
                            диагностика и терапия
                        </li>
                        <li>Галотерапия</li>
                    </ul>
                </div>
            </div>

        </div>


        {/* POPUP Управление стрессом*/}
        <div onClick={() => setShowPopup(false)} className={showPopup && popupIndex === 3 ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}>
                    <img style={{position: 'relative', top: '-30px'}} src={medicalSpaPage.bannerIcons[3]} alt=""/>
                    <h4 style={{width: 'inherit'}}>Управление<br/>стрессом</h4>
                    <p>Восстановите здоровье и оптимальный уровень энергии</p>
                    <h5>Продолжительность</h5>
                    <p>Определяется пожеланием гостя</p>

                    <div>
                        <h5>Для кого?</h5>
                        <p>Программа показана людям с хроническим стрессом, страдающим вегетососудистой дистонией и
                            неврастенией, депрессией и неврозами. </p>
                        <h5>Результат</h5>
                        <p>Снижение уровня накопившегося в организме хронического стресса. Избавление от хронической
                            усталости, бессонницы, тревожности, раздражительности, напряжения, головной боли, а также
                            повышение уровня работоспособности и концентрации.</p>
                    </div>
                    <Button text="Забронировать"
                            onClick={ () => {
                                setFormPopupOpen(true);
                                setChosenProgram('Управление стрессом');
                            }}
                            style={{position: 'relative', zIndex: 5, margin: '30px auto 20px', maxWidth:'300px'}}/>

                </div>
                <div className={s.col}>
                    <img src={medicalSpaPopupImgStress} alt="Управление стрессом"/>
                </div>
                <div className={s.col}>
                    <img className={s.closeBtn} onClick={() => setShowPopup(false)} src={closeBtn} alt="close"/>

                    <h5>Методика лечения</h5>
                    <ul>
                        <li>Консультации врачей</li>
                        <li>Аппаратная физиотерапия</li>
                        <li>Бальнеология</li>
                        <li>Грязелечение</li>
                        <li>Мануальная физиотерапия</li>
                        <li>Климатотерапия</li>
                        <li>Фитотерапия</li>
                        <li>Фитнес</li>
                        <li>Галотерапия</li>
                        <li>Йога</li>
                        <li>Скандинавская ходьба</li>
                        <li>Плавание</li>
                        <li>Электросон</li>
                        <li>Дарсонваль</li>
                        <li>Массаж воротниковой зоны и головы</li>
                        <li>Королевский СПА-ритуал «Спокойствие»</li>
                        <li>Стоун массаж</li>
                        <li>Сауна</li>
                        <li>Римская парная</li>
                        <li>Хаммам</li>
                        <li>Бассейн</li>
                        <li>Джакузи</li>
                        <li>Лежаки «теплый сон»</li>
                        <li>Ванна валериановая/лавандовая</li>
                        <li>Кислородный коктейль</li>
                        <li>ароматерапия</li>
                    </ul>
                </div>
            </div>

        </div>

        {/* POPUP Детокс*/}
        <div onClick={() => setShowPopup(false)} className={showPopup && popupIndex === 4 ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}>
                    <img src={medicalSpaPage.bannerIcons[0]} alt=""/>
                    <h4>Детокс</h4>
                    <p>Восстановите здоровье и оптимальный уровень энергии</p>
                    <h5>Продолжительность</h5>
                    <p>Определяется пожеланием гостя</p>

                    <div>
                        <h5>Для кого?</h5>
                        <p>Программа предназначена для людей с привычкой неправленого питания, страдающие от избыточной
                            тяги к кофе, сладкому, табаку или алкоголю. Также людям, живущим в городах с неблагоприятной
                            экологической обстановкой.</p>
                        <h5>Результат</h5>
                        <p>Определение уровня оксидативного стресса в организме для его нейтрализации. Очищение
                            организма от шлаков и токсинов, накопленных из-за неправильного питания и неблагоприятной
                            внешней среды, избавиться от высыпаний и раздражений кожи.</p>
                    </div>

                    <Button text="Забронировать"
                            onClick={ () => {
                                setFormPopupOpen(true);
                                setChosenProgram('Детокс');
                            }}
                            style={{position: 'relative', zIndex: 5, margin: '30px auto 20px', maxWidth:'300px'}}/>
                </div>


                <div className={s.col}>
                    <img src={medicalSpaPopupImgDetox} alt="Детокс"/>
                </div>
                <div className={s.col}>
                    <img className={s.closeBtn} onClick={() => setShowPopup(false)} src={closeBtn} alt="close"/>

                    <h5>Методика лечения</h5>
                    <ul>
                        <li>Консультации врачей</li>
                        <li>Аппаратная физиотерапия</li>
                        <li>Бальнеология</li>
                        <li>Фитнес</li>
                        <li>Мануальная физиотерапия</li>
                        <li>Климатотерапия</li>
                        <li>Фитотерапия</li>
                        <li>Вегето-резонансная диагностика и терапия</li>
                        <li>Галотерапия</li>
                        <li>Процедура для лица «Глубокое очищение»</li>
                        <li>Йога</li>
                        <li>Скандинавская ходьба</li>
                        <li>Плавание</li>
                        <li>Сауна</li>
                        <li>Римская парная</li>
                        <li>Хаммам</li>
                        <li>Бассейн</li>
                        <li>Джакузи</li>
                        <li>Лежаки «теплый сон»</li>
                    </ul>
                </div>
            </div>

        </div>

        {/* POPUP Свобода движения*/}
        <div onClick={() => setShowPopup(false)}  className={showPopup && popupIndex === 5 ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}>
                    <img style={{position: 'relative', top: '-30px'}} src={medicalSpaPage.bannerIcons[4]} alt=""/>
                    <h4 style={{width: 'inherit'}}>Свобода движения</h4>
                    <p>Восстановите здоровье и оптимальный уровень энергии</p>
                    <h5>Продолжительность</h5>
                    <p>Определяется пожеланием гостя</p>

                    <div>
                        <h5>Для кого?</h5>
                        <p>Программа предназначена людям с недостаточным уровнем активности в повседневной жизни,
                            ведущим сидячий образ жизни, утратившим мышечный тонус</p>
                        <h5>Результат</h5>
                        <p>Улучшение состояния опорно-двигательной системы, повышение тонуса и укрепление мышц,
                            возвращение функциональности суставов, избавление от боли в разных частях тела, выпрямление
                            осанки уменьшение головных болей.</p>
                    </div>

                    <Button text="Забронировать"
                            onClick={ () => {
                                setFormPopupOpen(true);
                                setChosenProgram('Свобода движения');
                            }}
                            style={{position: 'relative', zIndex: 5, margin: '30px auto 20px', maxWidth:'300px'}}/>
                </div>


                <div className={s.col}>
                    <img src={medicalSpaPopupImgDvizhenie} alt="Свобода движаения"/>
                </div>
                <div className={s.col}>
                    <img className={s.closeBtn} onClick={() => setShowPopup(false)} src={closeBtn} alt="close"/>

                    <h5>Методика лечения</h5>
                    <ul>
                        <li>Консультации врачей</li>
                        <li>Аппаратная физиотерапия</li>
                        <li>Бальнеология</li>
                        <li>Фитнес</li>
                        <li>Мануальная физиотерапия</li>
                        <li>Климатотерапия</li>
                        <li>Фитотерапия</li>
                        <li>Галотерапия</li>
                        <li>Гимнастика на свежем воздухе</li>
                        <li>Процедура для лица «Глубокое очищение»</li>
                        <li>Йога</li>
                        <li>Скандинавская ходьба</li>
                        <li>Кардиотренировки</li>
                        <li>Массаж зональный</li>
                        <li>Физиотерапевтическая реабилитация</li>
                        <li>Индивидуальный массаж 60 мин</li>
                        <li>Лимфодренажный массаж</li>
                        <li>Турецкий пенный уход</li>
                        <li>Сауна</li>
                        <li>Римская парная</li>
                        <li>Хаммам</li>
                        <li>Бассейн</li>
                        <li>Джакузи</li>
                        <li>Лежаки «теплый сон»</li>
                    </ul>
                </div>
            </div>

        </div>

        {/* POPUP Сильное сердце*/}
        <div onClick={() => setShowPopup(false)}  className={showPopup && popupIndex === 6 ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}>
                    <img style={{filter: 'none'}} src={medicalSpaPage.advantagesIcons[4].img} alt=""/>
                    <h4>Сильное сердце</h4>
                    <p>Восстановите здоровье и оптимальный уровень энергии</p>
                    <h5>Продолжительность</h5>
                    <p>Определяется пожеланием гостя</p>

                    <div>
                        <h5>Для кого?</h5>
                        <p>Программа будет полезна людям, страдающим хроническими заболеваниями сердечно-сосудистой
                            системы: гипертоническая болезнь, ишемической болезни сердца, заболевания артерий и вен.</p>
                        <h5>Результат</h5>
                        <p>Нормализация работы сердца, повышение выносливости и работоспособности, уменьшение головных
                            болей и боли в области сердца, улучшение кровообращения и уровня общего тонуса организма
                            благодаря здоровой сердечно-сосудистой системе.</p>
                    </div>
                    <Button text="Забронировать"
                            onClick={ () => {
                                setFormPopupOpen(true);
                                setChosenProgram('Сильное сердце');
                            }}
                            style={{position: 'relative', zIndex: 5, margin: '30px auto 20px', maxWidth:'300px'}}/>
                </div>


                <div className={s.col}>
                    <img src={medicalSpaPopupImgSerdce} alt="Сильное сердце"/>
                </div>
                <div className={s.col}>
                    <img className={s.closeBtn} onClick={() => setShowPopup(false)} src={closeBtn} alt="close"/>

                    <h5>Методика лечения</h5>
                    <ul>
                        <li>Консультации врачей</li>
                        <li>Аппаратная физиотерапия</li>
                        <li>Бальнеология</li>
                        <li>Грязелечение</li>
                        <li>Фитнес</li>
                        <li>Мануальная физиотерапия</li>
                        <li>Климатотерапия</li>
                        <li>Фитотерапия</li>
                        <li>Галотерапия</li>
                        <li>Аэротерапия</li>
                        <li>Гелиотерапия</li>
                        <li>Талассотерапия</li>
                        <li>Йога</li>
                        <li>Бассейн</li>
                        <li>Электрофорез</li>
                        <li>Магнитотерапия</li>
                        <li>УВЧ</li>
                        <li>Дарсонваль</li>
                        <li>Кислородный коктейль</li>
                        <li>Массаж воротниковой зоны</li>
                        <li>Детокс-массаж</li>
                        <li>Вихревая ванна</li>
                        <li>Ванна лекарственная</li>
                    </ul>
                </div>
            </div>

        </div>

        {/* POPUP Здоровая спина*/}
        <div onClick={() => setShowPopup(false)}  className={showPopup && popupIndex === 7 ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}>
                    <img src={medicalSpaPage.bannerIcons[1]} alt=""/>
                    <h4>Здоровая спина</h4>
                    <p>Восстановите здоровье и оптимальный уровень энергии</p>
                    <h5>Продолжительность</h5>
                    <p>Определяется пожеланием гостя</p>

                    <div>
                        <h5>Для кого?</h5>
                        <p>Программа разработана для людей сидячий образ жизни, беспокоящих остеохондроз, сколиоз, грыжа
                            межпозвоночных дисков и спондилез.</p>
                        <h5>Результат</h5>
                        <p>Восстановление осанки, уменьшение болевого синдрома, уменьшение нарушений чувствительности,
                            избавиться от острых и хронических болей в спине и защемлений, снять напряжение и гипертонус
                            мышц, восстановить чувствительность и подвижность конечностей.</p>
                    </div>
                    <Button text="Забронировать"
                            onClick={ () => {
                                setFormPopupOpen(true);
                                setChosenProgram('Здоровая спина');
                            }}
                            style={{position: 'relative', zIndex: 5, margin: '30px auto 20px', maxWidth:'300px'}}/>
                </div>


                <div className={s.col}>
                    <img src={medicalSpaPopupImgSpina} alt="Здоровая спина"/>
                </div>
                <div className={s.col}>
                    <img className={s.closeBtn} onClick={() => setShowPopup(false)} src={closeBtn} alt="close"/>

                    <h5>Методика лечения</h5>
                    <ul>
                        <li>Консультации врачей</li>
                        <li>Аппаратная физиотерапия</li>
                        <li>Бальнеология</li>
                        <li>Грязелечение</li>
                        <li>Мануальная физиотерапия</li>
                        <li>Фитнес</li>
                        <li>Галотерапия</li>
                        <li>Гелиотерапия, талассотерапия</li>
                        <li>Йога</li>
                        <li>Тренажерный зал</li>
                        <li>Бассейн</li>
                        <li>Грязелечение</li>
                        <li>Восстанавливающий массаж спины</li>
                        <li>Климатотерапия</li>
                        <li>Фитотерапия</li>
                        <li>Ультразвук</li>
                        <li>Магнитотерапия</li>
                        <li>ДДТ</li>
                        <li>Амплипульс</li>
                        <li>Кислородный коктейль</li>
                        <li>Электрофорез</li>
                        <li>Вихревая ванна</li>
                        <li>Ванна лекарственная</li>
                        <li>Флоатинг</li>
                        <li>Термальное оздоровление Гротта Джусти</li>
                    </ul>
                </div>
            </div>

        </div>


    </>

};

export default MedicalSpaPage;

