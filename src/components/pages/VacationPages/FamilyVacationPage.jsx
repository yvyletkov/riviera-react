import React from "react";
import {vacationPagesData} from "../../../data";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
import MapSection from "../../shared/MapSection/MapSection";
import PageBanner from "../../shared/PageBanner/PageBanner";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import GallerySlider from "../../shared/sliders/GallerySlider/GallerySlider";
import WideSlider from "../../shared/sliders/WideSlider/WideSlider";


const FamilyVacationPage = () => {
    return <>
        <PageBanner fontSize={["70px", "57px"]}
                    fontSizeMobile={["16.7vw", "10.5vw"]}
                    subtitle={'Рассвет совершенного сервиса'}
                    topLine={"Лучшее"}
                    bottomLine={"Вашей семье"}
                    bannerImg={vacationPagesData.familyVacationBannerImg}
                    bannerMobileImg={vacationPagesData.familyVacationBannerMobileImg}
                    descr={'Семья — это счастье, любовь и яркие эмоций, это традиционные поездки на отдых и безудержное\n' +
                    ' веселье.<br/>Один из лучших курортных отелей Riviera Sunrise Resort & SPA, г. Алушта, приглашает вас\n' +
                    ' на семейный отдых в Крым.<br/>В гостиничном комплексе 209 номеров различных категорий: от\n' +
                    ' «Стандарта» до «Президентского люкса». Отличный климат, элегантный дизайн, современное оснащение\n' +
                    ' номеров, высококлассный сервис, анимация для детей и взрослых и многое другое – создают\n' +
                    ' идеальные условия для Вашего комфортного отдыха.'}/>

        <section className='section first'>
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
            <WideSlider subtitle={'Развлечения'} title={'для Ваших детей'}
                         slides={vacationPagesData.wideSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} btnLink={'/promotions'} slides={vacationPagesData.specialsSlides}/>
        </section>

        <section className='section'>
            <GallerySlider slides={vacationPagesData.gallerySlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default FamilyVacationPage;

