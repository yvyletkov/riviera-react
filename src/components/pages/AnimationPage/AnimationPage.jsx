import React from "react";
import s from "./AnimationPage.module.scss";
import MapSection from "../../shared/MapSection/MapSection";
import arrow from "../../../img/arrow-accordeon.png";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import cx from 'classnames'
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import {afishaPageData, animationPageData} from "../../../data";
import Headline from "../../shared/Headline/Headline";
import img from "../../../img/loveDay/4.jpg";


const AnimationPage = () => {

    React.useEffect(() => document.title = `Вопросы и ответы - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    let [currentTab, setCurrentTab] = React.useState(0);

    const tabs = ['Афиша', 'Детская анимация', 'Взрослая анимация']

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
                                    GPS координаты: 44.667638, 34.411936<br/>
                                    Воспользуйтесь услугой трансфер, заказать вы можете по телефону <b>8 800 550 98
                                    24</b>
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
            <>
                <section className='section'>
                    <CenteredSlider title='Активности команды аниматоров' infinite slides={animationPageData.kidsAnimationSlides}/>
                </section>

                <section className='section'>
                    <div className={s.textBlockWrapper}>
                        <div className={s.container}>
                            <div className={s.background}/>
                            <div className={s.textContent}>
                                <Headline subtitle={'Анимация'} title={'Яркий отдых'}/>

                                <p>
                                    Отдых с детьми в Алуште в отеле Riviera Sunrise – это комфортные и безопасные
                                    условия для незабываемого семейного отдыха с детьми в Крыму. Бесплатное проживание в
                                    отеле для деток до 5 лет, близость моря и наличие собственного пляжа, детские и
                                    взрослые бассейны, качественный сервис и интересные развлекательные программы!
                                </p>

                                <p>
                                    Выбирайте лучший отель Алушты для отдыха с детьми – Riviera Sunrise.
                                    Профессиональная команда аниматоров, которые с утра и до вечера обеспечат
                                    занимательный досуг для Вас и Ваших детей. Мы делаем каждый день максимально ярким и
                                    незабываемым, а разнообразная программа анимации, меняющаяся каждый день, вовлечет в
                                    активный отдых всех без исключения. С нами Вам не придется скучать!
                                </p>

                                <p>
                                    Отпуск с детьми в нашем отеле – это весело! Вы всегда будете в центре внимания
                                    анимационной команды, которая позаботится о незабываемых, ярких впечатлениях от
                                    отдыха.
                                </p>

                            </div>
                            <img src={img} alt={"Лучший праздник"}/>

                        </div>
                    </div>
                </section>
            </>}

            {currentTab === 2 &&
            <>
                <section className='section'>
                    <CenteredSlider title='Развлекательная программа' infinite slides={animationPageData.adultAnimationSlides}/>
                </section>
                <section className='section'>
                    <div className={s.textBlockWrapper}>
                        <div className={s.container}>
                            <div className={s.background}/>
                            <div className={s.textContent}>
                                <Headline subtitle={'Анимация'} title={'На любой вкус'}/>

                                <p>
                                    Riviera Sunrise – современный отель с профессиональной командой аниматоров, которые
                                    с утра и до вечера обеспечат занимательный досуг для Вас и Ваших детей.
                                </p>

                                <p>
                                    Мы делаем каждый день максимально ярким и незабываемым, а разнообразная программа
                                    анимации, меняющаяся каждый день, вовлечет в активный отдых всех без исключения. С
                                    нами Вам не придется скучать!
                                </p>
                                <p>
                                    Аниматоры уделяют время не только маленьким гостям отеля, но и взрослым. Веселье
                                    начинается с самого утра: конкурсы, спортивные игры, мастер-классы, спектакли. А
                                    вечером проходят зажигательные дискотеки, концерты, шоу.

                                </p>

                            </div>
                            <img src={img} alt={"Лучший праздник"}/>

                        </div>
                    </div>
                </section>
            </>}


            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
}

export default AnimationPage;
