import React from 'react';
import './style.css'
// import compensationImg from "../../../img/cashback/evolution.jpg"
import mirlogo from "../../../img/cashback/cashback-MIR-logo.png"
import registration from "../../../img/cashback/cashback-registration.png"
import travel from "../../../img/cashback/cashback-travel.png"
import money from "../../../img/cashback/cashback-money.png"
import pay from "../../../img/cashback/cashback-pay.png"
import mirCard from "../../../img/cashback/cashback-MIR-card.png"
import beach from "../../../img/cashback/cashback-beach.png"
import Headline from "../../shared/Headline/Headline";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import {NavLink} from "react-router-dom";

const Cashback = () => {

    React.useEffect(() => document.title = `Кэшбэк на отдых – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <main style={{marginTop: '70px'}}>

        <div className="cashback-banner">
            <div className="cashback-banner_dark-filter"/>
            <h1>Кэшбэк на отдых</h1>
            <h2>До 20 000 рублей</h2>
            <div className="cashback-banner__MIR-block">
                <p>Ростуризм и карта «МИР» возобновили программу туристического кэшбэка! За каждый забронированный тур
                    Вы можете получить кэшбэк в размере 20%, или не более 20 тысяч рублей.</p>
                <img src={mirlogo} alt="MIR logo"/>
            </div>
        </div>

        <div className="cashback-instruction">
            <HeadlineCenter title={'Как получить кэшбэк?'} style={{marginBottom: '15px'}}/>
            <p>Всё просто! Следуйте пошаговой инструкции</p>
            <div className="cashback-instruction__steps">

                <div className="cashback-instruction__steps__item">
                    <span>01</span>
                    <img src={registration} alt="Регистрация"/>
                        <p>Оформите карту «Мир» и зарегистрируйтесь в программе лояльности</p>
                        <div className="cashback-instruction__steps__item__button orange">
                            <a href="https://privetmir.ru/register/" target="_blank">Зарегистрироваться</a>
                        </div>
                </div>

                <div className="cashback-instruction__steps__item">
                    <span>02</span>
                    <img src={travel} alt="Поездка"/>
                        <p>Забронируйте поездку<br/>в Riviera Sunrise<br/><br/></p>
                        <div className="cashback-instruction__steps__item__button orange">

                            <NavLink to="/booking/?promo-offer=mir&utm_campaign=mir3"
                               target="_blank">Забронировать</NavLink>

                        </div>

                </div>

                <div className="cashback-instruction__steps__item">
                    <span>03</span>
                    <img src={money} alt="Деньги"/>
                        <p>Оплатите банковской картой любого банка<br/>
                            платежной системы «МИР»<br/>
                            100% стоимости тура</p>
                </div>

                <div className="cashback-instruction__steps__item">
                    <span>04</span>
                    <img src={pay} alt="Компенсация"/>
                        <p>Получите Кэшбэк<br/>
                            до 20 тыс. руб.<br/>
                            в течение 5 рабочих дней</p>
                </div>

            </div>
        </div>

        <div className="cashback-terms">
            <div className="cashback-terms__grid">

                <div className="cashback-terms__text-block">
                    <Headline title="В программе" subtitle="Как поучаствовать" />
                    <ul>
                        <li>Быть участником программы лояльности держателей карты «Мир». Чтобы вступить, регистрируйтесь
                            на
                            сайте «Мира».
                        </li>
                        <li>Бронирование должно быть сделано на даты с</li>
                        <li>Продолжительность проживания составляет не более 20 ночей.</li>
                        <li>Стоимость путевки может быть любой. Ограничений на минимальную сумму нет.</li>
                        <li>Производится 100% предоплата услуги на официальном сайте,
                            с использованием платежной системы Мир, по карте любого банка.
                        </li>
                        <li>Акция действует до</li>
                    </ul>
                </div>
                <div className="cashback-terms__MIR-card-image">
                    <img src={mirCard} alt="Карта МИР"/>
                </div>
                <p className="cashback-terms__desc">
                    Количество покупок с кэшбэком по одной карте — не ограничено<br/>
                    Размер кэшбэка — <b>20% от стоимости покупки, но не более 20 000 р</b>
                </p>
            </div>
        </div>

        <div className="cashback-compensation">
            <div className="cashback-compensation-grid">

                <div className="cashback-compensation__image-block">
                    <img src={beach} alt="Пляжный кэшбэк"/>
                </div>

                <div className="cashback-compensation__text-block">
                    <Headline subtitle={'Получение'} title={'Компенсации'} />
                    <p>Получение компенсации производится на карту Мир, с которой была произведена оплата и
                        составляет:</p>
                    <ul>
                        <li><span>Возврат больше:</span> 20% от стоимости поездки или не более 20 тысяч рублей</li>
                        <li><span>Условий меньше:</span> при стоимости от 50 000 рублей</li>
                        <li>при стоимости от * получение компенсации производится на карту Мир с которой была
                            произведена
                            оплата в течение пяти рабочих дней

                        </li>
                    </ul>
                    <p className="bottom">Бронировать можно несколько раз с одной карты, но максимальный кэшбэк на одну
                        карту
                        составит 20 000 рублей</p>
                    <div className="cashback-compensation__button">

                        <NavLink to="/booking/?promo-offer=mir"
                           target="_blank">
                            Забронировать номер с кэшбэком</NavLink>

                    </div>
                </div>

            </div>
        </div>

        {/* <div className="cashback-compensation">
            <div className="cashback-compensation-grid">

                <div className="cashback-compensation__text-block" style={{'padding':'102px 52px 0 0'}}>
                    <h3>Кешбэк 20%
                        <div>при оплате картой «Мир»</div>
                    </h3>
                    <p>Получите кешбэк до 20 000 ₽ за каждое бронирование на нашем официальном сайте!
                        <br/><br/>
                        С * совершите бронирование с оплатой на официальном сайте и получите кешбэк 20%.
                        Забронировать и оплатить по акции можно
                        <b>2 и более ночи на период с 15 октября 2020 года по 31 декабря 2021 включительно.</b>
                    </p>
                    <p>Чтобы получить кешбэк:</p>
                    <ul>
                        <li>Зарегистрируйте вашу карту «Мир» в программе лояльности платёжной системы «Мир».</li>
                        <li>С * - забронируйте и оплатите проживание на сайте.</li>
                        <li>Выберите проживание от 2 ночей на период с 15 октября 2020 года по 31 декабря 2021
                            включительно.
                        </li>
                        <li>Выберите тариф, отмеченный знаком «Кешбэк по карте «Мир».</li>
                        <li>Оплатите полную стоимость бронирования на нашем сайте банковской картой «Мир».</li>
                    </ul>
                    <p className="cashback-compensation__desc">Кешбэком вам вернётся 20% от суммы бронирования, но не
                        более 20
                        000 ₽ за одну бронь. Количество
                        бронирований по одной карте не ограничено, вы можете получить кешбэк несколько раз.</p>
                </div>

                <div className="cashback-compensation__image-block">
                    <img style={{'right':'unset','left':'13px','height':'95%'}} src={mirlogo}
                         alt="Пляжный кэшбэк"/>
                </div>

            </div>
            </div>*/}

    </main>
}

export default Cashback;