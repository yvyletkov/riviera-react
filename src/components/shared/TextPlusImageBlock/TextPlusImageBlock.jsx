import img from "./../../../img/home-page/textimg.jpg"
import img2 from "./../../../img/home-page/textimg2.jpg"
import React from "react";
import s from "./TextPlusImageBlock.module.scss";
import Headline from "../Headline/Headline";
import Button from "../Button/Button";
import 'rodal/lib/rodal.css';
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";
import LazyLoadImgComponent from "../../additional/LazyLoadImgComponent/LazyLoadImgComponent";

const TextPlusImageBlock = ({
                                subtitle,
                                title,
                                content = `Riviera Sunrise Resort & SPA – отель в Крыму на берегу Чёрного моря в самом центре Алушты с
                    собственным пляжем, открытыми подогреваемыми бассейнами, живописным старинным реликтовым парком,
                    самым большим в Крыму SPA-центром, современным конференц-центром международного уровня и
                    вместительным подземным паркингом.<br/>
                    В отеле два здания — современный корпус Модерн и исторический корпус Классик.<br/>
                    Концепцию и дизайн корпуса Модерн разработал один из самых известных и культовых шведских
                    дизайнеров, Кристиан Люндваль, владелец архитектурно-дизайнерского бюро Lundwall Architects AB и
                    автор проектов интерьеров сотни отелей по всему миру.`,
                                image1 = img,
                                image2 = img2,
                            }) => {

    let [popupOpen, setPopupOpen] = React.useState(false);


    return <div className={s.wrapper}>
        <div className={s.container}>
            <LazyLoadImgComponent className={s.rightImg} src={image2} alt=""/>

            <div className={s.textContent}>
                {title && <Headline subtitle={subtitle} title={title}/>}
                <p dangerouslySetInnerHTML={{__html: content}}/>
                <LazyLoadImgComponent className={s.leftImg} src={image1} alt=""/>

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
