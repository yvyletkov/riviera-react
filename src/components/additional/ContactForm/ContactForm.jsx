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
            {({ errors, touched }) => (
                <Form>
                    <Field name="firstName"/>
                    {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                    ) : null}
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <button type="submit">{submitBtnText}</button>
                </Form>
            )}
        </Formik>
);

export default ContactForm;