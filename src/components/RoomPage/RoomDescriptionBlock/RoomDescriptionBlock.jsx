import React from "react";
import s from "./RoomDescriptionBlock.module.scss";
import Headline from "../../shared/Headline/Headline";
import CirqleTip from "../../shared/CirqleTip/CirqleTip";
import Accordeon from "../../shared/Accordeon/Accordeon";
import arrowIcon from "../../../img/arrow-accordeon.png";
import {NavLink} from "react-router-dom";


const RoomDescriptionBlock = ({data}) => {

    let [accordeonStatus, setAccordeonStatus] = React.useState(false);
    let [includedInPriceAccordeonStatus, setIncludedInPriceAccordeonStatus] = React.useState(false);
    let [roomEquipmentAccordeonStatus, setRoomEquipmentAccordeonStatus] = React.useState(false);

    const cirqleTipHandler = () => setAccordeonStatus(!accordeonStatus);

    return (
        <div className={s.container}>
            <Headline subtitle={'Описание'} title={'номера'}/>
            <div className={s.link}><NavLink to={''}>Посмотреть номер с видом на море →</NavLink></div>
            <CirqleTip onClick={cirqleTipHandler} accordeonStatus={accordeonStatus}/>

            <div className={s.grid}>

                <div className={s.listPart}>
                    <div className={s.leftBlock}>
                        <div className={s.firstCol}>
                            <p className={s.colTitle}
                               onClick={() => setIncludedInPriceAccordeonStatus(!includedInPriceAccordeonStatus)}>
                                <img src={arrowIcon}
                                     className={includedInPriceAccordeonStatus ? s.arrow + ' ' + s.rotated : s.arrow}
                                     alt=""/>
                                <b>В стоимость включено<span>:</span></b>
                            </p>
                            <Accordeon status={includedInPriceAccordeonStatus} withBtn={false} zeroHeight={true}>
                                <ul>
                                    {data.includedInPrice.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                            </Accordeon>

                        </div>
                        <div className={s.secondCol}>
                            <p className={s.colTitle}
                               onClick={() => setRoomEquipmentAccordeonStatus(!roomEquipmentAccordeonStatus)}>
                                <img src={arrowIcon}
                                     className={roomEquipmentAccordeonStatus ? s.arrow + ' ' + s.rotated : s.arrow}
                                     alt=""/>
                                <b>Оснащение номера<span>:</span></b>
                            </p>
                            <Accordeon status={roomEquipmentAccordeonStatus} withBtn={false} zeroHeight={true}>
                                <ul>
                                    {data.roomEquipment.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                            </Accordeon>

                        </div>
                    </div>
                    <div className={s.rightBlock}></div>
                </div>

                <div className={s.iconsPart}>

                    {data.features.map((item, index) => <div key={index} className={s.icon}>
                        <img src={item.icon} alt=""/>
                        <p dangerouslySetInnerHTML={{__html: item.desc}}></p>
                    </div>)}

                </div>

                <div className={s.descriptionPart}>
                    <Accordeon withBtn={false} zeroHeight={true} status={accordeonStatus}>
                        <p dangerouslySetInnerHTML={{__html: data.roomDescription}}></p>
                    </Accordeon>
                </div>

            </div>
        </div>
    )
}

export default RoomDescriptionBlock