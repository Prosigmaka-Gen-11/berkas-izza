import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function Login() {
  const { handleDataLogin, isLogin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(evt) {
    evt.preventDefault();
    axios
      .post("https://dummyjson.com/auth/login", { username, password })
      .then((res) => {
        console.log(res.data);
        handleDataLogin(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err.response));
  }

  if (isLogin) {
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
    </>
  );
}
