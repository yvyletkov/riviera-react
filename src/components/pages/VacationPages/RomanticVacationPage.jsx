import React from "react";
import {vacationPagesData} from "../../../data";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
import MapSection from "../../shared/MapSection/MapSection";
import PageBanner from "../../shared/PageBanner/PageBanner";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import GallerySlider from "../../shared/sliders/GallerySlider/GallerySlider";
import FoodBlock from "../../shared/FoodBlock/FoodBlock";

const RomanticVacationPage = () => {
    return <>
        <PageBanner fontSize={["75px", "47px"]}
                    fontSizeMobile={["15.6vw", "8.7vw"]}
                    extraLine={['отдых любимому человеку', '5vw', '30px',]}
                    subtitle={'Отдых c любимым'}
                    topLine={"Подари"}
                    bottomLine={"романтический"}
                    bannerImg={vacationPagesData.romanticVacationBannerImg}
                    bannerMobileImg={vacationPagesData.romanticVacationBannerMobileImg}
                    descr={'Что может быть лучше отдыха с любимым человеком? Если читаете эти строки значит Вы хотели бы сделать необычный и безумно приятный подарок себе и второй половинке с чем вам поможет один из лучших курортных отелей Riviera Sunrise Resort & SPA, г. Алушта.<br/>В гостиничном комплексе 209 номеров различных категорий: от «Стандарта» до «Президентского люкса». Отличный климат, элегантный дизайн, современное оснащение номеров, высококлассный сервис, романтические ужины, SPA процедуры, анимация для взрослых и многое другое – создают идеальные условия для Вашего комфортного отдыха.'}/>

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
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} btnLink={'/promotions'} slides={vacationPagesData.specialsSlides}/>
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


export default RomanticVacationPage;

