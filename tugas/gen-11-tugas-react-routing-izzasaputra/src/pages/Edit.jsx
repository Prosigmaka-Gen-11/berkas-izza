import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

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
export default function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({ ...initialForm });

  async function getApi() {
    const result = await axios.get(
      `http://localhost:3000/mahasiswa/${params.userId}`
    );

    setFormInput(result.data);
  }

  function handleInput(evt, propName) {
    setFormInput({ ...formInput, [propName]: evt.target.value });
  }

  function handleFormCheck(value, propName) {
    setFormInput({ ...formInput, [propName]: value });
  }

  function handleCheckBox(evt) {
    const checked = evt.target.checked;
    {
      if (checked) {
        handleFormCheck("setuju", "validasi");
      } else {
        handleFormCheck("tidak", "validasi");
      }
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await axios.put(
      `http://localhost:3000/mahasiswa/${formInput.id}`,
      formInput
    );

    navigate("/");
  }

  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
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
              - pilih lomba -
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
      <br />
      <Link to="/">
        <button>Kembali ke Home</button>
      </Link>
    </>
  );
}
