import axios from "axios";
import React, { useEffect, useState } from "react";
import Lifecycle from "../../ClassComp/Lifecycle";
import { Link } from "react-router-dom";

export default function useFetchApi(url,initialise){
const[data,setdata]=useState(initialise)

useEffect(()=>{
    handlefetch()
},[])

const handlefetch=async()=>{
    try{
    // let response=await axios.get(url)
    // setdata(response.data)  
    let res=await fetch(url) 
    let response=await res.json()
    setdata(response)  
    }
    catch(err){
        console.log(err);
    }
}
 return {data}
}


