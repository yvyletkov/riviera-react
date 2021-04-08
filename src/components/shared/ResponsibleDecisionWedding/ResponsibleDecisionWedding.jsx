import React from 'react';
import s from "./ResponsibleDecisionWedding.module.scss";
import Headline from "../Headline/Headline";
import ContactForm from "../../additional/ContactForm/ContactForm";
import bookImg from "../../../img/events/book.png";
import flowerImg from "../../../img/events/flower.png";
import leafsImg from "../../../img/events/leafs.png";

const ResponsibleDecisionWedding = () => {
    return (
        <div className={s.weddingDecisionBlock}>
            <div className={s.wrapper}>
                <div className={s.grid}>
                    <div className={s.textBlock}>
                        <Headline subtitle={'Вам предстоит'}
                                  title={'Решение'}
                                  subtitle1={'Ответственное'}
                                  styleTitle={{fontFamily: '"Helvetica Neue Black", sans-serif'}}/>
                        <p>Лучше принимать его, владея полной информацией. Получите на свою почту все необходимые
                            материалы для принятия решения о проведении свадьбы в нашем отеле.
                        </p>

                        <ContactForm submitBtnText={'Получить буклет на почту'}
                                     formName={`Форма "Вам предстоит ответсвенное решение" (скачать коммерческое предложение)`}
                                     withEmail
                                     withName={false}
                                     withDocument
                                     swalText={'мы отправим всю необходимую информацию на указанную Вами почту в самое ближайшее время!'}
                                     requestUrl={'https://event.rivierasunrise.ru'}/>
                    </div>

                    <div className={s.imageBlock}>
                        <img className={s.bookImg} src={bookImg} alt='книга'/>
                        <img className={s.flowerImg} src={flowerImg} alt='цветы'/>
                        <img className={s.leafsImg} src={leafsImg} alt='листья'/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResponsibleDecisionWedding;
