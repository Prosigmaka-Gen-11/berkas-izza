import React from "react";
import Button from "./components/Button";
import Hewan from "./components/Hewan";
import Makanan from "./components/Makanan";

function App() {

  const [bg, SetBg] = React.useState('bg-white'); //Untuk ganti warna background
  const [hewan, setHewan] = React.useState('___'); //Untuk memilih jenis hewan
  const [makanan, setMakanan] = React.useState('___'); //Untuk memilih jenis makanan

  return (
   <div className={`${bg}`}>
    <div>
      <h1 className="pt-20 absolute left-[50%] -translate-x-[50%] text-2xl font-bold">
        Selamat Datang di Web Bermain
      </h1>
    </div>
    <div className="flex flex-grow h-screen">
      <div className="border border-solid border-black inline-block px-10 py-10 m-auto bg-blue-400">
        <h1>
          Ganti background dengan menekan tombol dibawah ini
        </h1>
        <div className="flex justify-between pt-5">
          <div>
            <Button color="Merah" btnColor="bg-red-500" setColor={()=> SetBg('bg-red-500')}/>
          </div>
          <div>
            <Button color="Kuning" btnColor="bg-yellow-500" setColor={()=> SetBg('bg-yellow-500')} />
          </div>
          <div>
            <Button color="Hijau" btnColor="bg-green-500" setColor={()=> SetBg('bg-green-500')} />
          </div>
        </div>
      </div>
      <div className="border border-solid border-black inline-block px-10 py-10 m-auto bg-white">
        <h1 className="text-lg font-semibold">
          Buat cerita anda sendiri
        </h1>
        <p>Seekor <span className="text-red-500 font-bold"> {hewan} </span> sedang memakan <span className="text-blue-500 font-bold">{makanan}</span>.</p>
        <h1 className="pt-2">Pilih jenis hewan</h1>
        <div className="flex justify-between pt-2">
            <div>
              <Hewan nama="Kelinci" setHewan={()=>setHewan('kelinci')}/>
            </div>
            <div>
              <Hewan nama="Singa" setHewan={()=>setHewan('singa')}/>
            </div>
            <div>
              <Hewan nama="Kucing" setHewan={()=>setHewan('kucing')}/>
            </div>
        </div>
        <h1 className="pt-2">Pilih jenis makanannya</h1>
        <div className="flex justify-between pt-3">
            <div>
              <Makanan nama="Rumput" setMakanan={()=>setMakanan('rumput')}/>
            </div>
            <div>
              <Makanan nama="Daging" setMakanan={()=>setMakanan('daging')}/>
            </div>
            <div>
              <Makanan nama="Segalanya" setMakanan={()=>setMakanan('segalanya')}/>
            </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
