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


const WorkshopForm = ({type,}) => {

    const [showExtraField, setShowExtraField] = React.useState(false)
    const [fieldOfActivityInputValue, setFieldOfActivityInputValue] = React.useState('initial')

    const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    Yup.addMethod(Yup.string, "phone", function () {
        return this.test("phone", "Некорректный номер телефона", value =>
            rePhoneNumber.test(value)
        );
    });

    const Schema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком коротко')
            .max(50, 'Слишком длинное имя')
            .required('Пожалуйста, введите имя'),
        phone: Yup.string()
            .min(18, 'Номер введен неверно')
            .max(18, 'Слишком длинный номер телефона 😢')
            // .matches('^([A-Z]+, )?$', 'Пожалуйста, только цифры')
            // .number()
            // .phone()
            .required('Это поле тоже обязательное'),
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
        companyName: Yup.string()
            .required('Пожалуйста, укажите название компании')
            .min(2, 'Слишком мало букв 😢')
            .max(20, 'Слишком много букв 😢'),
        fieldOfActivity: Yup.string()
            .required('Пожалуйста, укажите сферу своей деятельности'),
        participationVariant: Yup.string()
            .required('Пожалуйста, укажите формат участия'),
        link: Yup.string()
            .required('Пожалуйста, укажите ссылку (или напишите "нет")')


    });

    const data = {};

    const onSubmit = (values, {resetForm}) => {

        console.log(values)
        data.form = {
            "url": `https://workshop.rivierasunrise.ru/`
        };
        data.inputs = [
            {
                "alias": "Источник",
                "value": "Форма со страницы Свадебного Воркшопа",
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
        setFieldOfActivityInputValue(e.target.value)
        if (e.target.value === 'other') setShowExtraField(true)
        else setShowExtraField(false)
    }


    if (type === "bride") return <Formik
        initialValues={{
            requiredSpecialist: 'initial'
        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <Form>
            <Field component={Input} name="name" placeholder={'Имя'}/>
            <Field component={NumInput} name="phone" placeholder={'Номер телефона'}/>
            <Field component={DateInput} name="weddingDate" placeholder={'Дата свадьбы'}/>
            <Field component={Input} name="city" placeholder={'Город'}/>
            <Field component={Input} name="guestsAmount" placeholder={'Количество гостей на свадьбе'}/>
            <Field as="select" name="requiredSpecialist">
                <option value="initial" disabled>Какого специалиста Вы ищите?</option>
                <option value="place">Нужна площадка</option>
                <option value="host">Нужен ведущий</option>
                <option value="decorator">Нужен декоратор</option>
                <option value="stylist">Нужен стилист</option>
                <option value="photograph">Нужен фотограф</option>
                <option value="videograph">Нужен видеограф</option>
                <option value="organizator">Нужен организатор</option>
                <option value="conditer">Нужен кондитер</option>
            </Field>

            <button style={{width: '100%'}} className={s.button} type="submit">Зарегистрироваться</button>
        </Form>
    </Formik>

    else if (type === "organizator") return <Formik
        initialValues={{
            fieldOfActivity: 'initial',
            participationVariant: 'initial'
        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <Form>
            <Field component={Input} name="name" placeholder={'Имя'}/>
            <Field component={NumInput} name="phone" placeholder={'Номер телефона'}/>
            <Field component={Input} name="companyName" placeholder={'Название компании'}/>
            <Field as="select" name="fieldOfActivity" value={fieldOfActivityInputValue}
                   onChange={handleFieldOfActivityChange}>
                <option value="initial" disabled>Сфера деятельности</option>
                <option value="place">Владелец площадки</option>
                <option value="host">Я ведущий</option>
                <option value="decorator">Я декоратор</option>
                <option value="stylist">Я стилист</option>
                <option value="photograph">Я фотограф</option>
                <option value="videograph">Я видеограф</option>
                <option value="organizator">Я организатор</option>
                <option value="conditer">Я кондитер</option>
                <option value="other">Свой вариант</option>
            </Field>
            {showExtraField && <Field component={Input} name="otherActivity" placeholder={'Сфера деятельности'}/>}
            <Field as="select" name="participationVariant">
                <option value="initial" disabled>Вариант участия в мероприятии</option>
                <option value="guest">Гость</option>
                <option value="coorganizator">Соорганизатор</option>
            </Field>
            <Field component={Input} name="link" placeholder={'Ссылка на сайт/соцсеть'}/>

            <button style={{width: '100%'}} className={s.button} type="submit">Зарегистрироваться</button>
        </Form>
    </Formik>

};

export default withRouter(WorkshopForm)