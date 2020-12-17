import React, {useEffect} from "react";
import {homePageData} from "../../../data"
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import TextPlusImageBlock from "../../shared/TextPlusImageBlock/TextPlusImageBlock";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
import GallerySlider from "../../shared/sliders/GallerySlider/GallerySlider";
import MapSection from "../../shared/MapSection/MapSection";

const HomePage = () => {

    React.useEffect( () => document.title = 'Riviera Sunrise Resort & SPA – Алушта, Крым – главная страница', [])

    return <>
        <HomePageBanner/>

        <section className='section first'>
            <GridSlider slides={homePageData.gridSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} btnLink={'/offers'} slides={homePageData.specialsSlides}/>
        </section>

        {/*<section className='section'>*/}
        {/*    <CenteredSlider title={'Сегодня в программе'} slides={homePageData.centeredSlides} type={'home-page'}/>*/}
        {/*</section>*/}

        <section className='section'>
            <TextPlusImageBlock subtitle={'Идеальный отдых в Крыму'} title={'круглый год'} withForm={true}/>
        </section>

        <section className='section'>
            <GallerySlider slides={homePageData.gallerySlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};

export default HomePage;

