import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function Home() {
  const { logout, userData } = useContext(AuthContext);
  return (
    <>
      <h1>
        Selamat Datang di halaman Home,{" "}
        {userData.firstName + " " + userData.lastName}
      </h1>
      <h3>Menu</h3>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <br />
      <br />
      <Link to="/data">
        <button>Data</button>
      </Link>
      <br />
      <br />
      <button onClick={logout}>Logout</button>
    </>
  );
}
