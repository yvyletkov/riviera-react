import React from "react";
import s from "./TextPlusImageBlock.module.scss"
import Headline from "../Headline/Headline";
import img from "./../../../img/home-page/textimg.png"
import Button from "../Button/Button";

const TextPlusImageBlock = ({withForm = true}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.grid}>

                <div className={s.imageBlock}>
                    <img src={img} alt="Riviera Sunrise"/>
                    <form>
                        <input type="text" placeholder={'Имя'} name={'name'}/>
                        <input type="number" placeholder={'Телефон'} name={'phone'}/>
                        <Button text={'Заказать звонок'}/>
                    </form>
                </div>

                <div className={s.textBlock}>
                    <div className={s.textContent}>
                        <Headline subtitle={'Идеальный отдых в Крыму'} title={'круглый год'}/>
                        <p>Riviera Sunrise Resort & SPA – отель в Крыму на берегу Чёрного моря в самом центре Алушты с
                            собственным пляжем, открытыми подогреваемыми бассейнами, живописным старинным реликтовым парком,
                            самым большим в Крыму SPA-центром, современным конференц-центром международного уровня и
                            вместительным подземным паркингом.<br/>
                            В отеле два здания — современный корпус Модерн и исторический корпус Классик.<br/>
                            Концепцию и дизайн корпуса Модерн разработал один из самых известных и культовых шведских
                            дизайнеров, Кристиан Люндваль, владелец архитектурно-дизайнерского бюро Lundwall Architects AB и
                            автор проектов интерьеров сотни отелей по всему миру.</p>
                        {/*<div className={s.button}>*/}
                        {/*    <a href="http://evolutionsport.ru/booking/?promo-offer=mir" target="_blank">Забронировать номер*/}
                        {/*        с кэшбэком</a>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TextPlusImageBlock;