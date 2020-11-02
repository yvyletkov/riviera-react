import React from "react";
import s from "./RoomDescriptionBlock.module.scss";
import Headline from "../../shared/Headline/Headline";
import CirqleTip from "../../shared/CirqleTip/CirqleTip";
import Accordeon from "../../shared/Accordeon/Accordeon";
import iconFloor from "../../../img/room-page/floor.png";
import iconCapacity from "../../../img/room-page/guys.png";
import iconMountains from "../../../img/room-page/mountains.png";
import iconShower from "../../../img/room-page/shower.png";
import iconSpace from "../../../img/room-page/ploshchad.png";
import iconConnected from "../../../img/room-page/connected.png";
import arrowIcon from "../../../img/arrow-accordeon.png";
import {NavLink} from "react-router-dom";


const RoomDescriptionBlock = () => {

    let [accordeonStatus, setAccordeonStatus] = React.useState(false);
    let [firstAccordeonStatus, setFirstAccordeonStatus] = React.useState(false);
    let [secondAccordeonStatus, setSecondAccordeonStatus] = React.useState(false);

    const cirqleTipHandler = () => setAccordeonStatus(!accordeonStatus);

    return (
        <div className={s.container}>
            <Headline subtitle={'Описание'} title={'номера'}/>
            <div className={s.link}><NavLink to={''}>Посмотреть номер с видом на море →</NavLink> </div>
            <CirqleTip onClick={cirqleTipHandler} accordeonStatus={accordeonStatus}/>

            <div className={s.grid}>

                <div className={s.listPart}>
                    <div className={s.leftBlock}>
                        <div className={s.firstCol}>
                            <p className={s.colTitle} onClick={ () => setFirstAccordeonStatus(!firstAccordeonStatus)}>
                                <img src={arrowIcon} className={ firstAccordeonStatus ? s.arrow + ' ' + s.rotated : s.arrow } alt=""/>
                                <b>В стоимость включено<span>:</span></b>
                            </p>
                            <Accordeon status={firstAccordeonStatus} withBtn={false} zeroHeight={true}>
                                <ul>
                                    <li>Завтрак «Шведский стол»</li>
                                    <li>Фитнес-зал</li>
                                    <li>Джакузи в SPA</li>
                                    <li>Детский бассейн</li>
                                    <li>Крытый бассейн с противотоками</li>
                                    <li>Финская сауна</li>
                                    <li>Римская парная</li>
                                    <li>Соляная комната</li>
                                    <li>Уборка в номере</li>
                                    <li>Гладильная (на этаже)</li>
                                    <li>Парковка</li>
                                </ul>
                            </Accordeon>

                        </div>
                        <div className={s.secondCol}>
                            <p className={s.colTitle} onClick={ () => setSecondAccordeonStatus(!secondAccordeonStatus)}>
                                <img src={arrowIcon} className={ secondAccordeonStatus ? s.arrow + ' ' + s.rotated : s.arrow } alt=""/>
                                <b>Оснащение номера<span>:</span></b>
                            </p>
                            <Accordeon status={secondAccordeonStatus} withBtn={false} zeroHeight={true}>
                                <ul>
                                    <li>Wi-Fi, Телефон</li>
                                    <li>Телевизор</li>
                                    <li>Кондиционер</li>
                                    <li>Сейф</li>
                                    <li>Фен, Полотенца, Гардероб</li>
                                    <li>Халат (вафельный) + тапочки</li>
                                    <li>Набор принадлежностей для ванны</li>
                                    <li>Чайник, Чай, кофе, сахар</li>
                                    <li>Стаканы, бокалы, чашки, ложки, штопор</li>
                                </ul>
                            </Accordeon>

                        </div>
                    </div>
                    <div className={s.rightBlock}></div>
                </div>

                <div className={s.iconsPart}>
                    <div className={s.icon}>
                        <img src={iconFloor} alt=""/>
                        <p>Номера<br/>с 4 по 10 этаж</p>
                    </div>
                    <div className={s.icon}>
                        <img src={iconCapacity} alt=""/>
                        <p>2 человека,<br/>2 доп. места*</p>
                    </div>
                    <div className={s.icon}>
                        <img src={iconMountains} alt=""/>
                        <p>Вид из номера<br/>на город и горы</p>
                    </div>
                    <div className={s.icon}>
                        <img src={iconSpace} alt=""/>
                        <p>Площадь<br/>25 м²</p>
                    </div>
                    <div className={s.icon}>
                        <img src={iconShower} alt=""/>
                        <p>Ванная комната:<br/>Душ</p>
                    </div>
                    <div className={s.icon}>
                        <img src={iconConnected} alt=""/>
                        <p>Есть номера<br/>connected**</p>
                    </div>
                </div>

                <div className={s.descriptionPart}>
                    <Accordeon withBtn={false} zeroHeight={true} status={accordeonStatus}>
                        Однокомнатный номер представлен спальней комнатой с одной двуспальной или двумя раздельными
                        кроватями, гостевой зоной с мягким креслом и журнальным столиком, а также комфортной ванной
                        комнатой.<br/><br/>
                        Все номера данной категории имеют выход на балкон <b>с видом на величественные Крымские горы и
                        город.</b> Для Вашего комфорта балкон оснащен столом и стульями, наслаждайтесь кофе на свежем
                        воздухе и невероятно красивыми видами!
                    </Accordeon>
                </div>

            </div>
        </div>
    )
}

export default RoomDescriptionBlock