import React from "react";
import s from "./EventTextImgBlock.module.scss";
import Headline from "../Headline/Headline";
import CirqleTip from "../CirqleTip/CirqleTip";
import Accordeon from "../Accordeon/Accordeon";
import bestDayEverImg from "../../../img/events/bestdayever.png";

const EventTextImgBlock = ({subtitle = 'Ваша семья', title = 'Начинается здесь', img}) => {

    let [accordeonStatus, setAccordeonStatus] = React.useState(false);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.background}/>
                <div className={s.textContent}>
                    <Headline subtitle={subtitle} title={title}/>
                    <CirqleTip accordeonStatus={accordeonStatus}
                               onClick={() => setAccordeonStatus(!accordeonStatus)}/>
                    <Accordeon withBtn={false} zeroHeight={true} status={accordeonStatus}>
                        <p>
                            Любви нужно пространство! Особенный день для пары должен пройти там, где будет всё
                            необходимое для трогательной церемонии, зажигательной свадебной программы, удивительных
                            сюрпризов, выступления артистов и кавер-групп.
                        </p>
                    </Accordeon>
                    <p>
                        <h5><b>Молодожёнов ждёт:</b></h5>
                        <ul>
                            <li>незабываемый мальчишник и девичник,</li>
                            <li>свадебная фото- и видеосессия,</li>
                            <li>сборы невесты;</li>
                            <li>романтичная первая ночь.</li>
                        </ul>
                    </p>
                    <img src={bestDayEverImg} alt="Лучший день"/>
                </div>
                <img src={img} alt={"Молодожёны"}/>
            </div>
        </div>
    )
};

export default EventTextImgBlock;
