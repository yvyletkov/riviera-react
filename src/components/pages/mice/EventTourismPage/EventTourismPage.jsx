import React from "react";
import MicePageBanner from "../MicePageBanner/MicePageBanner";
import TextBlock from "../TextBlock/TextBlock";
import {micePagesData, roomsAndPricesPageData} from "../../../../data";
import WidthSpecialsSlider from "../../../shared/sliders/WidthSpecialsSlider/WidthSpecialsSlider";
import RoomsSlider from "../../../shared/sliders/RoomsSlider/RoomsSlider";
import s from "./EventTourismPage.module.scss";
import Headline from "../../../shared/Headline/Headline";
import Button from "../../../shared/Button/Button";
import SpecialsSlider from "../../../shared/sliders/SpecialsSlider/SpecialsSlider";
import decisionBlockImg from "../../../../img/mice/conference/14.jpg";
import MapSection from "../../../shared/MapSection/MapSection";
import imageBanner from "../../../../img/mice/event-tourism/2.jpg";
import ContactForm from "../../../additional/ContactForm/ContactForm";
import imageMobile from "../../../../img/mice/event-tourism/3.jpg"

const EventTourismPage = () => {

    return (
        <>
            <MicePageBanner subtitle={'Мероприятия'}
                            title1={'Размещение участников'}
                            title1Style={{fontSize:'30px', margin:'25px 0 10px'}}
                            title2={'Форума'}
                            title3={'Созвездия'}
                            title3Style={{fontSize:'32px',
                                          backgroundColor:"#ffbb28",
                                          padding:'5px 10px',
                                          marginTop:'25px'}}
                            icons={micePagesData.conferenceIconsBanner}
                            backgroundStyle={{
                                backgroundImage:`url(${imageBanner})`}}/>
            <section className='section first'>
                <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={roomsAndPricesPageData.modernDescr}
                             data={roomsAndPricesPageData.modernSlides}/>

                <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                             textContent={roomsAndPricesPageData.classicDescr} data={roomsAndPricesPageData.classicSlides}/>
            </section>
            <section className="section">
                <WidthSpecialsSlider slides={micePagesData.widthSpecialsSlider} title={"Для деловых встреч"}/>
            </section>
            <section className="section">
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.content}>
                            <Headline subtitle={'Изысканные'} title={'Блюда'}/>
                            <p className={s.text}>Русская и Черноморская кухня, мясные и рыбные деликатесы, опции для вегетарианцев и приверженцев здорового питания, нежные десерты – любой найдет как привычную для себя кухню, так и сможет порадовать себя чем-то новым.</p>
                            <p className={s.hashtag}>#соберёмланчбокс</p>
                        </div>
                    </div>
                    <img className={s.imageMobile} src={imageMobile} alt="Фото еды" />
                </div>
            </section>
            <section className="section">
                <TextBlock/>
            </section>
            <section className="section">
                <SpecialsSlider title={"Услуги"}
                                subtitle={"Дополнительные"}
                                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."}
                                slides={micePagesData.wideSliderServices}
                                btnLink={'/promotions'}
                />
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
                                    <Headline subtitle={'Хотите посоветоваться'} title={'С коллегами?'}/>
                                    <p>Для предметного обсуждения мы подготовили каталог со всеми нашими залами и возможностями для вашего мероприятия.</p>
                                    <p>Подберите идеальное сочетание услуг!</p>
                                    <ContactForm withEmail
                                                 formName={'Форма из блока "Хотите посоветоваться с коллегами?" (Скачать коммерческое предложение)'}
                                                 swalText={'сейчас мы отправим всю необходимую информацию Вам на почту'}
                                                 submitBtnText={'Скачать коммерческое предложение'}/>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <MapSection />
            </section>
        </>
    )
}

export default EventTourismPage;
