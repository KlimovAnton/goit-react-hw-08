import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactsList from "../../components/ContactsList/ContactsList";
import UserName from "../../components/UserName/UserName";
import css from "./ContactsPage.module.css"

export default function ContactsPage () {
    return (
        <div className={css.container}>
            <UserName /><h3>This is your contacts:</h3>
            <ContactForm />
            <SearchBox />
            <ContactsList />
        </div>
    )
}
