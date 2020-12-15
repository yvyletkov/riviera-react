import React from "react";
import RoomPageBanner from "./RoomPageBanner/RoomPageBanner";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import RoomDescriptionBlock from "./RoomDescriptionBlock/RoomDescriptionBlock";
import LargeGallerySlider from "../../shared/sliders/LargeGallerySlider/LargeGallerySlider";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
import MapSection from "../../shared/MapSection/MapSection";

const SingleRoomPage = ({data}) => {

    React.useEffect( () => document.title = `${data.campusName} ${data.roomName} – номера и цены – отель Riviera Sunrise esort & SPA – Алушта, Крым`, [])

    return <>
        <RoomPageBanner bannerImg={data.bannerImg} campusName={data.campusName} roomName={data.roomName} roomNameFontSize={data.roomNameFontSize}/>

        <section className='section first'>
            <RoomDescriptionBlock data={data.descriptionBlockData} img={data.topBlockImg}/>
        </section>

        <section className='section'>
            <LargeGallerySlider blockName={'Фотографии номера'} slideTitle={data.campusName + ' ' + data.roomName} slides={data.largeGallerySlides}/>
        </section>

        <section className='section'>
            <CenteredSlider title={'Другие номера'} type={"room"} slides={data.centeredSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} btnLink={'/offers'} slides={data.specialsSlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};

export default SingleRoomPage;

