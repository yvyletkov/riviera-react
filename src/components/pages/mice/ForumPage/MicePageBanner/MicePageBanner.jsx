import React, {useState} from "react";
import s from "./MicePageBanner.module.scss";
import iconHalls from "../../../../../img/mice/conference/icons/1.png"
import iconЕquipment from "../../../../../img/mice/conference/icons/2.png"
import iconExcursions from "../../../../../img/mice/conference/icons/3.png"
import iconResidence from "../../../../../img/mice/conference/icons/4.png"
import Button from "../../../../shared/Button/Button";
import CirqleTip from "../../../../shared/CirqleTip/CirqleTip";


const MicePageBanner = () => {
    const [accordeonStatus, setAccordeonStatus] = useState(false);
    return (

        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.background}/>
                <div className={s.headings}>
                    <h2>Идеальная организация</h2>
                    <h1>
                        <span>Вашей</span>
                        <span>Конференции</span>
                        <span>В крыму</span>
                        <div className={s.cirqleTipWrapper}>
                            <CirqleTip onClick={() => setAccordeonStatus(!accordeonStatus)} accordeonStatus={accordeonStatus}/>
                        </div>
                    </h1>
                    <div className={s.descriptionWrapper}>
                        <div className={accordeonStatus ? s.description + ' ' + s.shown : s.description}>
                            <p>Riviera Sunrise Resort & SPA объединяет в себе все, что необходимо для проведения
                                качественного мероприятия, включая просторные залы повышенной комфортности с современным
                                оборудованием, комфортные номера премиум-класса, безупречный сервис и множество опций,
                                позволяющие провести конференцию на высшем уровне. К каждой группе у нас индивидуальный
                                подход, а также персональный менеджер для решения всех вопросов и пожеланий заказчика.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.icons}>
                    <div className={s.icon}>
                        <img src={iconHalls} alt="9 залов"/>
                        <p>9 оборудованных<br/>
                            залов</p>
                    </div>
                    <div className={s.icon}>
                        <img src={iconЕquipment} alt="Оборудование"/>
                        <p>Оборудование для<br/>
                            выступлений</p>
                        </div>
                        <div className={s.icon}>
                            <img src={iconExcursions} alt="Экскурсии"/>
                            <p>Экскурсии и<br/>
                                тимбилдинги</p>
                        </div>
                    <div className={s.icon}>
                        <img src={iconResidence} alt="Проживание в отеле"/>
                        <p>Предложение на<br/>
                            проживание в отеле</p>
                    </div>
                </div>
                <Button style={window.matchMedia("(max-width:768px)").matches ? {
                    marginBottom: "48px",
                    maxWidth: "200px"
                } : {maxWidth: "200px"}}
                        text={"Получить смету"}/>
            </div>
            </div>
    )
};

export default MicePageBanner;