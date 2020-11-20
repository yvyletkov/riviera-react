import React from "react";
import s from "./EventTextImgBlock.module.scss";
import Headline from "../Headline/Headline";
// import CirqleTip from "../CirqleTip/CirqleTip";
// import Accordeon from "../Accordeon/Accordeon";
import bestDayEverImg from "../../../img/events/bestdayever.png";
import Button from "../Button/Button";

const EventTextImgBlock = ({subtitle = 'Ваша семья', title = 'Начинается здесь', img, text, listArray = [], forWedding = true, wideImg}) => {

    // let [accordeonStatus, setAccordeonStatus] = React.useState(false);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.background}/>
                <div className={s.textContent}>
                    <Headline subtitle={subtitle} title={title}/>
                    {/*<CirqleTip accordeonStatus={accordeonStatus}*/}
                    {/*           onClick={() => setAccordeonStatus(!accordeonStatus)}/>*/}
                    {/*<Accordeon withBtn={false} zeroHeight={true} status={accordeonStatus}>*/}
                        <p dangerouslySetInnerHTML={{__html: text}}/>
                    {/*</Accordeon>*/}
                    <p>
                        {forWedding && <h5><b>Молодожёнов ждёт:</b></h5>}

                            {listArray.length ? <ul>{listArray.map((item, index) => <li key={index}>{item}</li>)}</ul> : <Button text={'Узнать подробоности'} style={window.matchMedia("(max-width: 768px)").matches ? {} : {width: '220px'}}/> }
                    </p>
                    {forWedding && <img src={bestDayEverImg} alt="Лучший день"/>}
                </div>
                <img className={wideImg ? s.wide : ''} src={img} alt={"Лучший праздник"}/>
            </div>
        </div>
    )
};

export default EventTextImgBlock;
