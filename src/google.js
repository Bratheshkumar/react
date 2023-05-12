import React from "react";

const Google=({name,a,color,font})=>{
    return(
        <div>
            <h1 style={{fontSize:`${font}`, color:`${color}`}}>{name}</h1>
            <h4>{a}</h4>
        </div>
    )
}

export {Google};