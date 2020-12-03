import React from "react";
import InfrastructurePageBanner from "./InfrastructurePageBanner/InfrastructurePageBanner";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import MapSection from "../../shared/MapSection/MapSection";

const GymPage = ({bannerData, slides}) => {

    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    return <>
        <InfrastructurePageBanner bannerData={bannerData}/>
        <InfraMainSlider title={'Совершенный уровень отдыха'} slides={slides} setCurrentSlideIndex={setCurrentSlideIndex}/>
        <MapSection/>
    </>
}

export default JymPage;