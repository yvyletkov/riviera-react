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

const VacationWithFriendsPage = () => {
    return <>
        <PageBanner fontSize={["82px", "60px"]}
                    fontSizeMobile={["15vw", "10vw"]}
                    subtitle={'Отдых c друзьями'}
                    topLine={"Отдых,"}
                    bottomLine={"который Вы</br>планировали"}
                    bannerImg={vacationPagesData.vacationWithFriendsBannerImg}
                    bannerMobileImg={vacationPagesData.vacationWithFriendsBannerMobileImg}
                    descr={'Сделай отдых особенным для себя и друзьей!<br/>Один из лучших курортных отелей Riviera Sunrise Resort & SPA, г. Алушта, приглашает вас в Крым на крутой отдых с друзьями.<br/>В гостиничном комплексе 209 номеров различных категорий: от «Стандарта» до «Президентского люкса». Отличный климат, элегантный дизайн, современное оснащение номеров, высококлассный сервис, анимация для взрослых и многое другое – создают идеальные условия для Вашего комфортного отдыха. '}/>

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


export default VacationWithFriendsPage;

