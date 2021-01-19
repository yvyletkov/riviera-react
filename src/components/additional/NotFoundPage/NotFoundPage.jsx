import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NotFoundPage.module.scss";
import bg from "../../../img/404bg.jpg";
import zeroImg from "../../../img/404bgZero.png";
// import BrowserHistory from 'react-router/lib/BrowserHistory';

const NotFoundPage = ({history}) => {

    return (
        <div className={s.wrapper} style={{background: `center url(${bg})`}}>
            <div className={s.content}>
                <p className={s.subtitle}>Oops!</p>
                <div className={s.digits}>
                    <span className={s.digit}>4</span>
                    <img src={zeroImg} alt="0"/>
                    <span className={s.digit}>4</span>
                </div>
                <p className={s.topText}><b>Данная страницу находится по какому-то другому адресу, либо она просто не
                    существует</b></p>
                <p className={s.bottomText}>Пожалуйста, попробуйте <span onClick={history.goBack} className={s.link}>вернуться назад</span> или <NavLink to={'/'}>вернуться на главную страницу</NavLink>
                </p>
            </div>
        </div>
    )
}

export default NotFoundPage;