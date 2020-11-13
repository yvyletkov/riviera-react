import React from "react";
import s from "./MicePageBanner.module.scss";
import iconHalls from "../../../../../img/mice/conference/icons-mice/1.png"
import iconЕquipment from "../../../../../img/mice/conference/icons-mice/2.png"
import iconExcursions from "../../../../../img/mice/conference/icons-mice/3.png"
import iconResidence from "../../../../../img/mice/conference/icons-mice/4.png"


const MicePageBanner = () => {
    return (

        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.background}/>
                <div className={s.headings}>
                    <h1>Идеальная организация</h1>
                    <h2>
                        <span>Вашей</span>
                        <span>Конференции</span>
                        <span>В крыму</span>
                    </h2>
                </div>

                    <div className={s.icons}>
                        <div className={s.icon}>
                            <img src={iconHalls} alt="Вместимость"/>
                            <p>9 оборудованных<br/>
                                залов</p>
                        </div>
                        <div className={s.icon}>
                            <img src={iconЕquipment} alt="Фотозоны"/>
                            <p>Оборудование для<br/>
                                выступлений</p>
                        </div>
                        <div className={s.icon}>
                            <img src={iconExcursions} alt="Оформление"/>
                            <p>Экскурсии и<br/>
                                тимбилдинги</p>
                        </div>
                        <div className={s.icon}>
                            <img src={iconResidence} alt="Оформление"/>
                            <p>Предложение на<br/>
                                проживание в отеле</p>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default MicePageBanner;