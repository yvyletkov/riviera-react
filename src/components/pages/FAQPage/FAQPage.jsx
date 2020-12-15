import React from "react";
import s from "./FAQPage.module.scss";
import ContactForm from "../../additional/ContactForm/ContactForm";
import MapSection from "../../shared/MapSection/MapSection";
import arrow from "../../../img/arrow-accordeon.png";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";


const Question = ({title, answer = 'Ответ на этот вопрос появится на сайте чуть позже. Спасибо!', key}) => {
    const [opened, setOpened] = React.useState(false);

    return <div key={key} className={opened ? s.question + ' ' + s.opened : s.question}>
        <div className={s.title} onClick={ () => setOpened(!opened)}>
            <div>{title}</div>
            <img src={arrow} className={s.arrow} alt=""/>
        </div>
        <div className={s.answer}>{answer}</div>
    </div>
}

const FAQPage = () => {

    React.useEffect( () => document.title = `Вопросы и ответы – the Shored SPA - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    let [currentTab, setCurrentTab] = React.useState(0);

    const tabs = ['Номера и проживание', 'Медицинский центр', 'Транспорт', 'Питание', 'Разное']

    return ( <>
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
                                <p>Воспользуйтесь услугой трансфер, заказать вы можете по телефону <b><a style={{whiteSpace: "nowrap"}} href="tel:8 800 550 98 24" target={'_blank'}>8 800 550 98 24</a></b>
                                </p>

                            </div>
                        </div>

                        <div className={s.tabsWrapper}>
                            {tabs.map( (item, index) => (
                                <div key={index} onClick={ () => setCurrentTab(index)} className={index === currentTab ? s.tab + ' ' + s.active : s.tab}>{item}</div>
                            ))}
                        </div>

                        { currentTab === 0 &&
                        <div className={s.questionsWrapper}>
                            <div className={s.col}>
                                <Question title={'Сколько по времени занимает дорога до метро?'} key={0}/>
                                <Question title={'Что предоставляют в СПА?'} key={1}/>
                                <Question title={'Установленф ли камеры видеонаблюдения?'} key={2}/>
                                <Question title={'Имеется ли в номерах посуда?'} key={3}/>
                                <Question title={'Возможно ли проживание с животными?'} key={4}/>
                            </div>
                            <div className={s.col}>
                                <Question title={'Какие кровати в номере?'} key={0}/>
                                <Question title={'Какой вид из номеров?'} key={1}/>
                                <Question title={'Что входит в стомость проживания?'} key={2}/>
                                <Question title={'Предоставляются ли детские стульчики, кроватки, горшок, имеются ли коляски?'} key={2}/>
                            </div>
                        </div> }

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

export default FAQPage;
