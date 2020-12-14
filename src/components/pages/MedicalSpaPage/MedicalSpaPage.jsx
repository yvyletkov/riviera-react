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

const MedicalSpaPage = ({bannerImg, bannerIcons, advantagesIcons}) => {

    let [popupOpen, setPopupOpen] = React.useState(false);
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
                    onClick={() => setPopupOpen(true)} text={"Подробнее"}/>
            <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
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

    {/* POPUP*/}
        <div className={showPopup ? s.popupWrapper + ' ' + s.show : s.popupWrapper}>
            <div className={s.popup}>
                <div className={s.col}></div>
                <div className={s.col}></div>
                <div className={s.col}></div>
            </div>

        </div>
    {/* end POPUP*/}

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

</>

};

export default MedicalSpaPage;

