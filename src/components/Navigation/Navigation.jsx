import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {  

  return (
    <nav>
      <NavLink className={css.linkHome} to="/">
        Home
      </NavLink>
      <NavLink className={css.linkContacts} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
