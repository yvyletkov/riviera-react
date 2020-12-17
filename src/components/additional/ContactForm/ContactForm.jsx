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
                   form: {touched, errors},
                   ...props
               }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <input type="text" className={classNames} {...field} {...props} />
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

const ContactForm = ({submitBtnText, withEmail, withPhone, withMessage, formName, swalText = 'Мы получили Вашу заявку 😌', textareaPlaceholder = 'Введите Ваше сообщение', ...props}) => {

    const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    Yup.addMethod(Yup.string, "phone", function() {
        return this.test("phone", "Некорректный номер", value =>
            rePhoneNumber.test(value)
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
            "url": `https://rivierasunrise.com${props.location.pathname}`
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
            {withEmail && <Field component={Input} name="email" placeholder={'Введите Ваш E-mail'}/>}
            {withPhone && <Field component={Input} name="phone" placeholder={'Введите Ваш телефон'}/>}
            {withMessage && <Field component={Textarea} name="message" placeholder={textareaPlaceholder}/>}

            <button style={{width: '100%'}} className={s.button} type="submit">{submitBtnText}</button>
        </Form>
    </Formik>
};

export default withRouter(ContactForm)