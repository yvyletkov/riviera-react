import React from "react";
import InfrastructurePageBanner from "./InfrastructurePageBanner/InfrastructurePageBanner";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import MapSection from "../../shared/MapSection/MapSection";
import {infrastructurePagesData} from "../../../data";

const SpaPage = () => {

    React.useEffect(() => document.title = `SPA комплекс – the Shored SPA – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <>
        <InfrastructurePageBanner bannerData={infrastructurePagesData.spaPage.bannerData}/>

        <section className='section first'>
            <InfraMainSlider title={'Совершенный уровень отдыха'} slides={infrastructurePagesData.spaPage.slides}/>
        </section>

        <section className='section'>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <p>Мы заботимся о комфортном пребывании гостей в SPA-комплексе, для этого просим соблюдать <a style={{textDecoration: 'underline', color: '#000'}} target='_blank' href="/documents/pravila-spa.pdf" >несколько простых
                    правил</a>, которые сделают Ваш отдых и отдых других гостей максимально приятным.
                </p><br/>
                <p>
                    Контакты SPA-комплекса The Shore SPA:<br/>
                    <a target='_blank' href="mailto:spa.alushta@rivierasunrise.com">spa.alushta@rivierasunrise.com</a><br/>
                    <a href="tel:89789153591">8 978 915 35 91</a>
                </p>
            </div>

        </section>

        <section className='section'>
            <MapSection/>
        </section>
    </>
}

export default SpaPage;
