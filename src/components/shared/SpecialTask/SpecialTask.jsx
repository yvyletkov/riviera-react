import React from "react";
import s from "./SpecialTask.module.scss";
import Headline from "../Headline/Headline";
import imgAbout2 from "../../../img/mice/conference/12.jpg";
import imgAbout1 from "../../../img/mice/conference/11.jpg";
import Button from "../Button/Button";

const SpecialTask = () => {
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

                    <Button text={"Оставить заявку"}
                            style={!window.matchMedia("(max-width: 768px").matches ? {width: "230px"} : {}}/>
                </div>
            </div>
        </div>
    )
}

export default SpecialTask;