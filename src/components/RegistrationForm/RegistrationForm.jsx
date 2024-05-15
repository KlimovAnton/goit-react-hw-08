import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const nameId = useId();
  const mailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label} htmlFor={nameId} >Username</label>
        <Field type="text" name="name" id={nameId} className={css.input}/>

        <label className={css.label} htmlFor={mailId}>Email</label>
        <Field type="email" name="email" id={mailId} className={css.input}/>

        <label className={css.label} htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} className={css.input}/>
        
        <button type="submit" className={css.button}>Register</button>
      </Form>
    </Formik>
  );
}