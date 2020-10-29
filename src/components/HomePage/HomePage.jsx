import React from "react";
// import s from "./RoomsAndPricesPage.module.scss";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import CenteredSlider from "../shared/CenteredSlider/CenteredSlider";
import GridSlider from "../shared/GridSlider/GridSlider";
import TextPlusImageBlock from "../shared/TextPlusImageBlock/TextPlusImageBlock";
import SpecialsSlider from "../shared/SpecialsSlider/SpecialsSlider";
import GallerySlider from "../shared/GallerySlider/GallerySlider";
import MapSection from "../shared/MapSection/MapSection";
import gridKurortImg1 from "../../img/grid-slider/resort-vacation/1.jpg";
import gridKurortImg2 from "../../img/grid-slider/resort-vacation/2.jpg";
import gridKurortImg3 from "../../img/grid-slider/resort-vacation/3.jpg";
import gridKurortImg4 from "../../img/grid-slider/resort-vacation/4.jpg";
import gridKurortImg5 from "../../img/grid-slider/resort-vacation/5.jpg";
import gridKurortImg6 from "../../img/grid-slider/resort-vacation/6.jpg";
import gridKurortImg7 from "../../img/grid-slider/resort-vacation/7.jpg";
import gridKurortImg8 from "../../img/grid-slider/resort-vacation/8.jpg";

let homePageData = {
    gridSlides: [
        {
            name: "Курортный отдых",
            firstRow: [{title: "Семейный отдых", img: gridKurortImg1, href: '#'}, {
                title: "Номера и цены",
                img: gridKurortImg2,
                href: '#'
            }, {title: "Отдых без детей", img: gridKurortImg3, href: '#'}, {
                title: "Отдых с друзьями",
                img: gridKurortImg4,
                href: '#'
            }],
            secondRow: [{title: "Турпакет", img: gridKurortImg5, href: '#'}, {
                title: "Medical Spa",
                img: gridKurortImg6,
                href: '#'
            }, {title: "Командировка", img: gridKurortImg7, href: '#'}, {
                title: "Романтический отдых",
                img: gridKurortImg8,
                href: '#'
            }],
        },
        {
            name: "Развлечения",
            firstRow: [{title: "Семейный отдых", img: gridKurortImg1, href: '#'}, {
                title: "Что-то другое",
                img: gridKurortImg2,
                href: '#'
            }, {title: "Отдых без детей", img: gridKurortImg3, href: '#'}, {
                title: "Что-то другое",
                img: gridKurortImg4,
                href: '#'
            }],
            secondRow: [{title: "Турпакет", img: gridKurortImg5, href: '#'}, {
                title: "Что-то другое",
                img: gridKurortImg6,
                href: '#'
            }, {title: "Командировка", img: gridKurortImg7, href: '#'}, {
                title: "Что-то другое",
                img: gridKurortImg8,
                href: '#'
            }],
        },
        {
            name: "Инфраструктура",
            firstRow: [{title: "Семейный отдых", img: gridKurortImg1, href: '#'}, {
                title: "Еще один слайд",
                img: gridKurortImg2,
                href: '#'
            }, {title: "Отдых без детей", img: gridKurortImg3, href: '#'}, {
                title: "Еще один слайд",
                img: gridKurortImg4,
                href: '#'
            }],
            secondRow: [{title: "Турпакет", img: gridKurortImg5, href: '#'}, {
                title: "Еще один слайд",
                img: gridKurortImg6,
                href: '#'
            }, {title: "Командировка", img: gridKurortImg7, href: '#'}, {
                title: "Еще один слайд",
                img: gridKurortImg8,
                href: '#'
            }],
        },
        {
            name: "Четвертый слайд",
            firstRow: [{title: "Семейный отдых", img: gridKurortImg1, href: '#'}, {
                title: "Еще один слайд",
                img: gridKurortImg2,
                href: '#'
            }, {title: "Отдых без детей", img: gridKurortImg3, href: '#'}, {
                title: "Еще один слайд",
                img: gridKurortImg4,
                href: '#'
            }],
            secondRow: [{title: "Турпакет", img: gridKurortImg5, href: '#'}, {
                title: "Еще один слайд",
                img: gridKurortImg6,
                href: '#'
            }, {title: "Командировка", img: gridKurortImg7, href: '#'}, {
                title: "Еще один слайд",
                img: gridKurortImg8,
                href: '#'
            }],
        }
    ],
}

const HomePage = () => {
    return <>
        <HomePageBanner/>
        <GridSlider slides={homePageData.gridSlides}/>
        <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'}/>
        <CenteredSlider title={'Сегодня в программе'}/>
        <TextPlusImageBlock subtitle={'Идеальный отдых в Крыму'} title={'круглый год'} withForm={true}/>
        <GallerySlider/>
        <MapSection/>
    </>

};

export default HomePage;

