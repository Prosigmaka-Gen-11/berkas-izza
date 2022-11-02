import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

export default function Data() {
  const { token } = useContext(AuthContext);
  const [todo, setTodo] = useState([]);

  function getToDo() {
    axios
      .get("https://dummyjson.com/todos", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setTodo(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getToDo();
  }, []);

  let value = 1;
  return (
    <>
      <h1>Halo ini data</h1>
      <Link to="/">
        <button>Kembali ke Home</button>
      </Link>
      <br />
      <br />
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>No</th>
            <th>UserID</th>
            <th>Todo</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todo) => (
            <tr key={todo.id}>
              <td>{value++}</td>
              <td>{todo.userId}</td>
              <td>{todo.todo}</td>
              <td>{todo.completed ? "Done" : "Unfinished"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
