import React from "react";
import Propsdrillchild from "./Propsdrillchild";

export default function Propsdrilling(){
    const [data, setdata] = useState('topic')

    const [show, setshow] = useState('direct name show')


    const handlechange = () => {
        setdata('this is propsdrilling method')
    }
    return(
        <>
  <h1>topics: {data}</h1>
    <Propsdrillchild  change={handlechange}/>


            {/* <p>alternate method</p>
            <Propsdrillchild change={show} /> */}
        </>
    )
}