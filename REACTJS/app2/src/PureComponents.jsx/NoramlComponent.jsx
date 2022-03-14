//rafc
import React from "react";
export const NormalComponent=({message})=>{
    console.log("I AM Re Rendaring Now")
    return(
        <div>
            <h2>Message From Parent Component : {message}</h2>
        </div>
    )
}