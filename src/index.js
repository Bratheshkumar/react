import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { Num } from './num';
// import { Google } from './google';
// import { Search } from './search';


const Border=()=>{
  return(
    <div className='border' >
{/* <Google name='Google' a='Hi..' color='red'/>
<Google name='gmail'/>
<Google name='Email' color='purple' font='20px'/>
<Search/> */}

<Num/>

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Border/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

