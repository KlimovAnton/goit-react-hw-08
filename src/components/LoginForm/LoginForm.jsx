import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";

export default function LoginForm () {
    const mailId = useId();
    const passwordId = useId();

    const handleSubmit = (values, actions) => {
        actions.resetForm();
      };

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}
            >
            <Form className={css.form} autoComplete="off">
                <label className={css.label} htmlFor={mailId} >Email</label>
                <Field type="email" name="email" id={mailId} className={css.input} />
                
                <label className={css.label} htmlFor={passwordId}>Password</label>
                <Field type="password" name="password" id={passwordId} className={css.input} />
                
                <button type="submit" className={css.button}>Log In</button>
            </Form>
        </Formik>
    )
}