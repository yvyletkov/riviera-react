import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import s from "../../shared/Button/Button.module.scss";
import cx from "classnames";
import {withRouter} from "react-router-dom";
import {request} from "../../../api";
import swal from 'sweetalert2';
// import Cleave from "cleave.js"
import Cleave from 'cleave.js/react';

const Input = ({
                   field,
                   type,
                   form: {touched, errors},
                   ...props
               }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <input type={type} className={classNames} {...field} {...props} />
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};

const NumInput = ({
                      field,
                      type,
                      form: {touched, errors},
                      ...props
                  }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <Cleave placeholder="Номер телефона"
                options={{
                    prefix: '+7',
                    delimiters: [' (', ') ', '-', '-'],
                    blocks: [2, 3, 3, 2, 2],
                }}
                className={classNames}
                {...field} {...props}
                type={type}
        />
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};

const LanguageCampForm = ({
                         agreementTextColor = '#000',
                         submitBtnText,
                         setPopupOpen,
                         swalText = 'Мы получили Вашу заявку 😌',
                         textAreaPlaceholder = 'Введите Ваше сообщение',
                         requestUrl, ...props
                     }) => {

    const reAge = /^[1-9]?[0-9]{1}$|^100$/;

    Yup.addMethod(Yup.string, "age", function () {
        return this.test("age", "Некорректный возраст", value =>
            reAge.test(value)
        );
    });

    Yup.addMethod(Yup.string, "exp", function () {
        return this.test("exp", "Некорректные данные", value =>
                reAge.test(value)
        );
    });

    const Schema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком короткое имя 😢')
            .max(25, 'Слишком длинное имя 😢')
            .required('Пожалуйста, введите имя'),
        childrenName: Yup.string()
            .min(2, 'Слишком короткое имя ребенка 😢')
            .max(25, 'Слишком длинное имя ребенка 😢')
            .required('Пожалуйста, введите имя ребенка'),
        phone: Yup.string()
            .min(18, 'Номер введен неверно')
            .max(18, 'Слишком длинный номер телефона 😢')
            .required('Это поле тоже обязательное'),
        childrenAge: Yup.string()
            .min(1, 'Введите корректный возраст')
            .max(2, 'Возраст указан не корректно 😢')
            .age()
            .required('Это поле тоже обязательное'),
        childrenExp: Yup.string()
            .min(1, 'Введите корректный опыт')
            .max(2, 'Не корректно заполнено поле 😢')
            .exp()
            .required('Это поле тоже обязательное'),
    });

    const data = {};


    const onSubmit = (values, {resetForm}) => {
        data.form = {
            "url": `${requestUrl ? requestUrl : window.location.href}`
        };
        data.inputs = [
            {
                "alias": "Источник",
                "value": "Форма обратной связи с Языкового лагеря",
            },
            {
                "alias": "Имя",
                "value": values.name,
            },
            {
                "alias": "Номер телефона",
                "value": values.phone,
            },
            {
                "alias": "Имя ребенка",
                "value": values.childrenName,
            },
            {
                "alias": "Возраст ребенка",
                "value": values.childrenAge,
            },
            {
                "alias": "Сколько лет изучает язык",
                "value": values.childrenExp,
            },
        ];
        request(data)
            .then((response) => {
                if (response.status === 200) {
                        const name = values.name[0].toUpperCase() + values.name.slice(1);
                        swal.fire({
                            title: `Спасибо, ${name}!`,
                            text: swalText,
                            icon: 'success',
                            confirmButtonText: 'Хорошо'
                        });
                }
                else throw response
            })
            .catch((err) => {
                swal.fire({
                    title: 'При отправке данных произошла ошибка 🤭',
                    text: 'Мы уже работаем над ее исправлением!',
                    icon: 'error',
                    confirmButtonText: 'Хорошо'
                })
                console.log(err)
            });
        resetForm({})

    };


    return <Formik
        initialValues={{
            name: '',
            phone: '',
            childrenName: '',
            childrenExp: '',
            childrenAge: '',
        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <Form>
            <Field component={Input} name="name" placeholder={'Введите Ваше имя'}/>
            <Field component={NumInput} name="phone" type={"text"} placeholder={'Введите Ваш телефон'}/>
            <Field component={Input} name="childrenName" placeholder={'Введите имя ребенка'}/>
            <Field component={Input} name="childrenAge" min={7} type={"number"} placeholder={'Введите возраст ребенка'}/>
            <Field component={Input} name="childrenExp" min={1} type={"number"} placeholder={'Сколько лет изучает язык'}/>
            <div className="agreementBlock">
                <input className="agreementCheckbox" type="checkbox" required/>
                <label htmlFor="checkbox-agreement">
                    <p className="checkboxText"
                       style={{color: agreementTextColor}}>Даю&nbsp;
                        <a className="checkboxText"
                           style={{textDecoration: 'underline', color: agreementTextColor}}
                           href="/document-files/Политика-обработки-персональных-данных.pdf"
                           target="_blank">согласие на обработку персональных данных
                        </a>
                    </p>
                </label>
            </div>
            <button style={{width: '100%'}}
                    className={s.button}
                    type="submit">{submitBtnText}
            </button>
        </Form>
    </Formik>
};

export default withRouter(LanguageCampForm)
