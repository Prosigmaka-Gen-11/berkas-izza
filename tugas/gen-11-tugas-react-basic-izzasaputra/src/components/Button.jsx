import React from "react";

export default function Button(props){
    return(
        <button className={`${props.btnColor} border border-solid py-2 inline-block w-32`} onClick={props.setColor}>
            <h1>{props.color}</h1>
        </button>
    )
}