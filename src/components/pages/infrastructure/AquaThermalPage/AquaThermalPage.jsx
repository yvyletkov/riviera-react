import React from "react";
import InfrastructurePageBanner from "../InfrastructurePageBanner/InfrastructurePageBanner";
import MapSection from "../../../shared/MapSection/MapSection";
import {infrastructurePagesData} from "../../../../data";
import s from "./AquaThermalPage.module.scss";
import firstBlockImg from "../../../../img/infrastructure/aquaThermal/1.jpg";

import Headline from "../../../shared/Headline/Headline";
import SpecialsDynamicSlider from "../../../shared/sliders/SpecialsDynamicSlider/SpecialsDynamicSlider";

const AquaThermalPage = () => {
    return <>
        <InfrastructurePageBanner bannerData={infrastructurePagesData.aquaThermalPage.bannerData}/>

        <section className='section first'>
            <div className={s.infoBlock}>
                <div className={s.wrapper}>
                    <div className={s.grid}>

                        <div className={s.imageBlock}>
                            <img src={firstBlockImg} alt="Riviera Sunrise"/>
                        </div>

                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                <Headline subtitle={'Совершенный уровень отдыха'} title={'The Shore SPA'}/>

                                <p>
                                    SPA-услуги, входящие в стоимость проживания:
                                </p>
                                <ul>
                                    <li>Открытые бассейны</li>
                                    <li>Крытый бассейн</li>
                                    <li>Фитнес-зал</li>
                                    <li>Финская сауна</li>
                                    <li>Римская парная</li>
                                    <li>Соляная пещера</li>
                                    <li>Русская парная</li>
                                    <li>Хаммам</li>
                                    <li>Зона тепллго сна</li>
                                </ul>
                                <p>
                                    <b>Время работы SPA-центра: с 9:00 до 21:00<br/>
                                    Телефон: <a href="tel:+7(978)915-35-91">+7(978)915-35-91</a></b>
                                </p>


                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <SpecialsDynamicSlider slides={infrastructurePagesData.aquaThermalPage.slides}/>
        </section>

        <section className='section'>
            <MapSection/>
        </section>
    </>
}

export default AquaThermalPage;