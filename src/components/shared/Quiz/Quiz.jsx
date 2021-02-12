import React, {useRef, useState} from "react";
import s from "./Quiz.module.scss";
import Button from "../Button/Button";
import leafImg from "../../../img/quiz/leaf.png";
import {quizQuestions} from "../../../data";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";

const Quiz = ({img, imgMob}) => {
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
                <img className={s.mobileImg} src={imgMob} alt="Riviera Sunrise" />
            </div>

            <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                              popupTitleText={'Оставьте свои данные и мы перезвоним Вам!'}
                              submitBtnText='Отправить'
                              formName={`Форма обратной связи с опросника`}
                              swalText={'наши менеджеры обязательно свяжутся с Вами!'}
                              withPhone
                              withMessage
                              withHiddenInput
                              hiddenInputValue={answers}/>

        </section>
    )
};

export default Quiz;
