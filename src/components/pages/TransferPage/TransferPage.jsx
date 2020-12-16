import React from "react";
import s from "./TransferPage.module.scss";
import busIcon from "../../../img/school-bus.png";
import MapSection from "../../shared/MapSection/MapSection";
import {infrastructurePagesData} from "../../../data";
import SimpleSlider from "../../shared/sliders/SimpleSlider/SimpleSlider";

const TransferPage= ({title, description, hiddenDescription}) => {
    const [showDescr, setShowDescr] = React.useState(false);

    return (<>
            <section className='section'>
                <div className={s.contentWrapper}>
                    <div className={s.container}>

                        <div className={s.topRow}>
                            <h1 className={s.title}>
                                <span>Трансфер</span>
                                <span>Riviera Sunrise</span>
                            </h1>
                            <div className={s.textContent}>
                                <p>
                                    ул. Ленина 2, Алушта, Крым <br/>
                                    GPS координаты: 44.667638, 34.411936<br />
                                    Воспользуйтесь услугой трансфер, заказать вы можете по телефону <b>8 800 550 98 24</b>
                                </p>
                                <div className={s.btn} onClick={() => setShowDescr(!showDescr)}><b>Как к нам добраться?</b>
                                </div>
                                <div className={showDescr ? s.description + ' ' + s.active : s.description}>
                                    <img src={busIcon} alt="Автобус"/>
                                    <p><b>Общественным автотранспортом:</b><br />
                                        <br />
                                        -   Из автовокзала г. Симферополь ежедневный рейсы автобусов Симферополь — Алушта <br />
                                        -   Из троллейбусного парка г. Симферополь ежедневное рейсы троллейбусов Симферополь - Алушта. № троллейбуса 51,52
                                    </p>
                                    <p className={s.closeBtn} onClick={ () => setShowDescr(!showDescr)}>Скрыть</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section">
                <SimpleSlider
                    slides={infrastructurePagesData.restaurants.restaurantsContent[0][1]}
                    styleImg={window.matchMedia('(min-width:480px)').matches ?
                        {height:'476px'} :
                        {height:'240px'}}
                />
            </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
};

export default TransferPage;
