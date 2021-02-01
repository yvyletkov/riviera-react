import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import s from "../../shared/Button/Button.module.scss";
import cx from "classnames";
import {withRouter} from "react-router-dom";
import {request} from "../../../api";
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

const PartnersForm = (props) => {

    const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    Yup.addMethod(Yup.string, "phone", function() {
        return this.test("phone", "Некорректный номер", value =>
            rePhoneNumber.test(value)
        );
    });

    const Schema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком коротко')
            .max(50, 'Слишком длинные ФИО')
            .required('Пожалуйста, введите имя'),
        phone: Yup.string()
            .min(11, 'Пожалуйста, в формате +7xxxxxxxxxx')
            .max(16, 'Слишком длинный номер телефона')
            .phone()
            .required('Пожалуйста, введите номер телефона'),
        email: Yup.string()
            .email('E-mail введен некорректно')
            .required('Пожалуйста, введите почту'),
        message: Yup.string()
            .min(2, 'Слишком мало букв 😢')
            .max(3000, 'Слишком много букв 😢')
            .required('Пожалуйста, введите текст сообщения'),
        juridical: Yup.string()
            .max(50, 'Слишком длинное название')
            .required('Пожалуйста, введите юридическое название'),
        commercial: Yup.string()
            .max(50, 'Слишком длинное название')
            .required('Пожалуйста, введите коммерческое название'),
        website: Yup.string()
            .min(3, 'Слишком короткая ссылка')
            .max(300, 'Слишком длинная ссылка')
    });

    const data = {};

    const onSubmit = (values, {resetForm}) => {
        data.form = {
            "url": `https://partners.rivierasunrise.ru/partners`
        };
        data.inputs = [
            {
                "alias": "Источник",
                "value": "Форма со страницы Партнёрам",
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
                "alias": "E-mail",
                "value": values.email,
            },
            {
                "alias": "Юридическое название",
                "value": values.juridical,
            },
            {
                "alias": "Коммерческое название",
                "value": values.commercial,
            },
            {
                "alias": "Вебсайт",
                "value": values.website,
            },
            {
                "alias": "Сообщение",
                "value": values.message,
            },
        ];

        request(data)
            .then((response) => {
                if (response.status === 200) {
                    const name = values.name[0].toUpperCase() + values.name.slice(1);
                    swal.fire({
                        title: `Спасибо, ${name}!`,
                        text: 'ваше предложение будет рассмотрено в самое ближайшее время',
                        icon: 'success',
                        confirmButtonText: 'Отлично'
                    })
                }
            })
            .catch((err) => {
                swal.fire({
                    title: 'К сожалению, при отправке данных произошла ошибка 🤭',
                    text: 'Мы уже работаем над ее исправлением!',
                    icon: 'error',
                    confirmButtonText: 'Понятно'
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
            juridical: '',
            commercial: '',
            website: '',
            message: '',
        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <Form>
            <Field component={Input} name="name" placeholder={'Введите ФИО'}/>
            <Field component={Input} name="phone" placeholder={'Введите номер телефона'}/>
            <Field component={Input} name="email" placeholder={'Введите электронную почту'}/>
            <Field component={Input} name="juridical" placeholder={'Введите юридическое название компании'}/>
            <Field component={Input} name="commercial" placeholder={'Введите коммерческое название компании'}/>
            <Field component={Input} name="website" placeholder={'Введите адрес сайта (не обязательно)'}/>
            <Field component={Textarea} name="message" placeholder={'Введите Ваше сообщение'}/>

            <button style={{width: '100%'}} className={s.button} type="submit">Отправить заявку на сотрудничество</button>
        </Form>
    </Formik>
};

export default withRouter(PartnersForm)