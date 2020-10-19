import React from "react";
// import s from "./HomePage.module.scss";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import CenteredSlider from "../shared/CenteredSlider/CenteredSlider";
import GridSlider from "../shared/GridSlider/GridSlider";
import TextPlusImageBlock from "../shared/TextPlusImageBlock/TextPlusImageBlock";
import SpecialsSlider from "../shared/SpecialsSlider/SpecialsSlider";
import GallerySlider from "../shared/GallerySlider/GallerySlider";
import MapSection from "../shared/MapSection/MapSection";

const HomePage = () => {
    return <>
        <HomePageBanner/>
        <GridSlider/>
        <SpecialsSlider/>
        <CenteredSlider/>
        <TextPlusImageBlock/>
        <GallerySlider/>
        <MapSection/>
        </>

};

export default HomePage;

