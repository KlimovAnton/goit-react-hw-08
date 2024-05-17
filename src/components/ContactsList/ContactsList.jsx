import ContactItem from "../ContactItem/ContactItem"
import css from "./ContactsList.module.css"
import { selectVisibleContacts } from "../../redux/contacts/selectors"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contacts/operations"

export default function ContactsList () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

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