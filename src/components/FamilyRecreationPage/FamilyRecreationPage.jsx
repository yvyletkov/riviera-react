import React from "react";
import {familyRecreationPageData} from "../../data";
import CenteredSlider from "../shared/CenteredSlider/CenteredSlider";
import SpecialsSlider from "../shared/SpecialsSlider/SpecialsSlider";
import MapSection from "../shared/MapSection/MapSection";
import PageBanner from "../shared/PageBanner/PageBanner";
import RoomsSlider from "../shared/RoomsSlider/RoomsSlider";
import GridSlider from "../shared/GridSlider/GridSlider";
import GallerySlider from "../shared/GallerySlider/GallerySlider";
import WideSlider from "../shared/WideSlider/WideSlider";


const FamilyRecreationPage = () => {
    return <>
        <PageBanner fontSize={["84px", "71px"]}
                    fontSizeMobile={["16.7vw", "11.3vw"]}
                    topLine={"Лучшее"}
                    bottomLine={"Вашей семье"}
                    bannerImg={familyRecreationPageData.bannerImg}
                    bannerMobileImg={familyRecreationPageData.bannerMobileImg}
                    descr={'Семья — это счастье, любовь и яркие эмоций, это традиционные поездки на отдых и безудержное\n' +
                    ' веселье.<br/>Один из лучших курортных отелей Riviera Sunrise Resort & SPA, г. Алушта, приглашает вас\n' +
                    ' на семейный отдых в Крым.<br/>В гостиничном комплексе 209 номеров различных категорий: от\n' +
                    ' «Стандарта» до «Президентского люкса». Отличный климат, элегантный дизайн, современное оснащение\n' +
                    ' номеров, высококлассный сервис, анимация для детей и взрослых и многое другое – создают\n' +
                    ' идеальные условия для Вашего комфортного отдыха.'}/>

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={familyRecreationPageData.modernDescr}
                         data={familyRecreationPageData.modernSlides}/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={familyRecreationPageData.classicDescr} data={familyRecreationPageData.classicSlides}/>
        </section>

        <section className='section'>
            <GridSlider slides={familyRecreationPageData.gridSlides}/>
        </section>

        <section className='section'>
            <CenteredSlider title={'Сегодня в программе'} slides={familyRecreationPageData.centeredSlides}/>
        </section>

        <section className='section'>
            <WideSlider subtitle={'Развлечения'} title={'для Ваших детей'}
                         slides={familyRecreationPageData.wideSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} slides={familyRecreationPageData.specialsSlides}/>
        </section>

        <section className='section'>
            <GallerySlider slides={familyRecreationPageData.gallerySlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default FamilyRecreationPage;

