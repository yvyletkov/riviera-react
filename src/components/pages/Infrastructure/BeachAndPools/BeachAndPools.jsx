import React from "react";
import InfrastructurePageBanner from "../InfrastructurePageBanner/InfrastructurePageBanner";
import InfraMainSlider from "../../../shared/sliders/InfraMainSlider/InfraMainSlider";
import MapSection from "../../../shared/MapSection/MapSection";
import {infrastructurePagesData} from "../../../../data";

const BeachAndPools = () => {
    return <>
        <InfrastructurePageBanner bannerData={infrastructurePagesData.spaPage.bannerData}/>
        <section className='section first'>
            <InfraMainSlider title={'Совершенный уровень отдыха'} slides={infrastructurePagesData.spaPage.slides}/>
        </section>
        <MapSection/>
    </>
}

export default BeachAndPools;
