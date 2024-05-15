import css from "./TaskList.module.css"

export default function TaskList () {

    return (
        <ul className={css.list}>
            {tasks.map(({ id, text }) => (
                <li key={id}>
                <Task id={id} text={text} />
                </li>
            ))}
        </ul>
    )
}