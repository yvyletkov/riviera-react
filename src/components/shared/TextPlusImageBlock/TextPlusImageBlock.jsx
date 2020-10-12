import React from "react";
import s from "./TextPlusImageBlock.module.scss"

const TextPlusImageBlock = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.grid}>

                <div className={s.imageBlock}>
                    <img src="http://evolutionsport.ru/cashback/assets/images/cashback-beach.png" alt="Пляжный кэшбек"/>
                </div>

                <div className={s.textBlock}>
                    <h3>Получение
                        <div>компенсации</div>
                    </h3>
                    <p>Получение компенсации производится на карту Мир, с которой была произведена оплата и
                        составляет:</p>
                    <ul>
                        <li><span>5 000 рублей</span> при стоимости от 25 000 рублей</li>
                        <li><span>10 000 рублей</span> при стоимости от 50 000 рублей</li>
                        <li><span>15 000 рублей</span> при стоимости от 75 000 рублей</li>
                    </ul>
                    <p className={s.bottom}>Бронировать можно несколько раз с одной карты, но максимальный кэшбэк на одну
                        карту составит 15 000 рублей</p>
                    <div className={s.button}>
                        <a href="http://evolutionsport.ru/booking/?promo-offer=mir" target="_blank">Забронировать номер
                            с кэшбэком</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TextPlusImageBlock;