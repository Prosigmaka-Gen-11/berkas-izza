import React, { Component } from "react";

export default class Lifecycle extends Component{
    constructor(){
        super()

        this.state = {
            brand:'',
            warna:'',
            ukuran:'',
            harga_satuan: 0,
            jumlah: 0,
            total:0,
        }

        this.harga ={
            erigo : 145000,
            roughneck : 120000,
            uniqlo : 200000
        }
        
    }

    componentDidMount(){
        this.setState({
            brand:'Erigo',
            warna:'merah',
            ukuran:'M',
            harga_satuan: this.harga.erigo,
            jumlah:1,
        })
    }

    componentDidUpdate(prop, state){
        if(state.jumlah !== this.state.jumlah){
            this.setState({
                total : this.state.jumlah*this.state.harga_satuan
            })
        }

    }
    componentWillUnmount(){
        console.log('sebelum class component hilang')
        this.setState({
            brand:'',
            warna:'',
            ukuran:'',
            harga_satuan: 0,
            jumlah: 0,
            total:0,
        })
    }
    
    render(){
        return(
            <div className="border border-solid border-slate-900 p-16 inline-block rounded-2xl bg-white">
                <h1 className="text-xl">Silahkan pilih kemeja pesanan Anda</h1>
                <div className="pt-3">
                <p>Brand : <br />
                    <button className={`px-3 py-2 font-bold ${this.state.brand==='Erigo'? "bg-[#ee4d2d] text-white" : "bg-gray-200"}`} onClick={()=> this.setState({brand : 'Erigo', harga_satuan : this.harga.erigo})}>
                        Erigo
                    </button>
                    <button className={`px-3 py-2 font-bold mx-2 ${this.state.brand==='Roughneck'? "bg-[#ee4d2d] text-white" : "bg-gray-200"}`} onClick={()=> this.setState({brand : 'Roughneck', harga_satuan : this.harga.roughneck})}>
                        Roughneck
                    </button>
                    <button className={`px-3 py-2 font-bold ${this.state.brand==='Uniqlo'? "bg-[#ee4d2d] text-white" : "bg-gray-200"}`} onClick={()=> this.setState({brand : 'Uniqlo', harga_satuan : this.harga.uniqlo})}>
                        Uniqlo
                    </button>
                </p>
                </div>

                <div className="pt-3">
                    <p>Harga :</p>
                    <p>{this.state.harga_satuan}</p>
                </div>

                <div className="pt-3">
                    <p>Warna : <br />
                        <button className={`bg-red-700 w-10 h-10 border-2 border-solid ${this.state.warna=='merah'? "border-[#ee4d2d]" : ""}`} onClick={()=> this.setState({warna : 'merah'})}></button>
                        <button className={`bg-gray-500 w-10 h-10 border-2 border-solid mx-2 ${this.state.warna=='abu-abu'? "border-[#ee4d2d]" : ""}`} onClick={()=> this.setState({warna : 'abu-abu'})}></button>
                        <button className={`bg-blue-500 w-10 h-10 border-2 border-solid ${this.state.warna=='biru'? "border-[#ee4d2d]" : ""}`} onClick={()=> this.setState({warna : 'biru'})}></button>
                        <button className= {`bg-amber-800 w-10 h-10 border-2 border-solid ml-2 ${this.state.warna=='coklat'? "border-[#ee4d2d]" : ""}`} onClick={()=> this.setState({warna : 'coklat'})}></button>

                    </p>
                </div>

                <div className="pt-3">
                    <p>Ukuran : <br />
                        <button className={`bg-gray-200 w-10 h-10 ${this.state.ukuran==='M'? "bg-[#ee4d2d] text-white" : "bg-gray-200"}`} onClick={()=> this.setState({ukuran : 'M'})}> M</button>
                        <button className={`bg-gray-200 w-10 h-10 mx-2 ${this.state.ukuran==='L'? "bg-[#ee4d2d] text-white" : "bg-gray-200"}`} onClick={()=> this.setState({ukuran : 'L'})}>L</button>
                        <button className={`bg-gray-200 w-10 h-10 ${this.state.ukuran==='XL'? "bg-[#ee4d2d] text-white" : "bg-gray-200"}`} onClick={()=> this.setState({ukuran : 'XL'})}>XL</button>

                    </p>
                </div>

                <div className="pt-3">
                    <p>Jumlah : <br />
                        {this.state.jumlah>1? 
                        <button className="bg-[#ee4d2d] w-7 h-7 mr-2 font-bold text-white" onClick={()=> this.setState({jumlah : this.state.jumlah-1})}>
                            -
                        </button>
                        :
                        <button className="bg-gray-200 w-7 h-7 mr-2 font-bold">
                            -
                        </button>
                        }
                            {this.state.jumlah}
                        <button className="bg-[#ee4d2d] w-7 h-7 ml-2 font-bold text-white" onClick={()=> this.setState({jumlah : this.state.jumlah+1})}>
                            +
                        </button>
                    </p>
                </div>

                <div className="mt-10 border border-solid border-black p-5 rounded-lg">
                    <h1 className="text-lg font-semibold">Rincian Pesanan Anda adalah</h1>
                    <p> Kemeja : {this.state.brand}</p>
                    <p> Warna : {this.state.warna}</p>
                    <p> Ukuran : {this.state.ukuran}</p>
                    <p> Jumlah : {this.state.jumlah}</p>
                    <p className="text-lg font-bold"> Total Harga : Rp {this.state.total}</p>
                </div>
            </div>
        )
    }

}