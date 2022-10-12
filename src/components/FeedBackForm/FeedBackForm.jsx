import { Formik, Form, ErrorMessage, } from 'formik';
import { FormTitle, FormWrapper, FieldStyled, FormSubmiteBtn } from './FeedBackForm-styled';
import { FormikTextareaField } from './FormikTextareaField';

import { changeForm } from '../../redux/feedbackForm/feedback-slice';
import { useSelector, useDispatch } from "react-redux";
import { sendMsg } from '../../api/sendFeedback';

import { NotificationManager } from 'react-notifications';

const initialValues = { name: "", email: "", message: "", };

const FeedBackForm = () => {
    const initialStateForm = useSelector(state => {
        const { name, email, message } = state.feedbackForm;
        return { name, email, message };
    });
    const dispatch = useDispatch();

    const handleChange = function ({ target: { value, name } }) {
        dispatch(changeForm({ [name]: value }));
    }

    return (
        <>
            <FormWrapper >
                <FormTitle>Reach out to us!</FormTitle>
                <Formik
                    initialValues={initialStateForm}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Name is required';
                        }

                        if (!values.email) {
                            errors.email = 'Email is required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.message) {
                            errors.message = 'Message is required';
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        const answer = await sendMsg(values);
                        console.log('answer', answer)
                        if (answer.error) {
                            NotificationManager.error('Error', answer.error);
                            return
                        }

                        setSubmitting(false);
                        resetForm({ values: initialValues });
                        dispatch(changeForm(initialValues));
                        NotificationManager.success(answer.name + "\n" + answer.message, 'Success',);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form onChange={handleChange} >
                            <FieldStyled type="text" name="name" placeholder="Your name*" />
                            <ErrorMessage name="name" component="div" />
                            <FieldStyled type="email" name="email" placeholder="Your e-mail*" />
                            <ErrorMessage name="email" component="div" />
                            <FormikTextareaField name="message" placeholder="Your message*" rows="4" />
                            <FormSubmiteBtn type="submit" disabled={isSubmitting}>
                                Send message
                            </FormSubmiteBtn>
                        </Form>
                    )}
                </Formik>
            </FormWrapper>
        </>
    );
}

export default FeedBackForm;