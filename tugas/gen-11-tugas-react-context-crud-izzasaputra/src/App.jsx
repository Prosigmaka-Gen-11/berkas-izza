import ListData from "./ListData";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();
const data = {
  nama: "",
  nomor: "",
  alamat: "",
};

function App() {
  const [inputForm, setInputForm] = useState({ ...data });
  const [dataList, setDataList] = useState([]);

  async function getApi() {
    const result = await axios.get("http://localhost:3000/data");
    console.log(result.data);
    setDataList(result.data);
  }

  function handleInput(evt, propName) {
    setInputForm({ ...inputForm, [propName]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await axios.post(`http://localhost:3000/data`, inputForm);
    console.log(inputForm);
    setInputForm({ ...data });
    getApi();
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <dataContext.Provider
      value={{
        dataList: dataList,
        setDataLIst: setDataList,
      }}
    >
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama: <br />
          <input
            type="text"
            value={inputForm.nama}
            onChange={(evt) => handleInput(evt, "nama")}
          />
        </label>
        <br />
        <br />
        <label>
          Nomor Telepon: <br />
          <input
            type="number"
            value={inputForm.nomor}
            onChange={(evt) => handleInput(evt, "nomor")}
          />
        </label>
        <br />
        <br />
        <label>
          Alamat: <br />
          <textarea
            value={inputForm.alamat}
            onChange={(evt) => handleInput(evt, "alamat")}
          ></textarea>
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <hr />
      <br />
      <ListData />
    </dataContext.Provider>
  );
}

export default App;
