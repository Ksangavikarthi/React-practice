import React, { useState } from "react";

export default function Reactform() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [age, setage] = useState("")
    const [show, setshow] = useState(false)

    const handlename = (e) => {
        setname(e.target.value)
    }
    const handleemail = (e) => {
        setemail(e.target.value)
    }
    const handleage = (e) => {
        setage(e.target.value)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        setshow(true)
    }
    return (
        <>
           {!show && <form>
                <label>Name</label>
                <input onChange={(e) => handlename(e)} type='text' placeholder="Enter  ur name" />
                <br /><br />

                <label>Email</label>
                <input onChange={(e) => handleemail(e)} type='text' placeholder="Enter  ur email" />
                <br /><br />

                <label>age</label>
                <input onChange={(e) => handleage(e)} type='number' placeholder="Enter  ur age" />
                <br /><br />
                <button onClick={handlesubmit}>submit</button>
            </form>}
            <br />
            {show &&
                <>
                    Name:{name} <br />
                    Email:{email} <br />
                    Age:{age}
                </>
            }
        </>
    )
}