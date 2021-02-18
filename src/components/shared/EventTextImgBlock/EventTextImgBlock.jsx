import React from "react";
import s from "./EventTextImgBlock.module.scss";
import Headline from "../Headline/Headline";
// import CirqleTip from "../CirqleTip/CirqleTip";
// import Accordeon from "../Accordeon/Accordeon";
import bestDayEverImg from "../../../img/events/bestdayever.png";
import Button from "../Button/Button";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";
import whatsappIcon from "../../../img/icons/whatsapp.svg";

const EventTextImgBlock = ({
                               subtitle = 'Ваша семья',
                               title = 'Начинается здесь',
                               img,
                               text,
                               listArray = [],
                               forWedding = true,
                               wideImg,
                               button=true,
                               additionally=null,
                               secondListTitle,
                               secondListArray}) => {

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

                            {listArray.length ? <ul>{listArray.map((item, index) => <li key={index}>{item}</li>)}</ul> : null }
                    </p>
                    {(secondListTitle && secondListArray) &&
                        <p>
                            <h5><b>{secondListTitle}</b></h5>

                            <ul>{secondListArray.map((item, index) => <li key={index}>{item}</li>)}</ul>
                        </p>
                    }

                    {additionally && <p>{additionally}</p>}
                    {forWedding && <img src={bestDayEverImg} alt="Лучший день"/>}
                    <Button withIcon
                            text={'Напишите нам в Whatsapp'}
                            icon={whatsappIcon}
                            href={'https://wa.me/89877541784'}/>
                </div>
                <img className={wideImg ? s.wide : ''} src={img} alt={"Лучший праздник"}/>

                {/*<PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}*/}
                {/*                  popupTitleText={'Чтобы мы могли подробнее рассказать об ивенте, пожалуйста, оставьте свои контактные данные️'}*/}
                {/*                  submitBtnText='Узнать подробности'*/}
                {/*                  formName={`Форма из блока с подробностями об Ивенте чёрного цвета (узнать подробности)`}*/}
                {/*                  swalText={'мы отправим информацию по этому ивенту на указанную Вами почту в самое ближайшее время!'}*/}
                {/*                  withEmail*/}
                {/*                  withPhone/>*/}
            </div>
        </div>
    )
};

export default EventTextImgBlock;
