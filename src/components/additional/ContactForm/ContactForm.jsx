import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const Input = ({
                                  field, // { name, value, onChange, onBlur }
                                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                  ...props
                              }) => (
    <div>
        <input type="text" className='input' {...field} {...props} />
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
);


export const ContactForm = ({submitBtnText}) => (
        <Formik
            initialValues={{
                name: '',
                email: '',
            }}
            validationSchema={Schema}
            onSubmit={values => {
                // same shape as initial values
                console.log('ZNACHENIYA', values);
            }}
        >

                <Form>
                    <Field component={Input} name="name" placeholder={'Введите Ваше имя'}/>
                    <Field component={Input} name="email" placeholder={'Введите Ваш Email'} />
                    <button type="submit">{submitBtnText}</button>
                </Form>

        </Formik>
);

export default ContactForm;