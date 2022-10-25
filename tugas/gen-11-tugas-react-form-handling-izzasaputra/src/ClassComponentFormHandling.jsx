import React from "react";

const genderList = [
  { value: "L", label: "Laki-laki" },
  { value: "P", label: "Perempuan" },
];

const olimpiadeList = [
  { value: "matematika", label: "Matematika" },
  { value: "ipa", label: "IPA" },
  { value: "ips", label: "IPS" },
];

class ClassComponentFormHandling extends React.Component {
  constructor() {
    super();

    this.state = {
      nama: "",
      alamat: "",
      tanggal_lahir: "",
      sekolah: "",
      gender: "",
      olimpiade: "",
      validasi: "",
    };
  }

  handleCheckBox(evt) {
    const value = evt.target.checked;
    if (value) {
      this.setState({ validasi: "setuju" });
    } else {
      this.setState({ validasi: "tidak" });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(
      "Mengirim data dari class component " +
        this.state.nama +
        "," +
        this.state.alamat +
        "," +
        this.state.tanggal_lahir +
        "," +
        this.state.sekolah +
        "," +
        this.state.gender +
        "," +
        this.state.olimpiade +
        "," +
        this.state.validasi
    );
  }

  render() {
    return (
      <div>
        <h1 className="text-lg font-bold">Data Anda</h1>
        <p>Nama : {this.state.nama}</p>
        <p>Alamat : {this.state.alamat}</p>
        <p>Tanggal Lahir : {this.state.tanggal_lahir}</p>
        <p>Sekolah : {this.state.sekolah}</p>
        <p>Jenis kelamin : {this.state.gender}</p>
        <p>Olimpiade : {this.state.olimpiade}</p>
        <p>Validasi : {this.state.validasi}</p>
        <br />
        <hr />
        <br />
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>
            Nama <br />
            <input
              type="text"
              className=" border border-black border-solid"
              value={this.state.nama}
              onChange={(evt) => this.setState({ nama: evt.target.value })}
            />
          </label>
          <br />
          <br />
          <label>
            Alamat <br />
            <textarea
              name=""
              className=" border border-black border-solid"
              value={this.state.alamat}
              onChange={(evt) => this.setState({ alamat: evt.target.value })}
            ></textarea>
          </label>
          <br />
          <br />
          <label>
            Tanggal Lahir <br />
            <input
              type="date"
              className=" border border-black border-solid"
              value={this.state.tanggal_lahir}
              onChange={(evt) =>
                this.setState({ tanggal_lahir: evt.target.value })
              }
            />
          </label>
          <br />
          <br />
          <label>
            Asal Sekolah <br />
            <input
              type="text"
              className=" border border-black border-solid"
              value={this.state.sekolah}
              onChange={(evt) => this.setState({ sekolah: evt.target.value })}
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
                  checked={this.state.gender == genderItem.value}
                  onChange={(evt) =>
                    this.setState({ gender: evt.target.value })
                  }
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
              value={this.state.olimpiade}
              onChange={(evt) => this.setState({ olimpiade: evt.target.value })}
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
              checked={this.state.validasi == "setuju"}
              onClick={(evt) => this.handleCheckBox(evt)}
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
}
export default ClassComponentFormHandling;
