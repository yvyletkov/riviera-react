import React from "react";
import MapSection from "../../shared/MapSection/MapSection";
import s from "./AfishaPage.module.scss";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import {afishaPageData} from "../../../data";

const AfishaPage = () => {

    React.useEffect(() => document.title = `Партнерам - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return (<>

            <section style={{marginTop: window.matchMedia('(max-width: 1024px)').matches ? '100px' : '180px'}}
                     className='section'>
                <div className={s.container}>
                    <div className={s.topRow}>
                        <h4 className={s.title}>
                            <span>Мероприятия</span>
                            <span>Riviera Sunrise</span>
                        </h4>
                        <div className={s.textContent}>
                            <p>Анимационная команда Riviera Sunrise Resort & SPА предлагает не только полезно, но и
                                весело, познавательно провести Ваш отдых: ежедневная шоу программа, живая музыка и
                                вокал, настольные и активные игры, тренировки по плаванию и расслабляющая йога в
                                СПА-центре «The Shore SPA».</p>
                            <p>Планируйте свой отдых, приезжайте и получайте максимум приятных эмоций от времени,
                                проведенного вместе с нами!</p>

                        </div>
                    </div>

                </div>
            </section>

            <section className='section'>
                <CenteredSlider title='Актуальная афиша' slides={afishaPageData.slides}/>
            </section>

            <section className='section'>
                <CenteredSlider infinite desaturated title='Прошедшие мероприятия' slides={afishaPageData.pastSlides}/>
            </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    )
}

export default AfishaPage;