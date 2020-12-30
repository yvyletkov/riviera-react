import React from "react";
import s from "./NewYearPage.module.scss";
import bannerImg from "../../../img/new-year/new-year-banner.png";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import newYearPool from "../../../img/new-year/new-year-pool.jpg";

const NewYearPage = () => {

    return (<>
            <section className='section'>
                <div className={s.bannerWrapper} style={{background: `center top url(${bannerImg})`}}/>
            </section>


            <section className='section'>
                <div className={s.contentWrapper}>
                    <div className={s.container}>

                        <div className={s.topRow}>
                            <h1 className={s.title}>
                                <span>Дорогой</span>
                                <span>гость</span>
                            </h1>
                            <div className={s.textContent}>
                                <p>Мы рады пригласить Вас на новогодний ужин в ОТЕЛЬ-КАЗИНО 31 декабря 2020 года.
                                    <br/>
                                    Напоминаем, что пропуском на вечеринку будут шикарные вечерние платья, изысканные
                                    украшения и прически для дам, смокинги и шляпы для мужчин.
                                    <br/>
                                    <br/>
                                    Напоминаем, о необходимости предоставлении отрицательного теста на наличие COVID-19, оформленного не ранее, чем за 2 суток до выезда из дома.
                                    Максимальный срок действия справки 5 календарных дней с даты получения.
                                    <br />
                                    <br />
                                    Мероприятия проводящийся в отеле для проживающих гостей учитывают все санитарные
                                    нормы и правила Роспотребнадзора, соблюдается социальная дистанция и правила
                                    дезинфекции помещений.
                                </p>
                            </div>
                        </div>

                        <div className={s.flexWrapper}>
                            <div className={s.col}>
                                <h2 style={{textAlign: 'center', padding: '15px'}}>31 декабря</h2>
                                <ul>
                                    <li>16:00 - Welcome cocktail В последний день уходящего года ждем Вас в Lobby
                                        первого
                                        этажа корпуса Modern
                                    </li>
                                    <li>18:00 - Праздничный ужин в Ball room и ресторан The Grilled на первом этаже
                                        корпуса
                                        Modern
                                    </li>
                                    <li>Спа-центр THE SHORE SPA работает до 20:00</li>
                                </ul>
                            </div>

                            <div className={s.col}>
                                <h2 style={{textAlign: 'center', padding: '15px'}}>1 января</h2>
                                <ul>
                                    <li>8:00 - 13.00 Поздний завтрак с безлимитным шампанским</li>
                                    <li>13:00 до 16:00 Barbecue-party у моря</li>
                                </ul>
                            </div>
                        </div>
                        <p className={s.text}><b>Все новогодние каникулы завтраки с безлимитным шампанским!</b></p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className={s.schedulePoolBlock}>
                    <div className={s.wrapper}>
                        <img src={newYearPool} alt="работа бассейна"/>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className={s.scheduleBlock}>
                    <div className={s.wrapper}>
                        <div className={s.container}>
                            <div className={s.col8}>
                                <p>
                                    В Новогодние каникулы для самых важных гостей, команда анимации отеля приготовила
                                    увлекательную
                                    программу детям всех возрастов.
                                    За время каникул мы познакомим малышей с традициями разных стран мира, побываем в
                                    далекой Америке,
                                    на Венецианском карнавале и в Восточной сказке, а в Рождество проведем традиционные
                                    народные
                                    колядки.
                                    В программе участие в увлекательных кулинарных мастер – классах, розыгрышах
                                    подарков, флешмобах и
                                    уроках от фокусника, изготовления слаймов и живописью
                                </p>
                                <p><b>Подробная программа досуга будет доступна каждый день в Вашем номере</b></p>
                                <p>
                                    Порадуйте Ваших детей неожиданной встречей с Дедом Морозом и Снегурочки,
                                    остановившихся в наших теплых краях на новогодние каникулы!
                                    Вопросы по приглашению Деда Мороза адресуйте в электронному консьержу Ривве или на
                                    стойку регистрации.
                                </p>
                            </div>
                            <div className={s.col4}>
                                <p>Маршрут сказочного путешествия:</p>
                                <ul>
                                    <li>31 декабря - Казино Wonderland</li>
                                    <li>1 января - Страны народов мира</li>
                                    <li>2 января - Мультличности</li>
                                    <li>3 января - Чикаго</li>
                                    <li>4 января - Венецианский карнавал</li>
                                    <li>5 января - Восточная сказка</li>
                                    <li>6 января - Русский-народный</li>
                                    <li>7 января - Стиляги</li>
                                    <li>8 января - Гавайский Новый год</li>
                                    <li>9 января - Приключения индейцев</li>
                                    <li>10 января –Диско</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section cl>
                <div className={s.scheduleRestBlock}>
                    <div className={s.wrapper}>
                        <div className={s.container}>
                            <p>
                                Для гостей отеля каждый вечер будут проводится вечернее шоу, турниры по настольным и
                                спортивным
                                играм, ужины в ресторане с музыкальным сопровождением.
                                А СПА-центре THE SHORE SPA на территории отеля, для вас доступна Аква термальная зона,
                                тренажерный
                                зал.
                            </p>
                            <p>
                                Планируйте свой отдых, приезжайте и получайте максимум приятных эмоций от времени,
                                проведенного
                                вместе с нами!
                            </p>
                            <HeadlineCenter title="Для вас работают" style={{margin:'30px auto 0'}} />
                            <div className={s.flexWrapper}>
                                <div className={s.col}>
                                    <h2 style={{textAlign: 'center', padding: '15px'}}>Ресторан  «Tavrika»</h2>
                                    <p>Питание по системе «Шведский стол»</p>
                                    <ul>
                                        <li>Завтрак 08:00 — 10:30</li>
                                        <li>Обед 13:00 — 15:00</li>
                                        <li>Ужин 18:00 — 21:00</li>
                                    </ul>
                                </div>
                                <div className={s.col}>
                                    <h2 style={{textAlign: 'center', padding: '15px'}}>Ресторан  «The Grilled»</h2>
                                    <p>Питание по системе «Шведский стол»</p>
                                    <ul>
                                        <li>Завтрак 08:00 — 10:30</li>
                                        <li>A la Carte с 12:00 до 22:00</li>
                                    </ul>
                                </div>
                                <div className={s.col}>
                                    <h2 style={{padding: '15px'}}>Лобби-бар «Mangup»</h2>
                                    <ul>
                                        <li>08:00-22:00</li>
                                    </ul>
                                    <h2 style={{padding: '15px'}}>Фитобар в СПА-центре THE SHORE SPA</h2>
                                    <ul>
                                        <li>9:00-18:00</li>
                                    </ul>
                                    <h2 style={{padding: '15px'}}>Рум сервис</h2>
                                    <ul>
                                        <li>с 31 декабря работает круглосуточно, заказ блюд по номеру 7777</li>
                                    </ul>
                                </div>
                                <div className={s.col}>
                                    <h2 style={{padding: '15px'}}>Расписание занятий в THE SHORE SPA</h2>
                                    <ul>
                                        <li>10:30 - Дыхательная гимнастика</li>
                                        <li>10:45 - Стретчинг</li>
                                        <li>11:30 - Аквааэробика</li>
                                        <li>16:00 - Дыхательная гимнастика</li>
                                        <li>16:15 - Йога</li>
                                        <li>17:00 – Аквааэробика</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewYearPage;
