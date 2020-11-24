import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import s from "../../shared/Button/Button.module.scss";
import cx from "classnames";
import {withRouter} from "react-router-dom";
import {request} from "./../../../api";
import swal from 'sweetalert2';


const Input = ({
                   field, // { name, value, onChange, onBlur }
                   form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                   ...props
               }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <input type="text" className={classNames} {...field} {...props} />
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};

export const ContactForm = ({submitBtnText, withEmail, withPhone, formName, swalText = 'Мы получили вашу заявку 😌', ...props}) => {

    const Schema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком короткое имя 😢')
            .max(50, 'Слишком длинное имя 😢')
            .required('Пожалуйста, введите имя'),
        phone: withPhone ? Yup.string()
            .min(11, 'Введите телефон в формате +7 999 999 99 99')
            .required('Пожалуйста, введите номер телефона') : null,
        email: withEmail ? Yup.string().email('E-mail введен некорректно').required('Пожалуйста, введите E-mail') : null,
    });

    const data = {};

    const onSubmit = (values, {resetForm}) => {
        data.form = {
            "url": `https://rivierasunrise.com${props.location.pathname}`,
            "alias": formName
        };
        data.inputs = [
            {
                "alias": "Имя",
                "value": values.name,
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

            <button style={{width: '100%'}} className={s.button} type="submit">{submitBtnText}</button>
        </Form>
    </Formik>
};

export default withRouter(ContactForm)