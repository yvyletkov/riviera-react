import React from "react";
import {vacationPagesData} from "../../../data";
import CenteredSlider from "../../shared/CenteredSlider/CenteredSlider";
import SpecialsSlider from "../../shared/SpecialsSlider/SpecialsSlider";
import MapSection from "../../shared/MapSection/MapSection";
import PageBanner from "../../shared/PageBanner/PageBanner";
import RoomsSlider from "../../shared/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/GridSlider/GridSlider";
import GallerySlider from "../../shared/GallerySlider/GallerySlider";

const VacationForYourselfPage = () => {
    return <>
        <PageBanner fontSize={["95px", "71px"]}
                    fontSizeMobile={["17.4vw", "12.6vw"]}
                    subtitle={'Отдых для себя'}
                    topLine={"Отдых"}
                    bottomLine={"без детей"}
                    bannerImg={vacationPagesData.vacationForYourselfBannerImg}
                    bannerMobileImg={vacationPagesData.vacationForYourselfBannerMobileImg}
                    descr={'Сделай свой отдых особенным для себя! Один из лучших курортных отелей Riviera Sunrise Resort & SPA, г. Алушта, приглашает вас на отдых без детей в Крым.<br/>В гостиничном комплексе 209 номеров различных категорий: от «Стандарта» до «Президентского люкса».<br/>Отличный климат, элегантный дизайн, современное оснащение номеров, высококлассный сервис, анимация для взрослых и многое другое – создают идеальные условия для Вашего комфортного отдыха.'}/>

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={vacationPagesData.modernDescr}
                         data={vacationPagesData.modernSlides}/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={vacationPagesData.classicDescr} data={vacationPagesData.classicSlides}/>
        </section>

        <section className='section'>
            <GridSlider slides={vacationPagesData.gridSlides}/>
        </section>

        <section className='section'>
            <CenteredSlider title={'Сегодня в программе'} slides={vacationPagesData.centeredSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} slides={vacationPagesData.specialsSlides}/>
        </section>

        <section className='section'>
            <GallerySlider slides={vacationPagesData.gallerySlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default VacationForYourselfPage;

