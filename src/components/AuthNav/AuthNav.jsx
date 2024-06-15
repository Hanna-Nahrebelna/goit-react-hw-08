import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink className={css.linkRegister} to="/register">
        Register
      </NavLink>
      <NavLink className={css.linkLigIn} to="/login">
        Log in
      </NavLink>
    </div>
  );
}
