import React, { useState } from "react";
export default function Counterfun(props){
    const[data,setdata]=useState(10)
    // const[name,setname]=useState('leo')---this comment is alsoo worked,but is same counting fun performed it 
    
    const handle=()=>{
      setdata(data+2)
      }
    return(
        <>
        {/* <h1>movie:{name}</h1>
        <p>ticke{data}</p>
        <button onClick={handle}>add</button> */}
        <h1>movie:{props.moviename}</h1>
        <p>ticke{data}</p>
        <button onClick={handle}>add</button>
        </>
    )
}