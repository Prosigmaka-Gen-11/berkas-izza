import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setToken, setUserData } from "./UserSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userSlice = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogin(evt) {
    evt.preventDefault();
    axios
      .post("https://dummyjson.com/auth/login", { username, password })
      .then((res) => {
        dispatch(setUserData(res.data));
        console.log(res.data);
        dispatch(setToken(res.data.token));
        localStorage.setItem("userData", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => console.log(err.response));
  }

  if (userSlice.isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>Halaman Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username <br />
          <input
            type="text"
            required
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Password <br />
          <input
            type="password"
            required
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <br />
      username : atuny0
      <br />
      password : 9uQFF1Lh
    </>
  );
}
