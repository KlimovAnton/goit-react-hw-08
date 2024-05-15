import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css"

export default function RegisterPage () {
    return (
        <div className={css.container}>
            <h3>Register your account:</h3>
            <RegistrationForm />
        </div>
    )
}