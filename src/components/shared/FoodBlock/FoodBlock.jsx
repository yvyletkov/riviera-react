import React from "react";
import s from "./FoodBlock.module.scss";
import Headline from "../Headline/Headline";
import imageMobile from "../../../img/mice/event-tourism/3.jpg";

const FoodBlock = ({
                       title = 'Блюда',
                       subtitle = 'Изысканные',
                       text = 'Русская и Черноморская кухня, мясные и рыбные деликатесы, опции для вегетарианцев и приверженцев здорового питания, нежные десерты – любой найдет как привычную для себя кухню, так и сможет порадовать себя чем-то новым.',
                       hashtag = '#соберёмланчбокс',
                       listArray
                   }) => <div className={s.wrapper}>
    <div className={s.container}>
        <div className={s.content}>
            <Headline subtitle={subtitle} title={title}/>
            {listArray ?
                <ul className={s.text}>
                    {listArray.map((el) => <li>{el}</li>)}
                </ul> :
                <p className={s.text}>{text}</p>
            }
            <p className={s.hashtag}>{hashtag}</p>
        </div>
    </div>
    <img className={s.imageMobile} src={imageMobile} alt="Фото еды"/>
</div>;

export default FoodBlock;
