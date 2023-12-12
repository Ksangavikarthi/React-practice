import React, { useState } from "react";
export default function Datafetchfun(){
    const[data,setdata]=useState([])

   const  handle=()=> {
        let d=fetch('https://fakestoreapi.com/products')
        .then((res)=>{ 
           return res.json()
       })
        .then((product)=>{
           setdata(product)
       })
        .catch((err)=>{
           console.log(err)
       })
    }
    return(
        <>
        <h1>products list</h1>
            {data.map((list,i)=>(
                <div key={i}>
                <h1>{list.title}</h1>
                <p>{list.description}</p>

                </div>
            ))}
         <button onClick={handle}>add product</button>
            
        </>
    )
}