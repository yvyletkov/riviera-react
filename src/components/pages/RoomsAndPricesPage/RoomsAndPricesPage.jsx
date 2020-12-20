import React from "react";
import RoomsAndPricesPageBanner from "./RoomsAndPricesPageBanner/RoomsAndPricesPageBanner";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import {roomsAndPricesPageData} from "../../../data";
import MetaTags from 'react-meta-tags';


const RoomsAndPricesPage = () => {

    React.useEffect( () => document.title = 'Номера и цены – отель Riviera Sunrise Resort & SPA – Алушта, Крым', [])

    return <>
        <MetaTags>
            <meta name="keywords" content="номер в отеле, цена номеров в отеле, цены номеров отель у моря, цена номеров отель крыма, просторные номера, снять номер в отеле, номер с видом на море, номер с видом на горы, цены номеров отель ривьера, снять номер в отеле"/>
        </MetaTags>
        <RoomsAndPricesPageBanner/>

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={roomsAndPricesPageData.modernDescr}
                         data={roomsAndPricesPageData.modernSlides}/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={roomsAndPricesPageData.classicDescr} data={roomsAndPricesPageData.classicSlides}/>
        </section>


        <section className='section'>
            <GridSlider slides={roomsAndPricesPageData.gridSlides}/>
        </section>

        {/*<section className='section last'>*/}
        {/*    <CenteredSlider title={'Сегодня в программе'} slides={roomsAndPricesPageData.centeredSlides}/>*/}
        {/*</section>*/}

    </>

};

export default RoomsAndPricesPage;

