import React from "react";
import RoomsAndPricesPageBanner from "./RoomsAndPricesPageBanner/RoomsAndPricesPageBanner";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import {roomsAndPricesPageData} from "../../../data";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";


const RoomsAndPricesPage = () => {

    React.useEffect( () => document.title = 'Номера и цены – отель Riviera Sunrise Resort & SPA – Алушта, Крым', [])

    return <>
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

        <section className='section last'>
            <CenteredSlider title={'Актуальные мероприятия'} slides={roomsAndPricesPageData.centeredSlides}/>
        </section>

    </>

};

export default RoomsAndPricesPage;

