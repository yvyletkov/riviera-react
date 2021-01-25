import React from "react";
import s from "./AnimationPage.module.scss";
import MapSection from "../../shared/MapSection/MapSection";
import arrow from "../../../img/arrow-accordeon.png";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import cx from 'classnames'
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import {afishaPageData} from "../../../data";


const AnimationPage = () => {

    React.useEffect(() => document.title = `Вопросы и ответы - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    let [currentTab, setCurrentTab] = React.useState(0);

    const tabs = ['Афиша', 'Детская анимация', 'Транспорт']

    return (<>
            <section className='section'>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.topRow}>
                            <h4 className={s.title}>
                                <span>Riviera Sunrise</span>
                                <span>Анимация</span>
                            </h4>
                            <div className={s.textContent}>
                                <p>
                                    ул. Ленина 2, Алушта, Крым <br/>
                                    GPS координаты: 44.667638, 34.411936<br />
                                    Воспользуйтесь услугой трансфер, заказать вы можете по телефону <b>8 800 550 98 24</b>
                                </p>
                            </div>
                        </div>

                        <div className={s.tabsWrapper}>
                            {tabs.map((item, index) => {
                                const tabStyles = cx(s.tab, {[s.active]: index === currentTab})
                                return <div key={index} onClick={() => setCurrentTab(index)}
                                            className={tabStyles}>{item}</div>
                            })}
                        </div>

                    </div>
                </div>
            </section>

            {currentTab === 0 &&
            <>
                <section className='section'>
                    <CenteredSlider title='Актуальная афиша' slides={afishaPageData.slides}/>
                </section>

                <section className='section'>
                    <CenteredSlider desaturated title='Прошедшие мероприятия' slides={afishaPageData.pastSlides}/>
                </section>
            </>}

            {currentTab === 1 &&
            <div className={s.questionsWrapper}>

            </div>}

            {currentTab === 2 &&
            <div className={s.questionsWrapper}>

            </div>}


            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
}

export default AnimationPage;
