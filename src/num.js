import React,{useState} from "react";

const Num=()=>{

   const [gt,st]=useState('html')

    return(<div>
        
    
<h3>{gt}</h3>
<button onClick={()=>{
    st(['css','scss']);
}}>click</button>
<h4>{gt}</h4>
<h4>{gt}</h4>




    </div>)
}

export {Num};