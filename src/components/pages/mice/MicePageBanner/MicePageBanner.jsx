import React, {useState} from "react";
import s from "./MicePageBanner.module.scss";
import Button from "../../../shared/Button/Button";
import CirqleTip from "../../../shared/CirqleTip/CirqleTip";

const MicePageBanner = ({subtitle,
                            title1,
                            title2,
                            title3,
                            title3Style,
                            icons,
                            title1Style,
                            background}) => {
    const [accordeonStatus, setAccordeonStatus] = useState(false);
    // {background: 'left no-repeat url("../../../../img/mice/conference/1.jpg")'}

    icons = icons.map((icon)=> {
        return (
            <div className={s.icon} key={icon.key}>
                <img src={icon.img} alt={icon.desc}/>
                <p>{icon.text}</p>
            </div>
        )
    })

    return (

        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.background} style={{backgroundImage:`url(${background})`}}/>
                <div className={s.headings}>
                    <h2>{subtitle}</h2>
                    <h1>
                        <span style={title1Style}>{title1}</span>
                        <span>{title2}</span>
                        <span style={title3Style}>{title3}</span>
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
                    {icons}
                </div>
                <Button style={window.matchMedia("(max-width:768px)").matches ? {
                    marginBottom: "15vh",
                    maxWidth: "200px",
                    zIndex: "1"
                } : {maxWidth: "200px", zIndex: "1"}}
                        text={"Получить смету"}/>
            </div>
            </div>
    )
};

export default MicePageBanner;