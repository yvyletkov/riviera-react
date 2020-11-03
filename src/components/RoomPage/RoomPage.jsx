import React from "react";
import RoomPageBanner from "./RoomPageBanner/RoomPageBanner";
import CenteredSlider from "../shared/CenteredSlider/CenteredSlider";
import RoomDescriptionBlock from "./RoomDescriptionBlock/RoomDescriptionBlock";
import LargeGallerySlider from "../shared/LargeGallerySlider/LargeGallerySlider";
import SpecialsSlider from "../shared/SpecialsSlider/SpecialsSlider";
import MapSection from "../shared/MapSection/MapSection";
import {roomPageData} from "../../data";

const RoomPage = ({data}) => {
    return <>
        <RoomPageBanner campusName={data.campusName} roomName={data.roomName}/>

        <section className='section first'>
            <RoomDescriptionBlock data={data.descriptionBlockData}/>
        </section>

        <section className='section'>
            <LargeGallerySlider slides={data.largeGallerySlides}/>
        </section>

        <section className='section'>
            <CenteredSlider title={'Другие номера'} slides={data.centeredSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} slides={data.specialsSlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};

export default RoomPage;

