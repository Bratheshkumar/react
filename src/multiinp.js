import React,{useState} from "react";

const Inp1=()=>{
const [ginp,sinp]=useState([{fname:'',age:'',desi:'',color:''}]);

const Changing=(e)=>{
    sinp({...ginp,[e.target.name]:e.target.value})
}

const [gadd,sadd]=useState([]);

const Click=()=>{
    sadd([...gadd,ginp]);
}

    return(<><div>
<input type='text' placeholder="name" name='fname' onChange={Changing}/>
<input type='number' placeholder="Age" name='age' onChange={Changing}/>
<input type='text' placeholder="Designation" name='desi' onChange={Changing}/>
<input type='text' placeholder="Designation" name='color' onChange={Changing}/>
<button onClick={Click}>Add</button>
    </div>
    <div style={{padding:'20px',border:'2px solid black'}}>

<table border='1'>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Colors</th>
    </tr>
    {gadd.map((v,i)=>
    <tr key={i}>
        <td>{v.fname}</td>
        <td>{v.age}</td>
        <td>{v.desi}</td>
        <td>{v.color}</td>
    </tr>)}
</table>

    </div>
    </>)
}

export {Inp1};