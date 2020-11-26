import React from "react";
import s from "./SpecialTask.module.scss";
import Headline from "../Headline/Headline";
import imgAbout2 from "../../../img/mice/conference/12.jpg";
import imgAbout1 from "../../../img/mice/conference/11.jpg";
import Button from "../Button/Button";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";

const SpecialTask = () => {

    const [popupOpen, setPopupOpen] = React.useState(false);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img className={s.rightImg} src={window.matchMedia("(max-width: 768px").matches ? imgAbout1 : imgAbout2}
                     alt=""/>

                <div className={s.textContent}>
                    <Headline subtitle={'Ваша задача'} title={'Особенная?'}/>
                    <p className={s.boldTitle}>Справимся и с ней!</p>
                    <p>Запишитесь на 20-минутную консультацию с нашим организатором мероприятий.</p>
                    <ul>
                        <li>бриф на 3 вопроса</li>
                        <li>легкое общение без сложных терминов</li>
                        <li>прозрачная смета</li>
                    </ul>
                    <p className={s.boldSubtitle}>Поддержим все ваши идеи и расскажем, как их реализовать несколькими
                        способами, учитывая ваш бюджет!</p>

                    <img className={s.leftImg}
                         src={window.matchMedia("(max-width: 768px").matches ? imgAbout2 : imgAbout1} alt=""/>

                    <Button text={"Оставить заявку"} onClick={() => setPopupOpen(true)}
                            style={!window.matchMedia("(max-width: 768px").matches ? {width: "230px"} : {}}/>

                    <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                      popupTitleText={'Чтобы записаться на консультацию, пожалуйста, оставьте свои контактные данные️'}
                                      submitBtnText='Оставить заявку'
                                      formName={`Форма из блока "Ваша задача особенная" (Оставить заявку)`}
                                      swalText={'скоро наши менеджеры свяжутся с Ваши'}
                                      withEmail
                                      withPhone/>
                </div>
            </div>
        </div>
    )
}

export default SpecialTask;