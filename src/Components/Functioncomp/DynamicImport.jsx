import React, { useState } from "react";
// import { Data } from "./DynamicData";

export default function DynamicImport() {
    const [show, setshow] = useState(false)
    const [data, setdata] = useState([])
    const handle = async () => {
        const response = await import('./DynamicData')
        setdata(response.Data)
        setshow(true)
    }
    return (
        <>
            <h1>Dynamic Import</h1>
            <button onClick={handle}>click</button>
             {show ? <div>{data.map((ee) => (
                <h1>{ee.title}</h1>
            ))}</div> : ""}
        </>
    )
}