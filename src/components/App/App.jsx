import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Layout from '../Layout/Layout';
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRouter";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactPage = lazy(() => import("../../pages/ContactPage/ContactPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div>Refreshing user....</div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute
              component={<RegistrationPage />}
              redirectTo="/"
            />
            }
          />
          <Route
            path="/login"
            element={<RestrictedRoute
              component={<LoginPage />}
              redirectTo="/contacts"
            />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactPage />} redirectTo="/login" />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
