import React from "react";
import s from "./EventTextImgBlock.module.scss";
import Headline from "../Headline/Headline";
// import CirqleTip from "../CirqleTip/CirqleTip";
// import Accordeon from "../Accordeon/Accordeon";
import bestDayEverImg from "../../../img/events/bestdayever.png";
import Button from "../Button/Button";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";

const EventTextImgBlock = ({subtitle = 'Ваша семья', title = 'Начинается здесь', img, text, listArray = [], forWedding = true, wideImg, button=true}) => {

    let [popupOpen, setPopupOpen] = React.useState(false);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.background}/>
                <div className={s.textContent}>
                    <Headline subtitle={subtitle} title={title}/>

                        <p dangerouslySetInnerHTML={{__html: text}}/>
                    <p>
                        {forWedding && <h5><b>Молодожёнов ждёт:</b></h5>}

                            {listArray.length ? <ul>{listArray.map((item, index) => <li key={index}>{item}</li>)}</ul> : <Button text={'Узнать подробности'} onClick={() => setPopupOpen(true)} style={window.matchMedia("(max-width: 768px)").matches ? {} : {width: '220px'}}/> }
                    </p>
                    {forWedding && <img src={bestDayEverImg} alt="Лучший день"/>}
                </div>
                <img className={wideImg ? s.wide : ''} src={img} alt={"Лучший праздник"}/>

                <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                  popupTitleText={'Чтобы мы могли подробнее рассказать об ивенте, пожалуйста, оставьте свои контактные данные️'}
                                  submitBtnText='Узнать подробности'
                                  formName={`Форма из блока с подробностями об Ивенте чёрного цвета (узнать подробности)`}
                                  swalText={'мы отправим информацию по этому ивенту на указанную Вами почту в самое ближайшее время!'}
                                  withEmail
                                  withPhone/>
            </div>
        </div>
    )
};

export default EventTextImgBlock;
