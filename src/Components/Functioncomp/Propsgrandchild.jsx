import React from "react";

export default function Propsgrandchild(){
    return(
<>
<h1>Propsgrandchild</h1>
       <button onClick={props.change}>change</button>



       {/* <h1>{props.change}</h1> */}
</>
    )
}