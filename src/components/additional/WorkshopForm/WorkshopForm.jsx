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

const SelectInput = ({
                         field,
                         form: {touched, errors},
                         ...props
                     }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <select
            className={classNames}
            {...props}
            {...field}
        >
            {props.children}
        </select>
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

const DateInput = ({
                       field,
                       type,
                       form: {touched, errors},
                       ...props
                   }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <Cleave placeholder="Дата"
                options={{
                    delimiters: ['.', '.'],
                    blocks: [2, 2, 4],
                }}
                className={classNames}
                {...field} {...props}
                type={type}
        />
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};


const WorkshopForm = ({type}) => {

    const [showExtraField, setShowExtraField] = React.useState(false)
    const [fieldOfActivityInputValue, setFieldOfActivityInputValue] = React.useState('initial')

    const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    Yup.addMethod(Yup.string, "phone", function () {
        return this.test("phone", "Некорректный номер телефона", value =>
            rePhoneNumber.test(value)
        );
    });

    const SchemaBride = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком коротко')
            .max(50, 'Слишком длинное имя')
            .required('Пожалуйста, введите имя'),
        phone: Yup.string()
            .min(18, 'Номер введен неверно')
            .max(18, 'Слишком длинный номер телефона 😢')
            .required('Пожалуйста, введите номер'),
        weddingDate: Yup.string()
            .required('Пожалуйста, введите дату')
            .min(10, 'Введите дату в формате ДД.ММ.ГГГГ')
            .max(10, 'Введите дату в формате ДД.ММ.ГГГГ'),
        city: Yup.string()
            .required('Пожалуйста, укажите, откуда Вы'),
        guestsAmount: Yup.string()
            .required('Пожалуйста, укажите количество гостей')
            .min(2, 'Слишком мало букв 😢')
            .max(15, 'Слишком много букв 😢'),
        requiredSpecialist: Yup.string()
            .required('Пожалуйста, укажите специалиста'),

    });

    const SchemaOrganizator = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком коротко')
            .max(50, 'Слишком длинное имя')
            .required('Пожалуйста, введите имя'),
        phone: Yup.string()
            .min(18, 'Номер введен неверно')
            .max(18, 'Слишком длинный номер телефона 😢')
            .required('Пожалуйста, введите номер'),
        companyName: Yup.string()
            .required('Пожалуйста, укажите название компании')
            .min(2, 'Слишком мало букв 😢')
            .max(20, 'Слишком много букв 😢'),
        fieldOfActivity: Yup.string()
            .required('Пожалуйста, укажите сферу своей деятельности'),
        participationVariant: Yup.string()
            .required('Пожалуйста, укажите формат участия'),
        otherActivity: showExtraField && Yup.string()
            .required('Пожалуйста, укажите сферу своей деятельности')
            .min(4, 'Слишком мало букв 😢')
            .max(20, 'Слишком много букв 😢'),
        link: Yup.string()
            .required('Пожалуйста, укажите ссылку (или напишите "нет")')
            .min(3, 'Слишком мало букв 😢')
            .max(50, 'Слишком много букв 😢'),
    });

    const data = {};

    const onBrideFormSubmit = (values, {resetForm}) => {
        data.form = {
            "url": `https://workshop.rivierasunrise.ru/`
        };
        data.inputs = [
            {
                "alias": "Источник",
                "value": "Форма со страницы Свадебного Воркшопа (Невеста)",
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
                "alias": "Дата свадьбы",
                "value": values.weddingDate,
            },
            {
                "alias": "Город",
                "value": values.city,
            },
            {
                "alias": "Количество гостей на свадьбе",
                "value": values.guestsAmount,
            },
            {
                "alias": "Требуемый специалист",
                "value": values.requiredSpecialist,
            },
        ];

        request(data)
            .then((response) => {
                if (response.status === 200) {
                    const name = values.name[0].toUpperCase() + values.name.slice(1);
                    swal.fire({
                        title: `Спасибо, ${name}!`,
                        text: 'ваше заявка будет обработана в ближайшее время',
                        icon: 'success',
                        confirmButtonText: 'Отлично'
                    })
                }
                else throw response
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

    };

    const onOrganizatorFormSubmit = (values, {resetForm}) => {
        data.form = {
            "url": `https://workshop.rivierasunrise.ru/`
        };
        data.inputs = [
            {
                "alias": "Источник",
                "value": "Форма со страницы Свадебного Воркшопа (Организатор)",
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
                "alias": "Название компании",
                "value": values.companyName,
            },
            {
                "alias": "Сфера деятельности",
                "value": values.fieldOfActivity,
            },
            {
                "alias": "Формат участия",
                "value": values.participationVariant,
            },
            {
                "alias": "Ссылка на сайт/соцсеть",
                "value": values.link,
            },
        ];

        if (showExtraField) data.inputs = [
            ...data.inputs,
            {
                "alias": "Свой вариант сферы деятельности",
                "value": values.otherActivity,
            },
        ]

        request(data)
            .then((response) => {
                if (response.status === 200) {
                    const name = values.name[0].toUpperCase() + values.name.slice(1);
                    swal.fire({
                        title: `Спасибо, ${name}!`,
                        text: 'ваше заявка будет обработана в ближайшее время',
                        icon: 'success',
                        confirmButtonText: 'Отлично'
                    })
                }
                else throw response
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
    };


    const handleFormChange = (e) => {
        if (e.target.value === 'other' && e.target.name === 'fieldOfActivity') {
            setShowExtraField(true)
        }
        else if (e.target.value !== 'other' && e.target.name === 'fieldOfActivity') {
            setShowExtraField(false)
        }
    }

    if (type === "bride") return <Formik
        initialValues={{
            name: '',
            phone: '',
            weddingDate: '',
            city: '',
            guestsAmount: '',
            requiredSpecialist: 'initial',
        }}
        validationSchema={SchemaBride}
        onSubmit={onBrideFormSubmit}>
        <Form onChange={handleFormChange}>
            <Field component={Input} name="name" placeholder={'Имя'}/>
            <Field component={NumInput} name="phone" placeholder={'Номер телефона'}/>
            <Field component={DateInput} name="weddingDate" placeholder={'Дата свадьбы'}/>
            <Field component={Input} name="city" placeholder={'Город'}/>
            <Field component={Input} name="guestsAmount" placeholder={'Количество гостей на свадьбе'}/>
            <Field component={SelectInput} name="requiredSpecialist">
                <option value="initial" disabled>Какого специалиста Вы ищите?</option>
                <option value="Владелец площадки">Нужна площадка</option>
                <option value="Ведущий">Нужен ведущий</option>
                <option value="Декоратор">Нужен декоратор</option>
                <option value="Стилист">Нужен стилист</option>
                <option value="Фотограф">Нужен фотограф</option>
                <option value="Видеограф">Нужен видеограф</option>
                <option value="Организатор">Нужен организатор</option>
                <option value="Кондитер">Нужен кондитер</option>
            </Field>

            <button style={{width: '100%'}} className={s.button} type="submit">Зарегистрироваться</button>
        </Form>
    </Formik>

    else if (type === "organizator") return <Formik
        initialValues={{
            fieldOfActivity: 'initial',
            name: '',
            phone: '',
            companyName: '',
            otherActivity: '',
            participationVariant: 'initial',
            link: '',
        }}
        validationSchema={SchemaOrganizator}
        onSubmit={onOrganizatorFormSubmit}>
        <Form onChange={handleFormChange}>
            <Field component={Input} name="name" placeholder={'Имя'}/>
            <Field component={NumInput} name="phone" placeholder={'Номер телефона'}/>
            <Field component={Input} name="companyName" placeholder={'Название компании'}/>
            <Field component={SelectInput} name="fieldOfActivity" value={fieldOfActivityInputValue}>
                <option value="initial" disabled>Выберите сферу деятельности</option>
                <option value="Я владелец площадки">Владелец площадки</option>
                <option value="Я ведущий">Я ведущий</option>
                <option value="Я декоратор">Я декоратор</option>
                <option value="Я стилист">Я стилист</option>
                <option value="Я фотограф">Я фотограф</option>
                <option value="Я видеограф">Я видеограф</option>
                <option value="Я организатор">Я организатор</option>
                <option value="Я кондитер">Я кондитер</option>
                <option value="other">Свой вариант</option>
            </Field>
            {showExtraField && <Field component={Input} name="otherActivity" placeholder={'Сфера деятельности'}/>}
            <Field component={SelectInput} name="participationVariant">
                <option value="initial" disabled>Выберите формат участия</option>
                <option value="Гость">Гость</option>
                <option value="Соорганизатор">Соорганизатор</option>
            </Field>
            <Field component={Input} name="link" placeholder={'Ссылка на сайт/соцсеть'}/>

            <button style={{width: '100%'}} className={s.button} type="submit">Зарегистрироваться</button>
        </Form>
    </Formik>

};

export default withRouter(WorkshopForm)
