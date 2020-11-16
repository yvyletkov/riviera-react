import React from 'react';
import s from './IconsBlock.module.scss';
import Headline from "../../../../shared/Headline/Headline";
import iconCommunications from "../../../../../img/mice/conference/icons/5.png";
import iconStar from "../../../../../img/mice/conference/icons/6.png";
import iconHumanStar from "../../../../../img/mice/conference/icons/7.png";
import iconTV from "../../../../../img/mice/conference/icons/8.png";
import iconShoes from "../../../../../img/mice/conference/icons/9.png";

const IconsBlock = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Headline title={"Организуем"} subtitle={"Какие мероприятия мы"}/>
                <div className={s.iconsBlock}>
                    <div className={s.icons}>
                        <div className={s.icon}>
                            <img src={iconCommunications} alt="9 залов"/>
                            <p>Съезд<br/>
                                руководителей</p>
                        </div>
                        <div className={s.icon}>
                            <img src={iconStar} alt="Оборудование"/>
                            <p>Муждународная<br/>
                                премия</p>
                        </div>
                    </div>
                    <div className={s.icons}>
                        <div className={s.icon}>
                            <img src={iconTV} alt="Экскурсии"/>
                            <p>Конференции<br/>
                                для компаний</p>
                        </div>
                        <div className={s.icon}>
                            <img src={iconShoes} alt="Проживание в отеле"/>
                            <p>Показ<br/>
                                мод</p>
                        </div>
                        <div className={s.icon}>
                            <img src={iconHumanStar} alt="Проживание в отеле"/>
                            <p>Экспертный<br/>
                                форум</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  IconsBlock;