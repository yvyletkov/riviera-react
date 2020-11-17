import React from "react";
import s from "./BlackBlock.module.scss";
import Button from "../Button/Button";

const BlackBlock = () => {
    return <div className={s.wrapper}>
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.textBlock}>
                    <p>Сомневаетесь в площаке?</p>
                    <p>Обязательно проверьте выбранное место по чек-листу</p>
                </div>
                <Button text={'Скачать чек-лист'} link='#'/>
            </div>
        </div>
    </div>
};

export default BlackBlock;
