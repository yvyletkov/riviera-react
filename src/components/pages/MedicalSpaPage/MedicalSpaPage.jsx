import React from "react";
import s from "./MedicalSpaPage.module.scss";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import {medicalSpaPage, roomsAndPricesPageData} from "../../../data";
import Button from "../../shared/Button/Button";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";
import img from "../../../img/events/wedding/weddingPageBanner.jpg";
import AnimatedMouseIcon from "../../shared/AnimatedMouseIcon/AnimatedMouseIcon";
import AdvantagesBlock from "../../shared/AdvantagesBlock/AdvantagesBlock";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import medicalSpaPopupImgVosstan from "../../../img/medical-spa/popup/восстановление.jpg";
import medicalSpaPopupImgDetox from "../../../img/medical-spa/popup/детокс.jpg";
import medicalSpaPopupImgSpina from "../../../img/medical-spa/popup/здоровая-спина.jpg";
import medicalSpaPopupImgDvizhenie from "../../../img/medical-spa/popup/свобода-движения.jpg";
import medicalSpaPopupImgSerdce from "../../../img/medical-spa/popup/сильное-сердце.jpg";
import medicalSpaPopupImgStress from "../../../img/medical-spa/popup/управление-стрессом.jpg";
import closeBtn from "../../../img/close.svg";


const MedicalSpaPage = ({bannerImg, bannerIcons, advantagesIcons}) => {

    let [popupContactFormOpen, setPopupContactFormOpen] = React.useState(false);
    let [showPopup, setShowPopup] = React.useState(false); // or 1, 2, 3, 4

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
                        <img src={item} alt=""/>
                    </div>)}
                </div>

                <Button style={{width: "fit-content"}}
                        onClick={() => setPopupContactFormOpen(true)} text={"Подробнее"}/>
                <PopupContactForm popupOpen={popupContactFormOpen} setPopupOpen={setPopupContactFormOpen}
                                  popupTitleText={'Чтобы получить точную информацию о стоимости, позвольте нам связаться с Вами'}
                                  submitBtnText='Узнать стоимость'
                                  formName={`Форма с верхнего баннера страницы Медикал СПА (кнопка "Подробнее")`}
                                  swalText={'очень скоро наши менеджеры с Вами свяжутся. Также не забывайте проверять указанную почту :)'}
                                  withEmail
                                  withPhone/>

            </div>

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon/>
            </div>
        </div>

        <section className='section first'>
            <AdvantagesBlock slidesToShow={5} icons={advantagesIcons} title={'Всё лучшее в одном месте'}/>
        </section>

        <section className='section first'>
            <EventMainSlider withButton setShowPopup={setShowPopup} title={'Программы оздоровления'} manySlides={true}
                             titleMobile={'Программы оздоровления'} initialSlideIndex={1}
                             slides={medicalSpaPage.mainSlides}/>
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

        <section className='section last'>
            <CenteredSlider title={'Сегодня в программе'} slides={roomsAndPricesPageData.centeredSlides}/>
        </section>

        {/* POPUP Восстановление*/}
        <div className={showPopup === 1 ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}>
                    <h4>Восстановление</h4>
                    <p>Общий комплекс оздоровления</p>
                    <h5>Продолжительность</h5>
                    <p>Определяется пожеланием гостя</p>

                    <div>
                        <h5>Для кого?</h5>
                        <p>Программа рекомендуется широкому кругу людей с усталостью, раздражением, стрессом, низким
                            уровнем иммунитета, концентрации и работоспособности.</p>
                        <h5>Результат</h5>
                        <p>Восстановление организма после заболеваний или травм, снижение обострений хронических недугов, активация защитных сил организма для профилактики заболевания, адаптация к стресс-факторам городской среды, избавление от острых проявлений хронических заболеваний, возвращение функциональности суставов, повышение жизненного тонуса и работоспособности.</p>
                    </div>
                </div>
                <div className={s.col}>
                    <img src={medicalSpaPopupImgVosstan} alt="Восстановление"/>
                </div>
                <div className={s.col}>
                    <img className={s.closeBtn} onClick={ () => setShowPopup(false)} src={closeBtn} alt="close"/>

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
                            диагностика и терапия</li>
                        <li>Галотерапия</li>
                    </ul>
                </div>
            </div>

        </div>


        {/* POPUP Управление стрессом*/}
        <div className={showPopup === 2 ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}>
                    <h4>Управление стрессом</h4>
                    <p>Восстановите здоровье и оптимальный уровень энергии</p>
                    <h5>Продолжительность</h5>
                    <p>Определяется пожеланием гостя</p>

                    <div>
                        <h5>Для кого?</h5>
                        <p>Программа показана людям с хроническим стрессом, страдающим вегетососудистой дистонией и неврастенией, депрессией и неврозами. </p>
                        <h5>Результат</h5>
                        <p>Снижение уровня накопившегося в организме хронического стресса. Избавиться от хронической усталости, бессонницы, тревожности, раздражительности, напряжения, головной боли. Также повышение уровня работоспособности и концентрации, </p>
                    </div>
                </div>
                <div className={s.col}>
                    <img src={medicalSpaPopupImgStress} alt=""/>
                </div>
                <div className={s.col}>
                    <img className={s.closeBtn} onClick={ () => setShowPopup(false)} src={closeBtn} alt="close"/>

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
                        <li>хамам</li>
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

    </>

};

export default MedicalSpaPage;

