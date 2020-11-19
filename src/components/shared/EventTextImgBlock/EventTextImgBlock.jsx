import React from "react";
import s from "./EventTextImgBlock.module.scss";
import Headline from "../Headline/Headline";
import CirqleTip from "../CirqleTip/CirqleTip";
import Accordeon from "../Accordeon/Accordeon";
import bestDayEverImg from "../../../img/events/bestdayever.png";

const EventTextImgBlock = ({subtitle = 'Ваша семья', title = 'Начинается здесь', img, text, listArray, forWedding = true}) => {

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
                            {text}
                        </p>
                    </Accordeon>
                    <p>
                        {forWedding && <h5><b>Молодожёнов ждёт:</b></h5>}
                        <ul>
                            {listArray.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </p>
                    {forWedding && <img src={bestDayEverImg} alt="Лучший день"/>}
                </div>
                <img src={img} alt={"Лучший праздник"}/>
            </div>
        </div>
    )
};

export default EventTextImgBlock;
