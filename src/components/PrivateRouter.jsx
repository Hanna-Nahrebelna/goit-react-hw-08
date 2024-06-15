import { useSelector } from "react-redux";
import { selectIsLoggendIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggendIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
