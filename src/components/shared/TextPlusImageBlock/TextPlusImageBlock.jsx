import img from "./../../../img/home-page/textimg.png"
import React from "react";
import s from "./TextPlusImageBlock.module.scss";
import kitchenImg1 from "../../../img/events/wedding/kitchen1.jpg";
import kitchenImg2 from "../../../img/events/wedding/kitchen2.jpg";
import menuPriceImg from "../../../img/events/wedding/menuPrice.png";
import Headline from "../Headline/Headline";
import Button from "../Button/Button";
import 'rodal/lib/rodal.css';
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";

const TextPlusImageBlock = ({subtitle, title, firstImg = kitchenImg1, btnLink = ''}) => {

    let [popupOpen, setPopupOpen] = React.useState(false);


    return <div className={s.wrapper}>
        <div className={s.container}>
            <img className={s.rightImg} src={kitchenImg2} alt=""/>

            <div className={s.textContent}>
                <Headline subtitle={subtitle} title={title}/>
                <p>
                    Riviera Sunrise Resort & SPA – отель в Крыму на берегу Чёрного моря в самом центре Алушты с
                    собственным пляжем, открытыми подогреваемыми бассейнами, живописным старинным реликтовым парком,
                    самым большим в Крыму SPA-центром, современным конференц-центром международного уровня и
                    вместительным подземным паркингом.
                </p>
                <p>
                    В отеле два здания — современный корпус Модерн и исторический корпус Классик.<br/>
                    Концепцию и дизайн корпуса Модерн разработал один из самых известных и культовых шведских
                    дизайнеров, Кристиан Люндваль, владелец архитектурно-дизайнерского бюро Lundwall Architects AB и
                    автор проектов интерьеров сотни отелей по всему миру.
                </p>
                <img className={s.leftImg} src={img} alt=""/>

                <Button text={'Заказать звонок'}
                        onClick={ () => setPopupOpen(true)}
                        style={window.matchMedia("screen and (max-width: 768px)").matches ? {width: "100%"} : {width: "230px"}}/>

                <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                  popupTitleText={'Куда вам позвонить?'}
                                  submitBtnText={"Отправить"}
                                  formName={`Форма из блока "Заказать звонок" ${window.location.href}`}
                                  swalText={'мы перезвоним Вам в самое ближайшее время!'}
                                  withPhone/>

            </div>
        </div>
    </div>
};

export default TextPlusImageBlock;
