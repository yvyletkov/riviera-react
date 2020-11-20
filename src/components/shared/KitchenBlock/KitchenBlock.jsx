import React from "react";
import s from "./KitchenBlock.module.scss";
import kitchenImg1 from "../../../img/events/wedding/kitchen1.jpg";
import kitchenImg2 from "../../../img/events/wedding/kitchen2.jpg";
import menuPriceImg from "../../../img/events/wedding/menuPrice.png";
import Headline from "../Headline/Headline";
import Button from "../Button/Button";

const KitchenBlock = ({firstImg = kitchenImg1}) => {
    return <div className={s.wrapper}>
        <div className={s.container}>
            <img className={s.leftImg} src={firstImg} alt=""/>
            <img className={s.rightImg} src={kitchenImg2} alt=""/>
            <div className={s.textContent}>
                <img className={s.menuPriceImg} src={menuPriceImg} alt="Стоимость меню"/>
                <Headline subtitle={'Вас ожидает'} title={'Изысканная кухня'}/>
                <p>
                    Наши профессиональные повара во главе с бренд-шефом Андреем Поляшовым создали уникальные
                    композиции из нескольких курсов для ценителей вкусной и сытной кухни. Гости будут в
                    восторге!
                </p>
                <p><b>Получите на свою почту полное меню банкета!</b></p>
                <Button text={"Получить меню"}
                        style={!window.matchMedia("(max-width: 768px").matches ? {width: "230px"} : {}}/>
            </div>
        </div>
    </div>
};

export default KitchenBlock;
