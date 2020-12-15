import React from "react";
import InfrastructurePageBanner from "../InfrastructurePageBanner/InfrastructurePageBanner";
import MapSection from "../../../shared/MapSection/MapSection";
import {infrastructurePagesData} from "../../../../data";
import s from "./BeachAndPools.module.scss";
import Headline from "../../../shared/Headline/Headline";
import poolImage1 from "../../../../img/infrastructure/beach-pools/2.jpg";
import poolImage2 from "../../../../img/infrastructure/beach-pools/3.jpg";
import poolImage3 from "../../../../img/infrastructure/beach-pools/4.jpg";
import bannerImg from "../../../../img/infrastructure/beach-pools/1.jpg";
import beachImg1 from "../../../../img/infrastructure/beach-pools/9.jpg";
import beachImg2 from "../../../../img/infrastructure/beach-pools/10.jpg";
import blueFlagImg from "../../../../img/infrastructure/beach-pools/blue-flag.png";
import ZoomSlider from "../../../shared/sliders/ZoomSlider/ZoomSlider";
import areaIcon from "../../../../img/infrastructure/beach-pools/icons/1.png";
import temperatureIcon from "../../../../img/infrastructure/beach-pools/icons/2.png";

const BeachAndPools = () => {

    React.useEffect( () => document.title = `Пляж и бассейны – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <>
        <InfrastructurePageBanner bannerData={infrastructurePagesData.beachAndPools.bannerData}
                                  style={{objectPosition:"0"}}/>
        <section className='section first'>
            <div className={s.poolsBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                <Headline subtitle={'Бассейн'} title={'С подгревом'}/>
                                <p>Уединенное расположение бассейна в окружении реликтовых деревьев является одним из
                                    достоинств отеля. Прямо в бассейне расположен коктейльный бар. Вокруг барной стойки
                                    стоят стулья, и посетители бассейна могут в любой момент насладиться напитками не
                                    выходя из воды.</p>
                            </div>
                        </div>
                            <div className={s.imageBlock}>
                                <div className={s.iconBlock}>
                                    <img className={s.icon} src={areaIcon} alt="Длина"/>
                                    <p className={s.iconDesc}>605 м&sup2;</p>
                                    <img className={s.icon} src={temperatureIcon} alt="Температура"/>
                                    <p className={s.iconDesc}>+28 &deg;С</p>
                                </div>
                                <img className={s.image} src={poolImage1} alt="Бассейн"/>
                            </div>

                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <div className={s.poolsBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                <Headline subtitle={'Бассейн'} title={'Детский'}/>
                                <p>Вы сможете наслаждаться отдыхом и загорать на солнце пока Ваши дети развлекаются
                                    рядом в отдельном бассейне для детей. Глубина детского бассейна 60 см.</p>
                            </div>
                        </div>
                        <div className={s.imageBlock}>
                            <div className={s.iconBlock}>
                                <img className={s.icon} src={areaIcon} alt="Длина"/>
                                <p className={s.iconDesc}>35 м&sup2;</p>
                                <img className={s.icon} src={temperatureIcon} alt="Температура"/>
                                <p className={s.iconDesc}>+28 &deg;С</p>
                            </div>
                            <img className={s.image} src={poolImage2} alt="Бассейн"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <div className={s.poolsBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                <Headline subtitle={'Бассейн'} title={'Возле моря'}/>
                                <p>Получить настоящее удовольствие от отдыха можно поплавав в бассейне с гидромассажными
                                    установками, который окружен парком с породами редких деревьев.</p>
                            </div>
                        </div>
                        <div className={s.imageBlock}>
                            <div className={s.iconBlock}>
                                <img className={s.icon} src={areaIcon} alt="Длина"/>
                                <p className={s.iconDesc}>754 м&sup2;</p>
                                <img className={s.icon} src={temperatureIcon} alt="Температура"/>
                                <p className={s.iconDesc}>+28 &deg;С</p>
                            </div>
                            <img className={s.image} src={poolImage3} alt="Бассейн"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <ZoomSlider subtitle={'Бассейн'} title={'Крытый'}
                            slides={infrastructurePagesData.beachAndPools.zoomSlides} text={'Даже в прохладные дни Вы можете наслаждаться купанием в бассейне и отдыхом на шезлонге. В SPA комплексе нашего отеля расположен крытый бассейн где можно провести свой досуг с комфортом.'}/>
        </section>

        <section className='section'>
            <div className={s.beachBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <img className={s.rightImg} src={beachImg2} alt=""/>
                        <img className={s.menuPriceImg} src={blueFlagImg} alt="Стоимость меню"/>

                        <div className={s.textContent}>
                            <Headline subtitle={'Пляж'} title={'Лучший пляж в Алуште'}/>
                            <p>Пляж отеля Riviera Sunrise - ЛУЧШИЙ ПЛЯЖ В АЛУШТЕ высшей категории, обладающий синим
                                флагом. Протяжённость пляжа более 100 метров. На пляже есть все необходимое для отдыха:
                                комфортабельные шезлонги, зонтики, душевые, раздевалки, пункт медицинской помощи.
                                Соседство пляжа с бассейнами является неоспоримым преимуществом отеля.</p>
                            <img className={s.leftImg} src={beachImg1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <MapSection/>
    </>
}

export default BeachAndPools;
