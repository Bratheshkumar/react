import React,{useState} from "react";

const Num=()=>{

    const [gt,st]=useState('');
const [gc,sc]=useState([]);


const Change=(e)=>{
    st(e.target.value);
}

const Clicked=()=>{
    sc([...gc,gt])
}

    return(<div>
        
    <input type='text'  onChange={Change}/>
    
    <button onClick={Clicked}>Click</button>

{/* {gc.map((v,i)=>
<ul key={i}>
    <li>
        {i}-{v}
    </li>
</ul>


)} */}


<table border="2">
<tr>
    <th>Sl.No</th>
    <th>Courses</th>
</tr>
{gc.map((v,i)=>
<tr key={i}>
    <td>{i+1}</td>
    <td>{v}</td>
</tr>
)}

</table>


    </div>)
}

export {Num};