import React from "react";
import InfrastructurePageBanner from "./InfrastructurePageBanner/InfrastructurePageBanner";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import MapSection from "../../shared/MapSection/MapSection";
import {infrastructurePagesData} from "../../../data";
import MetaTags from 'react-meta-tags';

const SpaPage = () => {

    React.useEffect( () => document.title = `SPA комплекс – the Shored SPA – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <>
        <MetaTags>
            <meta name="keywords" content="спа у моря, лучший спа, бассейн, хамам в спа, спа отель, спа крым, спа отель крым" />
        </MetaTags>
        <InfrastructurePageBanner bannerData={infrastructurePagesData.spaPage.bannerData}/>

        <section className='section first'>
            <InfraMainSlider title={'Совершенный уровень отдыха'} slides={infrastructurePagesData.spaPage.slides}/>
        </section>

        <section className='section'>
            <MapSection/>
        </section>
    </>
}

export default SpaPage;
