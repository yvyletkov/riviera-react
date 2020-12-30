import React from "react";
import s from "./EventPageBanner.module.scss";
import img from "../../../../img/events/wedding/weddingPageBanner.jpg"
import iconCapacity from "../../../../img/events/wedding/icon-capacity.png"
import iconPhotozone from "../../../../img/events/wedding/icon-photozone.png"
import iconThematic from "../../../../img/events/wedding/icon-thematic.png"
import AnimatedMouseIcon from "../../../shared/AnimatedMouseIcon/AnimatedMouseIcon";
import Button from "../../../shared/Button/Button";
import PopupContactForm from "../../../additional/ContactForm/PopupContactForm";
import ContactForm from "../../../additional/ContactForm/ContactForm";
import Rodal from "rodal";


const EventPageBanner = ({mobileFontSize, fontSize, titles, icons, bannerImg, bannerImgMobile, blackFont, withInfo = false, withPrice = false}) => {

    let [popupOpen, setPopupOpen] = React.useState(false);

    return (
        <div className={s.wrapper}
             style={{
                 background: window.matchMedia("(max-width: 620px)").matches ? `center no-repeat url("${bannerImgMobile}")` : `center no-repeat url("${bannerImg}")`,
                 backgroundSize: "cover"
             }}>
            <div className={s.container}>
                <div className={!blackFont ? s.headings : s.headings + ' ' + s.black}>
                    <h2>{titles[0]}</h2>
                    <h1>
                        <span
                            style={window.matchMedia("(max-width: 620px)").matches ? {fontSize: mobileFontSize[0]} : {fontSize: fontSize[0]}}>{titles[1]}</span>
                        <span
                            style={window.matchMedia("(max-width: 620px)").matches ? {fontSize: mobileFontSize[1]} : {fontSize: fontSize[1]}}>{titles[2]}</span>
                        <span
                            style={window.matchMedia("(max-width: 620px)").matches ? {fontSize: mobileFontSize[2]} : {fontSize: fontSize[2]}}>{titles[3]}</span>
                    </h1>
                    <Button style={{width: "fit-content", marginTop: "20px"}}
                            onClick={() => setPopupOpen(true)} text={"Узнать стоимость"}/>

                    {withInfo ?
                        <Rodal className={'rodal-popup'} visible={popupOpen} onClose={() => setPopupOpen(false)}>
                            <p style={{maxWidth: "90%"}}>
                                Менеджер по организации мероприятий:
                            </p>
                            <p>
                                Телефон: <a style={{whiteSpace: 'nowrap'}} href="tel:+73656026226">+7(365)602-62-26
                                доб. 3998</a>
                            </p>
                            <p>
                                What's App, Viber, Telegram: <a href="tel:+79877541784">+7(987)754-17-84</a>
                            </p>
                        </Rodal>
                        :
                        withPrice ? (popupOpen ? (function () {
                                window.location = 'documents/Выездная-церемония.pdf';
                            })() : null)
                            :
                            <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                              popupTitleText={'Чтобы получить точную информацию о стоимости, позвольте нам связаться с Вами'}
                                              submitBtnText='Узнать стоимость'
                                              formName={`Форма с верхнего баннера страницы ${titles[1]} ${titles[2]} ${titles[3]} (кнопка "узнать стоимость")`}
                                              swalText={'очень скоро наши менеджеры с Вами свяжутся. Также не забывайте проверять свою почту 😉'}
                                              withEmail
                                              withPhone/>
                    }

                </div>


                <div className={!blackFont ? s.icons : s.icons + ' ' + s.black}>
                    <div className={s.icon}>
                        <img src={icons[0].img} alt="Вместимость"/>
                        <p dangerouslySetInnerHTML={{__html: icons[0].descr}}/>
                    </div>
                    <div className={s.icon}>
                        <img src={icons[1].img} alt="Фотозоны"/>
                        <p dangerouslySetInnerHTML={{__html: icons[1].descr}}/>

                    </div>
                    <div className={s.icon}>
                        <img src={icons[2].img} alt="Оформление"/>
                        <p dangerouslySetInnerHTML={{__html: icons[2].descr}}/>

                    </div>
                </div>
            </div>
            <div className={s.bannerImgTop}/>

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon/>
            </div>
        </div>
    )
};

export default EventPageBanner;