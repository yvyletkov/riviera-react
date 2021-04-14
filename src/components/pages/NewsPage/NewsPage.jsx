import React from "react";
import s from "./NewsPage.module.scss";
import MapSection from "../../shared/MapSection/MapSection";
import busImg from "../../../img/school-bus.png";
import {request, strapiUrl} from "../../../api";
import NewsItemPreviewCard from "./NewsItemPreviewCard";
import img from "../../../img/home-page/textimg.jpg";
import preloaderImg from "../../../img/preloader.svg";
import Preloader from "../../shared/Preloader/Preloader";


const NewsPage = () => {

    React.useEffect(() => document.title = `Новости - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    let [currentTab, setCurrentTab] = React.useState(0);
    const [showDescr, setShowDescr] = React.useState(false);
    const [newsData, setNewsData] = React.useState([])


    React.useEffect((() => {
        request(null, "GET", `${strapiUrl}/news-items/`).then(async res => {
            if (res.status === 200) {
                const data = await res.json()
                setNewsData(data.sort((a, b) => a.pos - b.pos))
            }
        })
    }), [])


    const tabs = ['Все новости', 'О нас', 'Крым', 'Экскурсии', 'Пляж']

    return (
        newsData.length > 0 ? <>
                <section className='section'>
                    <div className={s.wrapper}>
                        <div className={s.container}>
                            <div className={s.topRow}>
                                <h2 className={s.title}>
                                    <span>Riviera Sunrise Resort & SPA</span>
                                    <span>Новости</span>
                                </h2>
                                <div className={s.textContent}>
                                    <p>ул. Ленина 2, Алушта, Крым</p>
                                <p>GPS координаты: 44.667638, 34.411936</p>
                                <p>Воспользуйтесь услугой трансфер, заказать вы можете по телефону <b><a
                                    style={{whiteSpace: 'nowrap'}} href="tel:8 800 550 98 24" target={'_blank'}>8 800
                                    550 98 24</a></b>
                                </p>
                                <div className={s.btn} onClick={() => setShowDescr(!showDescr)}><b>Как к нам
                                    добраться?</b>
                                </div>
                                <div className={showDescr ? s.description + ' ' + s.active : s.description}>
                                    <img src={busImg} alt="Автобус"/>
                                    <p><b>Общественным автотранспортом:</b></p>
                                    <ul>
                                        <li>Из автовокзала г. Симферополь ежедневный рейсы автобусов Симферополь —
                                            Алушта
                                        </li>
                                        <li>Из троллейбусного парка г. Симферополь ежедневное рейсы троллейбусов
                                            Симферополь
                                            -
                                            Алушта. № троллейбуса 51,52
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*<div className={s.tabsWrapper}>*/}
                        {/*    {tabs.map((item, index) => {*/}
                        {/*        const tabStyles = cx(s.tab, {[s.active]: index === currentTab})*/}
                        {/*        // return <div key={index} onClick={() => setCurrentTab(index)}*/}
                        {/*        return <div key={index}*/}
                        {/*                    className={tabStyles}>{item}</div>*/}
                        {/*    })}*/}
                        {/*</div>*/}


                        {(currentTab === 0 && newsData.length > 0) &&
                        <div className={s.cardsContainer}>
                            {newsData.map((item, index) =>
                                <NewsItemPreviewCard title={item.title}
                                                     content={item.content_1}
                                                     previewImg={item.preview_img.url}
                                                     id={item.id}
                                                     key={index}/>)}
                        </div>}

                        </div>
                    </div>
                </section>


                <section className='section last'>
                    <MapSection/>
                </section>
            </>
            :
            <Preloader />
    );
}

export default NewsPage;
