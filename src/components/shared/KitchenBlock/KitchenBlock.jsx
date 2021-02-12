import React from "react";
import s from "./KitchenBlock.module.scss";
import kitchenImg1 from "../../../img/events/wedding/kitchen1.jpg";
import kitchenImg2 from "../../../img/events/wedding/kitchen2.jpg";
import menuPriceImg from "../../../img/events/wedding/menuPrice.png";
import Headline from "../Headline/Headline";
import Button from "../Button/Button";
import 'rodal/lib/rodal.css';
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";

const KitchenBlock = ({firstImg = kitchenImg1, btnLink = ''}) => {

    let [popupOpen, setPopupOpen] = React.useState(false);


    return <div id='food' className={s.wrapper}>
        <div className={s.container}>
            <img className={s.rightImg} src={kitchenImg2} alt=""/>
            <img className={s.menuPriceImg} src={menuPriceImg} alt="Стоимость меню"/>

            <div className={s.textContent}>
                <Headline subtitle={'Вас ожидает'} title={'Изысканная кухня'}/>
                <p>
                    Наши профессиональные повара во главе с бренд-шефом Андреем Поляшовым создали уникальные
                    композиции из нескольких курсов для ценителей вкусной и сытной кухни. Гости будут в
                    восторге!
                </p>
                <img className={s.leftImg} src={firstImg} alt=""/>

                <Button text={btnLink ? "Посмотреть меню" : "Получить меню"} onClick={btnLink ? () => window.open(btnLink) : () => setPopupOpen(true)}
                        style={window.matchMedia("screen and (max-width: 768px)").matches ? {width: "100%"} : {width: "230px"}}/>

                <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                  popupTitleText={'Для этого, пожалуйста, оставьте свои контактные данные️'}
                                  submitBtnText={"Получить меню"}
                                  formName={`Форма из блока "Вас ожидает изысканная кухня" (получить меню) ${window.location.href}`}
                                  swalText={'мы отправим всю необходимую информацию на указанную Вами почту в самое ближайшее время!'}
                                  withEmail/>

            </div>
        </div>
    </div>
};

export default KitchenBlock;
