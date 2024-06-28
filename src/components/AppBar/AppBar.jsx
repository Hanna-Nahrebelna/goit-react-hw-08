import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggendIn } from "../../redux/auth/selectors";
import { Toaster } from "react-hot-toast";

import css from "./AppBar.module.css";


export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggendIn);
  return (
    <header className={css.header}>
      
      <Toaster position="top-center" reverseOrder={false} />

      <Navigation />      
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
