import React, {useState} from "react";
import s from "./TransferPage.module.scss";
import ContactForm from "../../additional/ContactForm/ContactForm";
import MapSection from "../../shared/MapSection/MapSection";
import arrow from "../../../img/arrow-accordeon.png";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import CirqleTip from "../../shared/CirqleTip/CirqleTip";


const Question = ({title, answer = 'Ответ на этот вопрос появится на сайте чуть позже. Спасибо!', key}) => {
    const [opened, setOpened] = React.useState(false);

    return <div key={key} className={opened ? s.question + ' ' + s.opened : s.question}>
        <div className={s.title} onClick={() => setOpened(!opened)}>
            <div>{title}</div>
            <img src={arrow} className={s.arrow} alt=""/>
        </div>
        <div className={s.answer}>{answer}</div>
    </div>
}

const TransferPage = () => {

    React.useEffect(() => document.title = `Трансфер Riviera Sunrise`, [])
    const text = "Общественным автотранспортом:\n" +
        "\n" +
        "-   Из автовокзала г. Симферополь ежедневный рейсы автобусов Симферополь — Алушта\n" +
        "-   Из троллейбусного парка г. Симферополь ежедневное рейсы троллейбусов Симферополь - Алушта. № троллейбуса 51,52\n";

    let [accordeonStatus, setAccordeonStatus] = useState(false);

    return (<>
            <section className='section'>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.topRow}>
                            <h4 className={s.title}>
                                <span>Часто задаваемые</span>
                                <span>вопросы</span>
                            </h4>
                            <div className={s.textContent}>
                                <p>ул. Ленина 2, Алушта, Крым</p>
                                <p>GPS координаты: 44.667638, 34.411936</p>
                                <p>Воспользуйтесь услугой трансфер, заказать вы можете по телефону <b><a
                                    style={{whiteSpace: "nowrap"}} href="tel:8 800 550 98 24" target={'_blank'}>8 800
                                    550 98 24</a></b>
                                </p>
                                <div className={s.tabsWrapper}>
                                    <div onClick={() => setAccordeonStatus(!accordeonStatus)} className={s.tab}>Как к
                                        нам добраться?
                                    </div>
                                    <div className={accordeonStatus ? s.description + ' ' + s.shown : s.description}>
                                        <p>
                                            Общественным автотранспортом:<br />
                                            <br />
                                            -   Из автовокзала г. Симферополь ежедневный рейсы автобусов Симферополь — Алушта <br/>
                                            -   Из троллейбусного парка г. Симферополь ежедневное рейсы троллейбусов Симферополь - Алушта. № троллейбуса 51,52
                                        </p>
                                        <p onClick={() => setAccordeonStatus(!accordeonStatus)}>Скрыть</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <HeadlineCenter title={'Можете задать свой вопрос'}/>
                        <div className={s.formWrapper}>
                            <ContactForm withMessage
                                         formName={'Форма со страницы Контакты" (Обратная связь)'}
                                         swalText={'ваш вопрос будет получен и обработан нашими менеджерами'}
                                         submitBtnText={'Отправить'}
                                         textareaPlaceholder={'Введите Ваш вопрос'}/>
                        </div>
                    </div>
                </div>
            </section>


            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
}

export default TransferPage;
