import React from "react";
import s from './TextBlock.module.scss';
import Headline from "../../../../shared/Headline/Headline";
import eventImg from "../../../../../img/mice/conference/2.jpg"

const TextBlock = (props) => {
    return (
        <div className={s.wrapper} style={window.matchMedia('(min-width:768px)').matches ? props.style : props.styleMobile}>
            <div className={s.container}>
                <div className={s.leftSide}>
                    <img src={eventImg} alt="Мероприятия"/>
                </div>
                <div className={s.rightSide}>
                    <Headline subtitle={"Проведем для вас любое"} title={"Мероприятие"}/>
                    <p>Riviera Sunrise Resort & SPA объединяет в себе все, что необходимо для проведения качественного
                        мероприятия, включая просторные залы повышенной комфортности с современным оборудованием,
                        комфортные номера премиум-класса, безупречный сервис и множество опций, позволяющие провести
                        конференцию на высшем уровне. К каждой группе у нас индивидуальный подход, а также персональный
                        менеджер для решения всех вопросов и пожеланий заказчика. </p>
                </div>
            </div>
        </div>

    )
}

export default TextBlock;