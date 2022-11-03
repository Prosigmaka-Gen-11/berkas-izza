import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setToken, setUserData } from "./UserSlice";

export default function Home() {
  const userSlice = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(setUserData({}));
    dispatch(setToken(null));
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
  }

  return (
    <>
      <h1>
        Selamat Datang di halaman Home,{" "}
        {userSlice.user.firstName + " " + userSlice.user.lastName}
      </h1>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
