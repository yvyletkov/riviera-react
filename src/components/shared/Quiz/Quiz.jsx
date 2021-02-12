import React, {useRef, useState} from "react";
import s from "./Quiz.module.scss";
import img from "../../../img/quiz/quiz-img.png";
import Button from "../Button/Button";
import leafImg from "../../../img/quiz/leaf.png";
import {quizQuestions} from "../../../data";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";
import mobImg from "../../../img/quiz/quiz-mob.jpg";


const Quiz = () => {
    const inputRef = useRef();
    const [currentQuestion, setNumQuestion] = useState(0);
    const [currentAnswer, setNumAnswer] = useState(0);
    const [answers, setAnswers] = useState('');
    let [popupOpen, setPopupOpen] = React.useState(false);

    const answerList = quizQuestions[currentQuestion].answers.map((ans, idx) => {
        return (
            <div className={s.radioBlock}>
                <input type="radio"
                       name="1"
                       ref={idx === 0 ? inputRef : null}
                       value={ans}
                       onClick={() => setNumAnswer(idx)}/>
                <span>{ans}</span>
            </div>
        )
    })

    console.log(answers)

    return (
        <section className={s.bannerWrapper}>
            <img src={leafImg} className={s.leafImg} alt="Листва"/>
            <div className={s.container}>
                <div className={s.leftSide}>
                    <div className={s.pageNameBlock}>
                        <p className={s.desc}>Ответьте на несколько вопросов и получите расчёт стоимости
                            путешествия</p>
                        <h2>{quizQuestions[currentQuestion].question}</h2>
                        <p className={s.text}>Отметьте вариант ответа</p>
                        {answerList}
                    </div>
                    <Button text="Следующий вопрос" onClick={
                        currentQuestion < 3 ? () => {
                                setNumQuestion(currentQuestion + 1)
                                inputRef.current.checked = true
                                setAnswers(answers +
                                    `${quizQuestions[currentQuestion].question} - ${
                                    quizQuestions[currentQuestion].answers[currentAnswer]}; <br/>`)

                            } :
                            () => setPopupOpen(true) }/>
                </div>
                <div className={s.rightSide}>
                    <img src={img} alt="Riviera Sunrise"/>
                </div>
                <img className={s.mobileImg} src={mobImg} alt="Riviera Sunrise" />
            </div>

            <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                              popupTitleText={'Чтобы получить чек-лист, пожалуйста, оставьте свои контактные данные️'}
                              submitBtnText='Скачать чек-лист'
                              formName={`Форма из блока чёрного цвета "Сомневаетесь в площадке?" (скачать чек-лист)`}
                              swalText={'мы отправим чек-лист на указанную Вами почту в самое ближайшее время!'}
                              withPhone
                              withMessage
                              withHiddenInput
                              hiddenInputValue={answers}/>

        </section>
    )
};

export default Quiz;
