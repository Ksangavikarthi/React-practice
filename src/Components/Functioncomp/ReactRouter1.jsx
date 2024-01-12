import React from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router";
import ReactRouter from "./ReactRouter";


//usehistory use version 5 it is same as navigation 
//const history=usehistory()
// no 16-alternate---history.push("/reactrouer")

export default function ReactRouter1(){
const param=useParams()
const{id}=param
    const Navigation=useNavigate()

    const handle=()=>{
        Navigation("/ReactRouter")
    }
    return(
        <>
        <p>reactrouter1</p>
        <button onClick={handle}>before</button>
        </>
    )
}