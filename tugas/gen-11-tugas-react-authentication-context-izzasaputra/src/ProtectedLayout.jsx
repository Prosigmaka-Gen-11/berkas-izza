import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function ProtectedLayout() {
  const { isLogin } = useContext(AuthContext);

  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
