import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggenIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
