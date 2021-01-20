import React from "react";
import s from "./TransferPage.module.scss";
import busIcon from "../../../img/school-bus.png";
import MapSection from "../../shared/MapSection/MapSection";
import TransferSlider from "../../shared/sliders/TransferSlider/TransferSlider";
import {transferPageData} from "../../../data";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";
import Button from "../../shared/Button/Button";

const TransferPage= () => {

    React.useEffect(() => document.title = `Трансфер - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    const [showDescr, setShowDescr] = React.useState(false);
    const [popupOpen, setPopupOpen] = React.useState(false);

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
                <TransferSlider sliders={transferPageData}/>
                <Button text="Заказать услугу"
                        onClick={ () => setPopupOpen(true)}
                        style={{margin: '30px auto 0', maxWidth:'300px'}}/>
                <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                  popupTitleText={'Для этого, пожалуйста, оставьте свои контактные данные️'}
                                  submitBtnText='Заказать услугу'
                                  formName={`Форма со страницы трансфера`}
                                  swalText={'мы свяжемся с Вами в ближайшее время'}
                                  withPhone/>
            </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
};

export default TransferPage;
