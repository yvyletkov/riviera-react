import React from "react";
import s from "./TextPlusImageBlock.module.scss"
import Headline from "../Headline/Headline";
import img from "./../../../img/home-page/textimg.png"
import Button from "../Button/Button";
import Accordeon from "../Accordeon/Accordeon";
import ContactForm from "../../additional/ContactForm/ContactForm";

const TextPlusImageBlock = ({subtitle = 'Какой-то', title = 'заголовок', withForm = false}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.grid}>

                <div className={s.imageBlock}>
                    <img src={img} alt="Riviera Sunrise"/>
                    {withForm && <ContactForm submitBtnText={'Заказать звонок'} formName={`Форма "Заказать звонок"`} withPhone
                                                          swalText={'мы перезвоним Вам в самое ближайшее время!'}/>}
                </div>

                <div className={s.textBlock}>
                    <div className={s.textContent}>
                        <Headline subtitle={subtitle} title={title}/>

                        <Accordeon>
                            <p>
                                Riviera Sunrise Resort & SPA – отель в Крыму на берегу Чёрного моря в самом центре
                                Алушты с
                                собственным пляжем, открытыми подогреваемыми бассейнами, живописным старинным реликтовым
                                парком,
                                самым большим в Крыму SPA-центром, современным конференц-центром международного уровня и
                                вместительным подземным паркингом.
                            </p>
                            <p>
                                В отеле два здания — современный корпус Модерн и исторический корпус Классик.<br/>
                                Концепцию и дизайн корпуса Модерн разработал один из самых известных и культовых
                                шведских
                                дизайнеров, Кристиан Люндваль, владелец архитектурно-дизайнерского бюро Lundwall
                                Architects AB и
                                автор проектов интерьеров сотни отелей по всему миру.
                            </p>
                        </Accordeon>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default TextPlusImageBlock;