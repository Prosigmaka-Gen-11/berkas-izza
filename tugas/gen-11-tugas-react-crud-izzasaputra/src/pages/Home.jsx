import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  const [mahasiswa, setMahasiswa] = useState([]);

  async function getApi() {
    const result = await axios.get(" http://localhost:3000/mahasiswa");
    setMahasiswa(result.data);
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3000/mahasiswa/${id}`);
    getApi();
  }

  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <h1>Tabel Data Olimpiade</h1>
      <Link to="/form">
        <button>Tambah Data</button>
      </Link>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Tanggal Lahir</th>
            <th>Sekolah</th>
            <th>Gender</th>
            <th>Olimpiade</th>
            <th>Validasi</th>
            <th>Opsi</th>
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
                <Link to={`/detail/` + mhs.id}>
                  <button>Lihat Detail</button>
                </Link>
                <Link to={`/edit/` + mhs.id}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(mhs.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
