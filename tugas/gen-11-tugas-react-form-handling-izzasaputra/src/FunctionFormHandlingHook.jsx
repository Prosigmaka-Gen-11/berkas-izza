import { useState } from "react";
import UseFormInput from "./UseFormInput";

export default function FunctionFormHandlingHook() {
  const { formInput, handleFormInput, handleFormCheck } = UseFormInput({
    nama: "",
    alamat: "",
    tanggal_lahir: "",
    sekolah: "",
    gender: "",
    olimpiade: "",
    validasi: "",
  });

  const genderList = [
    { value: "L", label: "Laki-laki" },
    { value: "P", label: "Perempuan" },
  ];

  const olimpiadeList = [
    { value: "matematika", label: "Matematika" },
    { value: "ipa", label: "IPA" },
    { value: "ips", label: "IPS" },
  ];

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

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(
      "Mengirim data " +
        formInput.nama +
        "," +
        formInput.alamat +
        "," +
        formInput.tanggal_lahir +
        "," +
        formInput.sekolah +
        "," +
        formInput.gender +
        "," +
        formInput.olimpiade +
        "," +
        formInput.validasi
    );
  }

  return (
    <div>
      <h1 className="text-lg font-bold">Data Anda</h1>
      <p>Nama : {formInput.nama}</p>
      <p>Alamat : {formInput.alamat}</p>
      <p>Tanggal Lahir : {formInput.tanggal_lahir}</p>
      <p>Sekolah : {formInput.sekolah}</p>
      <p>Jenis kelamin : {formInput.gender}</p>
      <p>Olimpiade : {formInput.olimpiade}</p>
      <p>Validasi : {formInput.validasi}</p>
      <br />
      <hr />
      <br />
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <label>
          Nama <br />
          <input
            type="text"
            className=" border border-black border-solid"
            value={formInput.nama}
            onChange={(evt) => handleFormInput(evt, "nama")}
          />
        </label>
        <br />
        <br />
        <label>
          Alamat <br />
          <textarea
            name=""
            className=" border border-black border-solid"
            value={formInput.alamat}
            onChange={(evt) => handleFormInput(evt, "alamat")}
          ></textarea>
        </label>
        <br />
        <br />
        <label>
          Tanggal Lahir <br />
          <input
            type="date"
            className=" border border-black border-solid"
            value={formInput.tanggal_lahir}
            onChange={(evt) => handleFormInput(evt, "tanggal_lahir")}
          />
        </label>
        <br />
        <br />
        <label>
          Asal Sekolah <br />
          <input
            type="text"
            className=" border border-black border-solid"
            value={formInput.sekolah}
            onChange={(evt) => handleFormInput(evt, "sekolah")}
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
                onChange={(evt) => handleFormInput(evt, "gender")}
              />
              {genderItem.label}
              <span className="mr-5"></span>
            </label>
          ))}
        </label>
        <br />
        <br />
        <label>
          Jenis Lomba <br />
          <select
            value={formInput.olimpiade}
            onChange={(evt) => handleFormInput(evt, "olimpiade")}
            className="border border-black"
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
            onClick={(evt) => handleCheckBox(evt)}
          />
          Saya mengisi data diri dengan sesungguhnya
        </label>
        <br />
        <br />
        <button className="border border-black bg-slate-300">
          Submit This Form
        </button>
      </form>
    </div>
  );
}
