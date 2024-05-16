import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserName.module.css"

export default function UserName () {
    const user = useSelector(selectUser);
    return (
        <p className={css.username}>Welcome, {user.name}</p>
    )
}