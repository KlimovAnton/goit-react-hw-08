import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

export default function App() {

  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    isRefreshing ? (
      <h1>Refreshing user...</h1>
    ) : (
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute 
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              } 
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute 
                  component={<RegisterPage />}
                  redirectTo="/"
                />
              } 
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute 
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              } 
            />
          </Routes>
        </Suspense>
      </Layout>
    )
  )
}

