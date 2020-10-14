import React from "react";
import s from "./HomePage.module.scss";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import CenteredSlider from "../shared/CenteredSlider/CenteredSlider";
import GridSlider from "../shared/GridSlider/GridSlider";
import TextPlusImageBlock from "../shared/TextPlusImageBlock/TextPlusImageBlock";
import SpecialsSlider from "../shared/SpecialsSlider/SpecialsSlider";

const HomePage = () => {
    return <>
        <HomePageBanner/>
        <GridSlider/>
        <SpecialsSlider/>
        <TextPlusImageBlock/>
        <CenteredSlider/>
        </>

};

export default HomePage;

