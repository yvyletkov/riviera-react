import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import s from "../../shared/Button/Button.module.scss";
import cx from "classnames";
import {withRouter} from "react-router-dom";
import {request} from "../../../api";
import swal from 'sweetalert2';
import Cleave from "cleave.js/react";


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
            // onChange={this.onChange.bind(this)}
                className={classNames}
                {...field} {...props}
                type={type}
        />
        {/*<input type={type} className={classNames} {...field} {...props} />*/}
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

const WorkshopForm = ({type, }) => {

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

    const handleFieldOfActivityChange = (e) => {
        console.log(e)
    }

    if (type === "bride") return <Formik
        initialValues={{

        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <Form>
            <Field component={Input} name="name" placeholder={'Имя'}/>
            <Field component={NumInput} name="phone" placeholder={'Номер телефона'}/>
            <Field component={Input} name="weddingDate" placeholder={'Дата свадьбы'}/>
            <Field component={Input} name="city" placeholder={'Город'}/>
            <Field component={Input} name="questsAmount" placeholder={'Количество гостей на свадьбе'}/>
            <Field as="select" name="requiredSpecialist">
                <option value="disabled" disabled>Какого специалиста Вы ищите?</option>
                <option value="place">Площадка</option>
                <option value="host">Ведущий</option>
                <option value="decorator">Декоратор</option>
                <option value="stylist">Стилист</option>
                <option value="photograph">Фотограф</option>
                <option value="videograph">Видеограф</option>
                <option value="organizator">Организатор</option>
                <option value="conditer">Кондитер</option>
            </Field>

            <button style={{width: '100%'}} className={s.button} type="submit">Зарегистрироваться</button>
        </Form>
    </Formik>

    else if (type === "organizator") return <Formik
        initialValues={{

        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <Form>
            <Field component={Input} name="name" placeholder={'Имя'}/>
            <Field component={NumInput} name="phone" placeholder={'Номер телефона'}/>
            <Field component={Input} name="companyName" placeholder={'Название компании'}/>
            <Field as="select" name="fieldOfActivity" onChange={handleFieldOfActivityChange}>
                <option value="disabled" disabled>Сфера деятельности</option>
                <option value="place">Площадка</option>
                <option value="host">Ведущий</option>
                <option value="decorator">Декоратор</option>
                <option value="stylist">Стилист</option>
                <option value="photograph">Фотограф</option>
                <option value="videograph">Видеограф</option>
                <option value="organizator">Организатор</option>
                <option value="conditer">Кондитер</option>
                <option value="other">Свой вариант</option>
            </Field>
            {true && <Field component={Input} name="otherActivity" placeholder={'Сфера деятельности'}/>}
            <Field as="select" name="participationVariant">
                <option value="red" disabled>Вариант участия в мероприятии</option>
                <option value="guest">Гость</option>
                <option value="Coorganizator">Соорганизатор</option>
            </Field>
            <Field component={Input} name="link" placeholder={'Ссылка на сайт/соцсеть'}/>

            <button style={{width: '100%'}} className={s.button} type="submit">Отправить заявку на сотрудничество</button>
        </Form>
    </Formik>

};

export default withRouter(WorkshopForm)