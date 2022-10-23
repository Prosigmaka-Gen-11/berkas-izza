import React, { useState } from 'react'
import Lifecycle from './Lifecycle'
import SideEffect from './SideEffect'

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      Lifecycle: true,
      SideEffect: true
    }
  }

  render(){
    return (
      <div className="grid grid-cols-2">
        <div className="flex h-screen">
          <div className="m-auto">
            <h1 className="text-2xl font-bold p-2 text-center">Class Component</h1>
            <div className="py-5">
              <button className="px-3 py-2 bg-[#ee4d2d] rounded-xl text-white mr-5" onClick={()=>this.setState({Lifecycle : true})}>
                Pesan Sekarang
              </button>
              <button className="px-3 py-2 bg-[#ee4d2d] rounded-xl text-white" onClick={()=>this.setState({Lifecycle : false})}>
                Hapus Pesanan
              </button>
            </div>
            {this.state.Lifecycle? <Lifecycle /> : null}
          </div>
        </div>
        <div className="flex h-screen">
          <div className="m-auto">
            <h1 className="text-2xl font-bold p-2 text-center">Functional Component</h1>
            <div className="py-5">
              <button className="px-3 py-2 bg-[#17AF68] rounded-xl text-white mr-5" onClick={()=>this.setState({SideEffect : true})}>
                Pesan Sekarang
              </button>
              <button className="px-3 py-2 bg-[#17AF68] rounded-xl text-white" onClick={()=>this.setState({SideEffect : false})}>
                Hapus Pesanan
              </button>
            </div>
            {this.state.SideEffect? <SideEffect /> : null}
          </div>
        </div>
      </div>
    )
  }
}