import { useContext } from "react";
import { dataContext } from "./App";
import axios from "axios";

export default function ListData() {
  const { dataList } = useContext(dataContext);

  return (
    <>
      <h1>List Data</h1>
      <table border="1" width="50%">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Nomor HP</th>
            <th>Alamat</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data) => (
            <tr key={data.id}>
              <td>{data.nama}</td>
              <td>{data.nomor}</td>
              <td>{data.alamat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
