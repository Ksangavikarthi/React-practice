import React, { useState } from "react";
 

export default function Introfun(props){
    const[name,setname]=useState('kavi')
    
    const handle=()=>{
      setname('pavi')
    }
    return(
        <>
      <p>{name}</p>
      <button onClick={handle}>click</button>
      <p>{props.alter}</p>
        </>
    )
 }

