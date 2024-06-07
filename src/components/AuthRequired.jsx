import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const authenticate = false;

  if (!authenticate) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
