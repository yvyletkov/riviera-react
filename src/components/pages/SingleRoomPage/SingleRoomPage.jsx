import React from "react";
import RoomPageBanner from "./RoomPageBanner/RoomPageBanner";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import RoomDescriptionBlock from "./RoomDescriptionBlock/RoomDescriptionBlock";
import LargeGallerySlider from "../../shared/sliders/LargeGallerySlider/LargeGallerySlider";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
import MapSection from "../../shared/MapSection/MapSection";

const SingleRoomPage = ({data}) => {
    return <>
        <RoomPageBanner campusName={data.campusName} roomName={data.roomName} roomNameFontSize={data.roomNameFontSize}/>

        <section className='section first'>
            <RoomDescriptionBlock data={data.descriptionBlockData}/>
        </section>

        <section className='section'>
            <LargeGallerySlider slideTitle={data.campusName + ' ' + data.roomName} slides={data.largeGallerySlides}/>
        </section>

        <section className='section'>
            <CenteredSlider title={'Другие номера'} slides={data.centeredSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} btnLink={'/promotions'} slides={data.specialsSlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};

export default SingleRoomPage;

