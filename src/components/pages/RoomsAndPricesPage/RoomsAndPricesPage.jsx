import React from "react";
import RoomsAndPricesPageBanner from "./RoomsAndPricesPageBanner/RoomsAndPricesPageBanner";
import RoomsSlider from "../../shared/RoomsSlider/RoomsSlider";
import CenteredSlider from "../../shared/CenteredSlider/CenteredSlider";
import GridSlider from "../../shared/GridSlider/GridSlider";
import {roomsAndPricesPageData} from "../../../data";


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
            <CenteredSlider title={'Сегодня в программе'} slides={roomsAndPricesPageData.centeredSlides}/>
        </section>

        <section className='section last'>
            <GridSlider slides={roomsAndPricesPageData.gridSlides}/>
        </section>
    </>

};

export default RoomsAndPricesPage;

