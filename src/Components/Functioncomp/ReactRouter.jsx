import React from "react";
import {  useLocation, useParams } from "react-router";

export default function ReactRouter(){
const param=useParams()
const{id}=param
const location=useLocation()

console.log(location);
    return(
        <>
        <p>Reactrouter{id} </p>
        </>
    )
}