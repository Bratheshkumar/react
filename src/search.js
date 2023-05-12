import React from "react";
import './style.css';

const Search=()=>{
    return(
        <div>
            <input className="inp1" style={{width:'500px',height:'50px',borderRadius:'20px'}} type='text' placeholder="Search"/>
        </div>
    )
}

export {Search};