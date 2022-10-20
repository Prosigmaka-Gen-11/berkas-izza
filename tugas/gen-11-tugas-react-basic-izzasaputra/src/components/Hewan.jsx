import React from "react";

export default function Hewan(props){
    return(
        <button className="bg-red-500 border border-solid py-2 inline-block w-32" onClick={props.setHewan}>
            <h1>{props.nama}</h1>
        </button>
    )
}