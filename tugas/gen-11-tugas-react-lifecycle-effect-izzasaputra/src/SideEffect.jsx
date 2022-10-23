import { useEffect, useState } from "react"

export default function SideEffect(){
    const [brand, setBrand] = useState('')
    const [warna, setWarna] = useState('')
    const [ukuran, setUkuran] = useState('')
    const [hargasatuan, setHargasatuan] = useState(0)
    const [jumlah, setJumlah] = useState(0)
    const [total, setTotal] = useState(0)
    const harga = {
        erigo : 150000,
        roughneck : 110000,
        uniqlo : 200000
    }

    useEffect(()=>{
        const dataDB = {
            brand:'Erigo',
            warna:'merah',
            ukuran:'M',
            hargasatuan: harga.erigo,
            jumlah:3
        }

        setBrand(dataDB.brand)
        setWarna(dataDB.warna)
        setUkuran(dataDB.ukuran)
        setHargasatuan(dataDB.hargasatuan)
        setJumlah(dataDB.jumlah)
        setTotal(dataDB.jumlah*dataDB.hargasatuan)

        return () => {
			console.log('sebelum func component hilang')

			setBrand('')
            setWarna('')
            setUkuran('')
            setHargasatuan('')
            setJumlah('')
            setTotal('')
		}

    },[])

    useEffect(()=>{
        setTotal(jumlah*hargasatuan)

    },[jumlah])


    return(
        <div className="border border-solid border-slate-900 p-16 inline-block rounded-2xl bg-white">
                <h1 className="text-xl">Silahkan pilih kemeja pesanan Anda</h1>
                <div className="pt-3">
                    <p>Brand : <br />
                        <button className={`px-3 py-2 font-bold ${brand==='Erigo'? "bg-[#17AF68] text-white" : "bg-gray-200"}`} onClick={()=>{setBrand('Erigo'), setHargasatuan(harga.erigo)}}>
                            Erigo
                        </button>
                        <button className={`px-3 py-2 font-bold mx-2 ${brand==='Roughneck'? "bg-[#17AF68] text-white" : "bg-gray-200"}`} onClick={()=>{setBrand('Roughneck'), setHargasatuan(harga.roughneck)}}>
                            Roughneck
                        </button>
                        <button className={`px-3 py-2 font-bold ${brand==='Uniqlo'? "bg-[#17AF68] text-white" : "bg-gray-200"}`} onClick={()=>{setBrand('Uniqlo'), setHargasatuan(harga.uniqlo)}}>
                            Uniqlo
                        </button>
                    </p>
                </div>

                <div className="pt-3">
                    <p>Harga :</p>
                    <p>{hargasatuan}</p>
                </div>

                <div className="pt-3">
                    <p>Warna : <br />
                        <button className={`bg-red-700 w-10 h-10 border-2 border-solid ${warna=='merah'? "border-[#17AF68]" : ""}`} onClick={()=> setWarna('merah')}></button>
                        <button className={`bg-gray-500 w-10 h-10 border-2 border-solid mx-2 ${warna=='abu-abu'? "border-[#17AF68]" : ""}`} onClick={()=> setWarna('abu-abu')}></button>
                        <button className={`bg-blue-500 w-10 h-10 border-2 border-solid ${warna=='biru'? "border-[#17AF68]" : ""}`} onClick={()=> setWarna('biru')}></button>
                        <button className= {`bg-amber-800 w-10 h-10 border-2 border-solid ml-2 ${warna=='coklat'? "border-[#17AF68]" : ""}`} onClick={()=> setWarna('coklat')}></button>

                    </p>
                </div>

                <div className="pt-3">
                    <p>Ukuran : <br />
                        <button className={`bg-gray-200 w-10 h-10 ${ukuran==='M'? "bg-[#17AF68] text-white" : "bg-gray-200"}`} onClick={()=> setUkuran('M')}> M</button>
                        <button className={`bg-gray-200 w-10 h-10 mx-2 ${ukuran==='L'? "bg-[#17AF68] text-white" : "bg-gray-200"}`} onClick={()=> setUkuran('L') }>L</button>
                        <button className={`bg-gray-200 w-10 h-10 ${ukuran==='XL'? "bg-[#17AF68] text-white" : "bg-gray-200"}`} onClick={()=> setUkuran('XL') }>XL</button>

                    </p>
                </div>

                <div className="pt-3">
                    <p>Jumlah : <br />
                        {jumlah>1? 
                        <button className="bg-[#17AF68] w-7 h-7 mr-2 font-bold text-white" onClick={()=> setJumlah(jumlah-1)}>
                            -
                        </button>
                        :
                        <button className="bg-gray-200 w-7 h-7 mr-2 font-bold">
                            -
                        </button>
                        }
                            {jumlah}
                        <button className="bg-[#17AF68] w-7 h-7 ml-2 font-bold text-white" onClick={()=> setJumlah(jumlah+1)}>
                            +
                        </button>
                    </p>
                </div>

                <div className="mt-10 border border-solid border-black p-5 rounded-lg">
                    <h1 className="text-lg font-semibold">Rincian Pesanan Anda adalah</h1>
                    <p> Kemeja : {brand}</p>
                    <p> Warna : {warna}</p>
                    <p> Ukuran : {ukuran}</p>
                    <p> Jumlah : {jumlah}</p>
                    <p className="text-lg font-bold"> Total Harga : Rp {total}</p>
                </div>
        </div>
    )
}