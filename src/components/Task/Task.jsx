export const Task = ({ id, text }) => {
  
    return (
      <div className={css.wrapper}>
        <p className={css.text}>{text}</p>
        <button type="button" className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    );
  };