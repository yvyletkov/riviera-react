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
import imageBanner from "../../../../img/mice/event-tourism/2.jpg"

const EventTourismPage = () => {

    return (
        <>
            <MicePageBanner subtitle={'Мероприятия'}
                            title1={'Размещение участников'}
                            title1Style={{fontSize:'30px', marginBottom:'5px'}}
                            title2={'Форума'}
                            title3={'Созвездия'}
                            title3Style={{fontSize:'32px', backgroundColor:"#ffbb28", padding:'5px 10px'}}
                            icons={micePagesData.conferenceIconsBanner}
                            background={imageBanner}/>
            <section className='section first'>
                <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={roomsAndPricesPageData.modernDescr}
                             data={roomsAndPricesPageData.modernSlides}/>

                <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                             textContent={roomsAndPricesPageData.classicDescr} data={roomsAndPricesPageData.classicSlides}/>
            </section>
            <section className="section" style={window.matchMedia('(min-width: 768px)').matches ? {marginBottom:'30px'} : {}}>
                <WidthSpecialsSlider slides={micePagesData.widthSpecialsSlider} title={"Для деловых встреч"}/>
            </section>
            <section className="section">
                <TextBlock/>
            </section>
            <section className="section">
                <SpecialsSlider title={"Услуги"}
                                subtitle={"Дополнительные"}
                                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."}
                                slides={micePagesData.wideSliderServices}
                                textLink={'#'}
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
                                    <form className={'form'}>
                                        <input className={'formInput'} placeholder={'Введите Ваше имя'} type="text"/>
                                        <input className={'formInput'} placeholder={'Введите Вашу почту'} type="text"/>
                                        <Button text={'Скачать коммерческое предложение'}/>
                                    </form>

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