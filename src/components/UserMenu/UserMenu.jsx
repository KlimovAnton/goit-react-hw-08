import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import UserName from "../UserName/UserName";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <UserName />
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}