import React from "react";
import s from "./BottomMenu.module.scss"
import bedIcon from "../../../img/bed-icon.png";
import calendarIcon from "../../../img/calendar-icon.png";
import phoneIcon from "../../../img/phone-icon.png";
import {NavLink} from "react-router-dom";
import PopupContactForm from "../ContactForm/PopupContactForm";

const BottomMenu = (props) => {

    let [scrolledFromTop, setScrolledFromTop] = React.useState(0);
    // let [popupOpen, setPopupOpen] = React.useState(false);

    const listenToScroll = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;
        setScrolledFromTop(scroll)
    };

    React.useEffect(() => {
        window.addEventListener('scroll', listenToScroll);

        return () => window.removeEventListener('scroll', listenToScroll)
    }, []);

    return <div className={scrolledFromTop > window.innerHeight / 3 ? `${s.bottomMenu} ${s.minified}` : s.bottomMenu}>
        <NavLink to="/nomera-i-tseny" className={s.item}>
            <img src={bedIcon} alt=""/>
            <div>Номера и цены</div>
        </NavLink>
        <NavLink to="/booking" className={s.item}>
            <img src={calendarIcon} alt=""/>
            <div>Бронировать</div>
        </NavLink>
        <a href='tel:+78003006841' className={s.item}>
            <img src={phoneIcon} alt=""/>
            <div>Позвонить</div>
        </a>

        {/*<PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}*/}
        {/*                  popupTitleText={'Пожалуйста, укажите свои контактные данные'}*/}
        {/*                  submitBtnText='Жду звонка'*/}
        {/*                  formName={`Контактная форма из нижнего блока мобильной версии сайта (кнопка "позвонить")`}*/}
        {/*                  swalText={'очень скоро наши менеджеры свяжутся c Вами'}*/}
        {/*                  withPhone/>*/}
    </div>
};

export default BottomMenu;