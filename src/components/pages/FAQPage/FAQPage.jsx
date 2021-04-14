import React from "react";
import s from "./FAQPage.module.scss";
import ContactForm from "../../additional/ContactForm/ContactForm";
import MapSection from "../../shared/MapSection/MapSection";
import arrow from "../../../img/arrow-accordeon.png";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import cx from 'classnames';


const Question = ({title, answer = 'Ответ на этот вопрос появится на сайте чуть позже. Спасибо!', index}) => {
    const [opened, setOpened] = React.useState(false);

    return <div key={index} className={opened ? s.question + ' ' + s.opened : s.question}>
        <div className={s.title} onClick={() => setOpened(!opened)}>
            <div>{title}</div>
            <img src={arrow} className={s.arrow} alt=""/>
        </div>
        <div className={s.answer} dangerouslySetInnerHTML={{__html: answer}}/>
    </div>
}

const FAQPage = () => {

    React.useEffect(() => document.title = `Вопросы и ответы - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    let [currentTab, setCurrentTab] = React.useState(0);

    const tabs = ['Номера и проживание', 'Медицинский центр', 'Транспорт', 'Питание', 'Разное']


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
                                <p>Наш отель создан для Вашего комфорта и удовольствия от отдыха! </p>
                                <p>Если у Вас остались вопросы по проживанию, питанию или дополнительным услугам, Вы
                                    можете найти ответы в этом разделе.</p>

                            </div>
                        </div>

                        <div className={s.tabsWrapper}>
                            {tabs.map((item, index) => {
                                const tabStyles = cx(s.tab, {[s.active]: index === currentTab})
                                // return <div key={index} onClick={() => setCurrentTab(index)}
                                return <div key={index}
                                            className={tabStyles}>{item}</div>
                            })}
                        </div>

                        {currentTab === 0 &&
                        <div className={s.questionsWrapper}>
                            <div className={s.col}>
                                <Question title={'Сколько по времени занимает дорого от аэропорта до отеля?'}
                                          answer={'В зависимости от ситуации на дорогах, время в пути от аэропорта составит от 1 до 1,5 часов.'}
                                          key={0}/>
                                <Question title={'Установлены ли камеры видеонаблюдения?'}
                                          answer={'Камеры видеонаблюдения установлены в общественных зонах, а также на территории отеля.'}
                                          key={1}/>
                                <Question title={'Имеется ли в номерах посуда?'}
                                          answer={'В номерах есть бокалы, стаканы, чашки, а также столовые приборы и штопор.'}
                                          key={2}/>
                                <Question title={'Возможно ли проживание с животными?'}
                                          answer={'В отеле возможно размещение с животным до 5 кг, за дополнительную плату – 1500 руб. за ночь.'}
                                          key={3}/>
                                <Question
                                    title={'Предоставляются ли детские стульчики, кроватки, горшок, имеются ли коляски?'}
                                    answer={'Детские кроватки предоставляются для детей до 4 лет. Детские стульчики, горшок и коляски\n' +
                                    'предоставляются по запросу во время заезда, наличие ограничено.'} key={4}/>
                            </div>
                            <div className={s.col}>
                                <Question title={'Какие кровати в номере?'}
                                          answer={'В каждом номере одна большая или две раздельные кровати.'} key={0}/>
                                <Question title={'Какой вид из номеров?'}
                                          answer={'В корпусе Модерн из номеров открывается вид на город или на море, в корпусе Классик – на алуштинскую улочку или на парк и море.'}
                                          key={1}/>
                                <Question title={'Что входит в стомость проживания?'}
                                          answer={'В стоимость каждого номера включено:\n' +
                                          '<ul><li>Проживание в выбранной категории номера</li>\n' +
                                          '<li>Питание согласно выбранному тарифу: завтрак; завтрак и ужин; завтрак, обед и ужин.</li>\n' +
                                          '<li>Посещение SPA-комплекса</li>\n' +
                                          '<li>Посещение открытой аква-зоны в период ее работы (с мая по конец сентября)</li>\n' +
                                          '<li>Анимация для детей и взрослых</li>\n' +
                                          '<li>Wi Fi</li></ul>'} key={2}/>
                                <Question title={'Сколько в отеле бассейнов? Когда работает открытый бассейн?'}
                                          answer={'На территории отеля находится 2 открытых бассейна, один из них подогревается. Открытые\n' +
                                          'бассейны функционируют в теплое время года: с мая по конец сентября. Также на территории\n' +
                                          'SPA-комплекса есть крытый подогреваемый бассейн, которым гости могут пользоваться круглый\n' +
                                          'год.'} key={3}/>
                                <Question title={'Есть ли в отеле парковка?'}
                                          answer={'В отеле есть паркинг, для гостей места предоставляются бесплатно. Количество мест на парковке ограничено, места не бронируются заранее и предоставляются при наличии на момент заезда.'}
                                          key={4}/>


                            </div>
                        </div>}

                        <HeadlineCenter title={'Можете задать свой вопрос'}/>
                        <div className={s.formWrapper}>
                            <ContactForm withMessage
                                         withEmail
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
