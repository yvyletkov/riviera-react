import React from "react";
import s from "./BlogPage.module.scss";
import ContactForm from "../../additional/ContactForm/ContactForm";
import MapSection from "../../shared/MapSection/MapSection";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import cx from 'classnames'
import busImg from "../../../img/school-bus.png";
import Button from "../../shared/Button/Button";
import {blogPostsData} from "../../../data";


const BlogPage = () => {

    React.useEffect(() => document.title = `Блог - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    let [currentTab, setCurrentTab] = React.useState(0);
    const [showDescr, setShowDescr] = React.useState(false);


    const tabs = ['Все статьи', 'О нас', 'Крым', 'Экскурсии', 'Пляж']

    return (<>
            <section className='section'>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.topRow}>
                            <h2 className={s.title}>
                                <span>Лучшие факты о нас и Крыме</span>
                                <span>Блог</span>
                            </h2>
                            <div className={s.textContent}>
                                <p>ул. Ленина 2, Алушта, Крым</p>
                                <p>GPS координаты: 44.667638, 34.411936</p>
                                <p>Воспользуйтесь услугой трансфер, заказать вы можете по телефону <b><a style={{whiteSpace: 'nowrap'}} href="tel:8 800 550 98 24" target={'_blank'}>8 800 550 98 24</a></b>
                                </p>
                                <div className={s.btn} onClick={() => setShowDescr(!showDescr)}><b>Как к нам добраться?</b>
                                </div>
                                <div className={showDescr ? s.description + ' ' + s.active : s.description}>
                                    <img src={busImg} alt="Автобус"/>
                                    <p><b>Общественным автотранспортом:</b></p>
                                    <ul>
                                        <li>Из автовокзала г. Симферополь ежедневный рейсы автобусов Симферополь — Алушта
                                        </li>
                                        <li>Из троллейбусного парка г. Симферополь ежедневное рейсы троллейбусов Симферополь
                                            -
                                            Алушта. № троллейбуса 51,52
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={s.tabsWrapper}>
                            {tabs.map((item, index) => {
                                const tabStyles = cx(s.tab, {[s.active]: index === currentTab})
                                // return <div key={index} onClick={() => setCurrentTab(index)}
                                return <div key={index}
                                            className={tabStyles}>{item}</div>
                            })}
                        </div>

                        {currentTab === 0 &&
                        <div className={s.cardsContainer}>
                            {blogPostsData.map( (item, index) => <div key={index} className={s.card}>
                                <div className={s.note}>{item.note}</div>
                                <img src={item.img} alt={item.title}/>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <Button link={item.link} text={'Подробнее'}/>
                            </div> )}
                        </div>
                        }

                    </div>
                </div>
            </section>


            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
}

export default BlogPage;