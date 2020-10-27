import React from "react";
// import s from "./RoomsAndPricesPage.module.scss";
import RoomsAndPricesPageBanner from "./RoomsAndPricesPageBanner/RoomsAndPricesPageBanner";
import RoomsSlider from "../shared/RoomsSlider/RoomsSlider";
import classic1img from "../../img/rooms-slider/rooms-and-prices-page/classic1.jpg";
import classic2img from "../../img/rooms-slider/rooms-and-prices-page/classic2.jpg";
import classic3img from "../../img/rooms-slider/rooms-and-prices-page/classic3.jpg";
import modern1img from "../../img/rooms-slider/rooms-and-prices-page/modern1.jpg";
import modern2img from "../../img/rooms-slider/rooms-and-prices-page/modern2.jpg";
import modern3img from "../../img/rooms-slider/rooms-and-prices-page/modern3.jpg";
import CenteredSlider from "../shared/CenteredSlider/CenteredSlider";

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
}

const RoomsAndPricesPage = () => {
    return <>
        <RoomsAndPricesPageBanner/>
        <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={roomsAndPricesPageData.modernDescr} data={roomsAndPricesPageData.modernSlides}/>
        <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'} textContent={roomsAndPricesPageData.classicDescr} data={roomsAndPricesPageData.classicSlides}/>
        <CenteredSlider title={'Сегодня в программе'}/>

    </>

};

export default RoomsAndPricesPage;

