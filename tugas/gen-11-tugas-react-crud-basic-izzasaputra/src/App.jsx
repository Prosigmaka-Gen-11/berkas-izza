import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const initialForm = {
  nama: "",
  alamat: "",
  tanggal_lahir: "",
  sekolah: "",
  gender: "",
  olimpiade: "",
  validasi: "tidak",
};

const genderList = [
  { value: "L", label: "Laki-laki" },
  { value: "P", label: "Perempuan" },
];

const olimpiadeList = [
  { value: "matematika", label: "Matematika" },
  { value: "ipa", label: "IPA" },
  { value: "ips", label: "IPS" },
];

function App() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [formInput, setFormInput] = useState({ ...initialForm });

  const edit = formInput.id;

  async function getApi() {
    const result = await axios.get("http://localhost:3000/mahasiswa");
    console.log(result.data);
    setMahasiswa(result.data);
  }

  function handleInput(evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value });
  }

  function handleFormCheck(value, inputName) {
    setFormInput({ ...formInput, [inputName]: value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    if (edit) {
      await axios.put(
        `http://localhost:3000/mahasiswa/${formInput.id}`,
        formInput
      );
    } else {
      await axios.post(`http://localhost:3000/mahasiswa`, formInput);
    }

    getApi();
    setFormInput({ ...initialForm });
  }

  function prepareEdit(mhs) {
    setFormInput({ ...mhs });
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3000/mahasiswa/${id}`);
    getApi();
  }

  function handleCheckBox(evt) {
    const value = evt.target.checked;
    {
      if (value) {
        handleFormCheck("setuju", "validasi");
      } else {
        handleFormCheck("tidak", "validasi");
      }
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h1>Daftar Peserta Olimpiade</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <td>Nama</td>
            <td>Alamat</td>
            <td>Tanggal Lahir</td>
            <td>Sekolah</td>
            <td>Gender</td>
            <td>Olimpiade</td>
            <td>Validasi</td>
            <td>Opsi</td>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mhs) => (
            <tr key={mhs.id}>
              <td>{mhs.nama}</td>
              <td>{mhs.alamat}</td>
              <td>{mhs.tanggal_lahir}</td>
              <td>{mhs.sekolah}</td>
              <td>{mhs.gender}</td>
              <td>{mhs.olimpiade}</td>
              <td>{mhs.validasi}</td>

              <td>
                <button onClick={() => prepareEdit(mhs)}>Edit</button>
                <button onClick={() => handleDelete(mhs.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <hr />
      <br />
      <h1>Form Pendaftaran Olimpiade</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama : <br />
          <input
            type="text"
            value={formInput.nama}
            onChange={(evt) => handleInput(evt, "nama")}
          />
        </label>
        <br />
        <br />
        <label>
          Alamat : <br />
          <textarea
            value={formInput.alamat}
            onChange={(evt) => handleInput(evt, "alamat")}
          ></textarea>
        </label>
        <br />
        <br />
        <label>
          Tanggal Lahir <br />
          <input
            type="date"
            value={formInput.tanggal_lahir}
            onChange={(evt) => handleInput(evt, "tanggal_lahir")}
          />
        </label>
        <br />
        <br />
        <label>
          Asal Sekolah <br />
          <input
            type="text"
            value={formInput.sekolah}
            onChange={(evt) => handleInput(evt, "sekolah")}
          />
        </label>
        <br />
        <br />
        <label>
          Jenis Kelamin <br />
          {genderList.map((genderItem) => (
            <label key={genderItem.value}>
              <input
                type="radio"
                name="gender"
                value={genderItem.value}
                checked={formInput.gender == genderItem.value}
                onChange={(evt) => handleInput(evt, "gender")}
              />
              {genderItem.label}
            </label>
          ))}
        </label>
        <br />
        <br />
        <label>
          Jenis Lomba <br />
          <select
            value={formInput.olimpiade}
            onChange={(evt) => handleInput(evt, "olimpiade")}
          >
            <option value="" disabled>
              - pilih prodi -
            </option>
            {olimpiadeList.map((olimpiadeItem) => (
              <option value={olimpiadeItem.value} key={olimpiadeItem.value}>
                {olimpiadeItem.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            checked={formInput.validasi == "setuju"}
            onChange={(evt) => handleCheckBox(evt)}
          />
          Saya mengisi data diri dengan sesungguhnya
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
