import React from "react";
import s from "./BlackBlock.module.scss";
import Button from "../Button/Button";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";

const BlackBlock = () => {

    let [popupOpen, setPopupOpen] = React.useState(false);

    return <div className={s.wrapper}>
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.textBlock}>
                    <p>Сомневаетесь в площаке?</p>
                    <p>Обязательно проверьте выбранное место по чек-листу</p>
                </div>
                <Button text={'Скачать чек-лист'} onClick={() => setPopupOpen(true)}/>

                <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                  popupTitleText={'Чтобы получить чек-лист, пожалуйста, оставьте свои контактные данные️'}
                                  submitBtnText='Держите'
                                  formName={`Форма из блока чёрного цвета "Сомневаетесь в площадке?" (скачать чек-лист)`}
                                  swalText={'мы отправим чек-лист на указанную Вами почту в самое ближайшее время!'}
                                  withEmail/>
            </div>
        </div>
    </div>
};

export default BlackBlock;
