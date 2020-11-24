import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NotFoundPage.module.scss"


const NotFoundPage = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.noise}></div>
            <div className={s.overlay}></div>
            <div className={s.terminal}>
                <div style={{display: "flex", justifyContent: "space-between"}}><h1>ОШИБКА <span
                    className={s.errorcode}>404</span></h1>
                    <h1>RIVIERA <span className={s.errorcode}>SUNRISE</span></h1></div>
                <p className={s.output}>Данная страница доступна по какому-то другому адресу, либо ее не существует вообще...</p>
                <p className={s.output}>Пожалуйста, попробуйте <NavLink to="/">вернуться назад</NavLink> или <NavLink to="/">вернуться
                    на главную страницу</NavLink>.</p>
                <p className={s.output}>Удачи :)</p>
            </div>
        </div>
    )
}

export default NotFoundPage;