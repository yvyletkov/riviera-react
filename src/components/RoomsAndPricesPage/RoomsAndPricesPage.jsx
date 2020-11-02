import React from "react";
// import s from "./RoomPage.module.scss";
import RoomsAndPricesPageBanner from "./RoomsAndPricesPageBanner/RoomsAndPricesPageBanner";
import RoomsSlider from "../shared/RoomsSlider/RoomsSlider";
import CenteredSlider from "../shared/CenteredSlider/CenteredSlider";
import classic1img from "../../img/rooms-slider/rooms-and-prices-page/classic1.jpg";
import classic2img from "../../img/rooms-slider/rooms-and-prices-page/classic2.jpg";
import classic3img from "../../img/rooms-slider/rooms-and-prices-page/classic3.jpg";
import modern1img from "../../img/rooms-slider/rooms-and-prices-page/modern1.jpg";
import modern2img from "../../img/rooms-slider/rooms-and-prices-page/modern2.jpg";
import modern3img from "../../img/rooms-slider/rooms-and-prices-page/modern3.jpg";
import gridSpaImg1 from "../../img/grid-slider/spa/1.jpg";
import gridSpaImg2 from "../../img/grid-slider/spa/2.jpg";
import gridSpaImg3 from "../../img/grid-slider/spa/3.jpg";
import gridSpaImg4 from "../../img/grid-slider/spa/4.jpg";
import gridSpaImg5 from "../../img/grid-slider/spa/5.jpg";
import gridSpaImg6 from "../../img/grid-slider/spa/6.jpg";
import gridSpaImg7 from "../../img/grid-slider/spa/7.jpg";
import gridKurortImg1 from "../../img/grid-slider/resort-vacation/1.jpg";
import gridKurortImg2 from "../../img/grid-slider/resort-vacation/2.jpg";
import gridKurortImg3 from "../../img/grid-slider/resort-vacation/3.jpg";
import gridKurortImg4 from "../../img/grid-slider/resort-vacation/4.jpg";
import gridKurortImg5 from "../../img/grid-slider/resort-vacation/5.jpg";
import gridKurortImg6 from "../../img/grid-slider/resort-vacation/6.jpg";
import gridKurortImg7 from "../../img/grid-slider/resort-vacation/7.jpg";
import gridKurortImg8 from "../../img/grid-slider/resort-vacation/8.jpg";
import GridSlider from "../shared/GridSlider/GridSlider";

let roomsAndPricesPageData = {
    classicSlides: [
        {
            img: classic1img,
            title: "Корпуса классик",
            link: "",
            bookingLink: "",
        },
        {
            img: classic2img,
            title: "Стандарт",
            link: "/classic/standart",
            bookingLink: "",
        },
        {
            img: classic3img,
            title: "Полулюкс Классик",
            link: "/classic/polulyuks-classic",
            bookingLink: "",
        },
        {
            img: classic2img,
            title: "Какой-то номер",
            link: "/classic/",
            bookingLink: "",
        },
    ],
    modernSlides: [
        {
            img: modern1img,
            title: "Корпус Модерн",
            link: "",
            bookingLink: "",
        },
        {
            img: modern2img,
            title: "Стандарт",
            link: "/modern/standart",
            bookingLink: "",
        },
        {
            img: modern3img,
            title: "Полулюкс модерн",
            link: "/modern/polulyuks-modern",
            bookingLink: "",
        },
        {
            img: modern2img,
            title: "Какой-то номер",
            link: "/modern/",
            bookingLink: "",
        },
    ],
    modernDescr: [
        '146 номеров в современном дизайне',
        'Дизайн интерьера выдержан в стиле Модерн и выполнен в концепции Natural Cool и Ocean Style. Современная эксклюзивная дизайнерская мебель в натуральных тонах создает лучшие условия для комфорта и уюта.'
    ],
    classicDescr: [
        '63 номера в классическом стиле',
        'Исторический корпус Классик был полностью реновирован в 2016 году.  Свою историю начал вести в 1913 году и имеет особую атмосферу. Дизайн номеров выполнен в эксклюзивном, классическом стиле.'
    ],
    gridSlides: [
        {
            name: "SPA комплекс",
            firstRow: [{title: "Финская сауна", img: gridSpaImg1, href: '#'}, {
                title: "Русская баня",
                img: gridSpaImg2,
                href: '#'
            }, {title: "Римская сауна", img: gridSpaImg3, href: '#'}, {
                title: "Хаммам",
                img: gridSpaImg4,
                href: '#'
            }],
            secondRow: [{title: `Процедурный кабинет "Расул"`, img: gridSpaImg5, href: '#'}, {
                title: "Соляная пещера",
                img: gridSpaImg6,
                href: '#'
            }, {title: "Крытый бассейн", img: gridSpaImg7, href: '#'},
            ],
        },
        {
            name: "Аква-зона",
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
            name: "Изысканная еда",
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
            name: "Анимация",
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

const RoomsAndPricesPage = () => {
    return <>
        <RoomsAndPricesPageBanner/>

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={roomsAndPricesPageData.modernDescr}
                         data={roomsAndPricesPageData.modernSlides}/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={roomsAndPricesPageData.classicDescr} data={roomsAndPricesPageData.classicSlides}/>
        </section>

        <section className='section'>
            <CenteredSlider title={'Сегодня в программе'}/>
        </section>

        <section className='section last'>
            <GridSlider slides={roomsAndPricesPageData.gridSlides}/>
        </section>
    </>

};

export default RoomsAndPricesPage;

