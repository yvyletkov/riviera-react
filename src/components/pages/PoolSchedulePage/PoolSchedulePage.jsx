import React from "react";
import s from "./PoolSchedulePage.module.scss";
import img from "../../../img/schedule-pool.jpg";
import Headline from "../../shared/Headline/Headline";
import MapSection from "../../shared/MapSection/MapSection";


const PoolSchedulePage = () => {

    return (
        <>
            <div className={s.wrapper}
                 style={{
                     background: window.matchMedia("(max-width: 620px)").matches ? `center no-repeat url("${img}")` : `center no-repeat url("${img}")`,
                     backgroundSize: "cover"
                 }}>
                <div className={s.container}>
                    <div className={s.headings}>
                        <h2>Тренировки</h2>
                        <h1>
                            <span>По плаванию</span>
                            <span>Для детей</span>
                            <span>и взрослых</span>
                        </h1>
                    </div>

                </div>
                <div className={s.bannerImgTop}/>

            </div>

            <section className="section first">
                <div className={s.wrapperContent}>
                    <div className={s.container}>
                        <Headline title="Тренировок" subtitle="Расписание"/>
                        <div className={s.content}>
                            <div>
                                <p><b>Расписание:</b></p>
                                <p>вторник и четверг,</p>
                                <p>с 15 до 16 часов - дети 6-8 лет,</p>
                                <p>с 16 до 17 - дети 9-11 лет</p>
                            </div>
                            <div className={s.text}>
                                <p><b>Стоимость:</b></p>
                                <p>Индивидуальное занятие – <b>1500 рублей</b></p>
                                <p>Разовое занятие в группе – <b>600 рублей</b></p>
                                <p>Разовое занятие по синхронному плаванью в группе – <b>700 рублей</b></p>
                                <br/>
                                <p>Абонемент 4 занятия – <b>2200 рублей</b></p>
                                <p>Абонемент 8 занятий – <b>3200 рублей</b></p>
                                <p>Абонемент 12 занятий – <b>4500 рублей</b></p>
                                <br/>
                                <p>Абонемент 4 занятия по синхронному плаванью - <b>2700 рублей</b></p>
                                <p>Абонемент 8 занятий по синхронному плаванью – <b>3500 рублей</b></p>
                                <p>Абонемент 12 занятий по синхронному плаванью – <b>4800 рублей</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section last">
                <MapSection/>
            </section>
        </>
    )
};

export default PoolSchedulePage;
