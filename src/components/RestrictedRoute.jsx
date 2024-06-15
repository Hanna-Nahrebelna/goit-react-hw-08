import { useSelector } from "react-redux";
import { selectIsLoggendIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggendIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
