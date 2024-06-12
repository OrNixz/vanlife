import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ from: location, message: "You must log in first"}}
        replace
      />
    );
  }
  return <Outlet />;
}
