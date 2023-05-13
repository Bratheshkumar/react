import React,{useState} from "react";

const Multi=()=>{
const [gm,sm]=useState([{fname:'Bala',age:25,designation:'Bca'},{fname:'Brathesth',age:21,designation:'Be'},
{fname:'Shkthi',age:23,designation:'Bca'},{fname:'Prabu',age:27,designation:'B.tec'}])

    return(<div>
<table border='1'>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Designation</th>
    </tr>
    {gm.map((v,i)=>
    <tr key={i}>
        <td>
            {v.fname}
        </td>
        <td>{v.age}</td>
        <td>{v.designation}</td>
    </tr>)}
</table>


    </div>)
}

export {Multi};