import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  const [detail, setDetail] = useState([]);

  async function getApi() {
    const result = await axios.get(
      `http://localhost:3000/mahasiswa/${params.detailId}`
    );
    setDetail(result.data);
  }

  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <h1>Detail Peserta</h1>
      <table>
        <tr>
          <td>Nama :</td>
          <td>{detail.nama}</td>
        </tr>
        <tr>
          <td>Alamat :</td>
          <td>{detail.alamat}</td>
        </tr>
        <tr>
          <td>Tanggal Lahir :</td>
          <td>{detail.tanggal_lahir}</td>
        </tr>
        <tr>
          <td>Asal Sekolah :</td>
          <td>{detail.sekolah}</td>
        </tr>
        <tr>
          <td>Jenis Kelamnin :</td>
          <td>{detail.gender}</td>
        </tr>
        <tr>
          <td>Olimpiade :</td>
          <td>{detail.olimpiade}</td>
        </tr>
        <tr>
          <td>Validasi :</td>
          <td>{detail.validasi}</td>
        </tr>
      </table>
      <br />
      <Link to="/">
        <button>Kembali Ke Home</button>
      </Link>
    </>
  );
}
