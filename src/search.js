import React,{useState} from "react";
import './style.css';

const Search=()=>{
const [ginp,sinp]=useState('');
const [glis,slis]=useState([]);
const [g1,s1]=useState(['html','css','js','python','react'])


const Clicked=()=>{
    slis([...glis,ginp]);
}

const Map=glis.map((v,i)=>
<ul key={i}><li>{v}</li></ul>
)

    return(
        <>
        <div>
            <input className="inp1" onChange={(a)=>{
sinp(a.target.value)

            }} style={{width:'500px',height:'50px',borderRadius:'20px'}} type='text' placeholder="Search"/>
        </div>
        <h3>{ginp}</h3>
        <button onClick={Clicked}>Click</button>

        <table>
            <tr>
                <th>Sl.No</th>
                <th>Title</th>
                <th>price</th>
            </tr>
            {g1.map((v,i)=>
            <tr key={i}>
            <td>{i+1}</td>
            <td>{v}</td>
            </tr>)}
        </table>
        
        </>
    )
}

export {Search};