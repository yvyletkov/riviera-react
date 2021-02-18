import React, {useEffect} from "react";
import {homePageData} from "../../../data"
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import TextPlusImageBlock from "../../shared/TextPlusImageBlock/TextPlusImageBlock";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
import GallerySlider from "../../shared/sliders/GallerySlider/GallerySlider";
import MapSection from "../../shared/MapSection/MapSection";
import popupImg from "../../../img/23febpopup.jpg";
import popupImgMob from "../../../img/23febpopup-mob.jpg";
import {NavLink} from "react-router-dom";

const HomePage = () => {

    React.useEffect( () => document.title = 'Riviera Sunrise Resort & SPA – Алушта, Крым – главная страница', [])


    React.useEffect(() => {
        setTimeout( () => {
            document.querySelector('.popupOfferWrapper').classList.add('active')
            document.querySelector('.popupOfferWrapper').addEventListener('click', (e) => e.target.classList.remove('active'))
        }, 4000)
    }, [])

    return <>
        <div className='popupOfferWrapper'>
            <div>
                <NavLink to={'/23-february'}>Подробнее →</NavLink>
                <img src={window.matchMedia('(max-width: 600px)').matches ? popupImgMob : popupImg} alt=""/>
            </div>
        </div>
        <HomePageBanner/>

        <section className='section first'>
            <GridSlider slides={homePageData.gridSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'Акции'} btnLink={'/offers'} slides={homePageData.specialsSlides}/>
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

};

export default HomePage;

