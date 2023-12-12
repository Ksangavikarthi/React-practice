import React, { useEffect, useState } from "react";

//datafetch is normal method but this document is {hooks} method use it.
export default function Lifecyclefun() {
    const [data, setdata] = useState([])
    // const [tr, settr] = useState(true)

    useEffect(() => {
        handlefetch()
        return () => {
            console.log('destroyy');

        }
    }, [])
    const handlefetch = async () => {
        let list = await fetch("https://course-api.com/react-tours-project")
        let res = await list.json()
        setdata(res)
        console.log(res);
    }
    // const test = () => {
    //     settr(false)
    // }

    return (
       <>  {data.map((prod) => (
            <div>
                <h1>{prod.name}</h1>
                <p>{prod.info}</p>
            </div>
        ))}
            {/* <button onClick={test}>click</button> */}

        </>
    )
}
