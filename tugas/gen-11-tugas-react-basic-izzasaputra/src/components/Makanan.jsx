import React from "react";

export default function Makanan(props){
    return(
        <button className="bg-blue-500 border border-solid py-2 inline-block w-32" onClick={props.setMakanan}>
            <h1>{props.nama}</h1>
        </button>
    )
}