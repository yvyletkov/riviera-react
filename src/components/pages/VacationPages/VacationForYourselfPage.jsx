import React from "react";
import {vacationPagesData} from "../../../data";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import GallerySlider from "../../shared/sliders/GallerySlider/GallerySlider";
import FoodBlock from "../../shared/FoodBlock/FoodBlock";
import MetaTags from 'react-meta-tags';

const VacationForYourselfPage = () => {

    React.useEffect( () => document.title = `Отдых без детей – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <>
        <MetaTags>
            <meta name="keywords" content="отдых без детей, отдых без детей у моря, спокойный отдых" />
        </MetaTags>
        <VacationsPageBanner fontSize={["95px", "71px"]}
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

        {/*<section className='section'>*/}
        {/*    <CenteredSlider title={'Сегодня в программе'} slides={vacationPagesData.centeredSlides}/>*/}
        {/*</section>*/}

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} btnLink={'/offers'} slides={vacationPagesData.specialsSlides}/>
        </section>


        <section className='section'>
            <FoodBlock/>
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

