import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const userSlice = useSelector((state) => state.user);
  console.log(userSlice.isLogin);

  if (userSlice.isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
