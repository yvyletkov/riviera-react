import React from "react";
import MapSection from "../../shared/MapSection/MapSection";
import s from "./PartnersPage.module.scss";
import PartnersForm from "../../additional/PartnersForm/PartnersForm";
import LogosSlider from "../../shared/sliders/LogosSlider/LogosSlider";
import {partnersPageData} from "../../../data";

const PartnersPage = () => {

    React.useEffect(() => document.title = `Партнерам - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return (<>

            <section style={{marginTop: window.matchMedia('(max-width: 1024px)').matches ? '100px' : '180px'}}
                     className='section'>
                <div className={s.container}>
                    <div className={s.topRow}>
                        <h4 className={s.title}>
                            <span>Партнерам</span>
                            <span>Вместе к успеху</span>
                        </h4>
                        <div className={s.textContent}>
                            <p>Riviera Sunrise Resort&SPA приглашает вас к сотрудничеству и предлагает долгосрочные
                                взаимовыгодные отношения. Наш отель зарекомендовал себя одним из лучших в России и
                                соответствует всем международным стандартам сервиса и качества. У нас гости могут
                                отдохнуть с комфортом на первой береговой линии, провести досуг в SPA центре отеля,
                                организовать праздник с в одном из наших мест проведения мероприятий, организовать
                                деловые конференции и многое другое. </p>

                        </div>
                    </div>

                    <PartnersForm/>

                </div>

            </section>

            <section className="section">
                <LogosSlider colored title={"С кем мы сотрудничали"} slidesToShow={4} icons={partnersPageData.partnersIcons}/>
            </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
}

export default PartnersPage;
