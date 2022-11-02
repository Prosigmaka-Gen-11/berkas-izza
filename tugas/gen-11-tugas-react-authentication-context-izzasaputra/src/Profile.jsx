import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

export default function Profile() {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  function getUser() {
    axios
      .get("https://dummyjson.com/users", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setUsers(res.data.users);
        console.log(users);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUser();
  }, []);

  let value = 1;

  return (
    <>
      <h1>Halo ini profil</h1>
      <Link to="/">
        <button>Kembali ke Home</button>
      </Link>
      <br />
      <br />
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>email</th>
            <th>birth date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{value++}</td>
              <td>{user.firstName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
