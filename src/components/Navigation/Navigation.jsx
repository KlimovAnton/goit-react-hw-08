import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation () {
    return (
        <nav>
            <NavLink to="/" className={css.link}>
                Home
            </NavLink>
            <NavLink to="/tasks" className={css.link}>
                Tasks
            </NavLink>
        </nav>
    )
}