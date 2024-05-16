import ContactItem from "../../components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css"

export default function ContactsPage () {
    const contacts = useSelector(selectVisibleContacts)
    console.log(contacts)

    return (
        <div>
            <ul className={css.list}>
                {contacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <ContactItem contact={contact} />
                </li>
                ))
                }
            </ul>
        </div>
    )
}
