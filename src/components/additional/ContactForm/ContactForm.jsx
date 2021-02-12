import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import s from "../../shared/Button/Button.module.scss";
import cx from "classnames";
import {withRouter} from "react-router-dom";
import {request} from "./../../../api";
import swal from 'sweetalert2';


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

const Select = ({
                   field,
                   type,
                   form: {touched, errors},
                   ...props
               }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <select type={type} style={{color:'#bababa'}} className={classNames} {...field} {...props} >
            <option value="default" hidden selected>Выберите дату</option>
            <option value="Дата 20.03-27.03">с 20 по 27 марта </option>
            <option value="Дата 3.04-10.04">с 3 по 10 апреля</option>
        </select>
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};

const Textarea = ({
                   field,
                   form: {touched, errors},
                   ...props
               }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <textarea rows={6} className={classNames} {...field} {...props} />
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};

const ContactForm = ({
                         submitBtnText,
                         withEmail,
                         withPhone,
                         withMessage,
                         withAge,
                         withDate,
                         withHiddenInput,
                         hiddenInputValue,
                         formName,
                         swalText = 'Мы получили Вашу заявку 😌',
                         textAreaPlaceholder = 'Введите Ваше сообщение',
                         requestUrl, ...props}) => {

    const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    const reAge = /^[1-9]?[0-9]{1}$|^100$/;
    Yup.addMethod(Yup.string, "phone", function() {
        return this.test("phone", "Некорректный номер", value =>
            rePhoneNumber.test(value)
        );
    });

    Yup.addMethod(Yup.string, "age", function() {
        return this.test("age", "Некорректный возраст", value =>
            reAge.test(value)
        );
    });

    const Schema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком короткое имя 😢')
            .max(25, 'Слишком длинное имя 😢')
            .required('Пожалуйста, введите имя'),
        phone: withPhone ? Yup.string()
            .min(11, 'Пожалуйста, в формате +7xxxxxxxxxx')
            .max(16, 'Слишком длинный номер телефона 😢')
            .phone()
            .required('Это поле тоже обязательное') : null,
        age: withAge ? Yup.string()
            .min(1, 'Введите корректный возраст')
            .max(2, 'Возраст указан не корректно 😢')
            .age()
            .required('Это поле тоже обязательное') : null,
        date: withDate && Yup.string().required('Пожалуйста, выберите дату'),
        email: withEmail ? Yup.string()
            .email('E-mail введен некорректно')
            .required('Это поле тоже обязательное') : null,
        message: withMessage ? Yup.string()
            .min(2, 'Слишком мало букв 😢')
            .max(3000, 'Слишком много букв 😢')
            .required('Пожалуйста, введите текст сообщения') : null,
    });

    const data = {};



    const onSubmit = (values, {resetForm}) => {
        data.form = {
            "url": `${requestUrl ? requestUrl : window.location.href}`
        };
        data.inputs = [
            {
                "alias": "Имя",
                "value": values.name,
            },
            {
                "alias": "Источник",
                "value": formName,
            }
        ];
        if (withPhone) data.inputs = [
            ...data.inputs,
            {
                "alias": "Номер телефона",
                "value": values.phone,
            },
        ];
        if (withEmail) data.inputs = [
            ...data.inputs,
            {
                "alias": "E-mail",
                "value": values.email,
            },
        ];
        if (withMessage) data.inputs = [
            ...data.inputs,
            {
                "alias": "Сообщение",
                "value": values.message,
            },
        ];
        if (withAge) data.inputs = [
            ...data.inputs,
            {
                "alias": "Возраст",
                "value": values.age,
            },
        ];
        if (withDate) data.inputs = [
            ...data.inputs,
            {
                "alias": "Дата",
                "value": values.date,
            },
        ];
        if (withHiddenInput) data.inputs = [
            ...data.inputs,
            {
                "alias": "Ответы на вопросы",
                "value": values.hidden,
            },
        ];

        request(data)
            .then((response) => {
                if (response.status === 200) {
                    const name = values.name[0].toUpperCase() + values.name.slice(1);
                    // const text = values.name + ', ' + swalText;
                    swal.fire({
                        title: `Спасибо, ${name}!`,
                        text: swalText,
                        icon: 'success',
                        confirmButtonText: 'Хорошо'
                    })
                }
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

        console.log('values', data);

    };


    return <Formik
        initialValues={{
            name: '',
            phone: '',
            email: '',
        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <Form>
            <Field component={Input} name="name" placeholder={'Введите Ваше имя'}/>
            {withEmail && <Field component={Input} name="email" type={"text"} placeholder={'Введите Ваш E-mail'}/>}
            {withPhone && <Field component={Input} name="phone" type={"text"} placeholder={'Введите Ваш телефон'}/>}
            {withMessage && <Field component={Textarea} name="message" placeholder={textAreaPlaceholder}/>}
            {withAge && <Field component={Input} name="age" type={"number"} placeholder="Введите ваш возраст"/>}
            {withDate && <Field component={Select} name="date" type={"select"}/>}
            {withHiddenInput && <Field component={Input} name="hidden" type={"hidden"} value={hiddenInputValue}/>}
            <div className="agreementBlock">
                <input className="agreementCheckbox" id="checkbox-agreement" type="checkbox" required/>
                <label htmlFor="checkbox-agreement">
                    <p className="checkboxText">Даю&nbsp;
                        <a className="checkboxText"
                           style={{textDecoration:'underline'}}
                           href="/documents/Политика-обработки-персональных-данных.pdf"
                           target="_blank">согласие на обработку персональных данных
                        </a>
                    </p>
                </label>
            </div>
            <button style={{width: '100%'}} className={s.button} type="submit">{submitBtnText}</button>
        </Form>
    </Formik>
};

export default withRouter(ContactForm)
