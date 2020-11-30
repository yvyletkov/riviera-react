import React from "react";
import s from "./FoodBlock.module.scss";
import Headline from "../Headline/Headline";
import imageMobile from "../../../img/mice/event-tourism/3.jpg";

const FoodBlock = () => <div className={s.wrapper}>
    <div className={s.container}>
        <div className={s.content}>
            <Headline subtitle={'Изысканные'} title={'Блюда'}/>
            <p className={s.text}>Русская и Черноморская кухня, мясные и рыбные деликатесы, опции для вегетарианцев и
                приверженцев здорового питания, нежные десерты – любой найдет как привычную для себя кухню, так и сможет
                порадовать себя чем-то новым.</p>
            <p className={s.hashtag}>#соберёмланчбокс</p>
        </div>
    </div>
    <img className={s.imageMobile} src={imageMobile} alt="Фото еды"/>
</div>;

export default FoodBlock;