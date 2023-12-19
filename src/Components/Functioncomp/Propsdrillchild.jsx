import React from "react";
import Propsgrandchild from "./Propsgrandchild";

export default function Propsdrillchild(){
    return(
        <>
          <h1>Propsdrillchilld </h1>
            <p>this component is also render,because for passing a props doesn't use in this function,but parent to child need to passed so we need it.</p>
            <Propsgrandchild change={change} />



            {/* <p>child conversion</p>
    <Propsgrandchild change={change} /> */}

        </>
    )
}