import React, {useEffect, useState} from "react";
import {homePageData} from "../../../data"
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import TextPlusImageBlock from "../../shared/TextPlusImageBlock/TextPlusImageBlock";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
import GallerySlider from "../../shared/sliders/GallerySlider/GallerySlider";
import MapSection from "../../shared/MapSection/MapSection";
import Preloader from "../../shared/Preloader/Preloader";

const HomePage = () => {

    useEffect(() => document.title = 'Riviera Sunrise Resort & SPA – Алушта, Крым – главная страница', [])

    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(!loader)
    }, [])

    return (
        loader ?
            <>
                <HomePageBanner/>

                <section className='section first'>
                    <GridSlider slides={homePageData.gridSlides}/>
                </section>

                <section className='section'>
                    <SpecialsSlider subtitle={'Лучшие'} title={'Акции'} btnLink={'/offers'}
                                    slides={homePageData.specialsSlides}/>
                </section>

                <section className='section'>
                    <CenteredSlider title={'Актуальные мероприятия'} slides={homePageData.centeredSlides} type={'home-page'}/>
                </section>

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
            :
            <Preloader/>)

};

export default HomePage;

