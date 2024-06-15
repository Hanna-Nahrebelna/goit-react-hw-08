import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggendIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";


export default function Navigation() {
  const isLoggendIn = useSelector(selectIsLoggendIn);

  return (
    <nav>
      <NavLink className={css.linkHome} to="/">
        Home
      </NavLink>
      { isLoggendIn &&  <NavLink className={css.linkContacts} to="/contacts">
        Contacts
      </NavLink>}      
    </nav>
  );
}
