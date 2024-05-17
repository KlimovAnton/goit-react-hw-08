import ContactItem from "../ContactItem/ContactItem"
import css from "./ContactsList.module.css"
import { selectVisibleContacts } from "../../redux/contacts/selectors"
import { useSelector } from "react-redux"

export default function ContactsList () {
    
    const contacts = useSelector(selectVisibleContacts)

    return (
        <ul className={css.list}>
                {contacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <ContactItem contact={contact} />
                </li>
                ))
                }
        </ul>
    )
}