import React, { useEffect, useState } from "react";

export  const withfetchapi = (Wrappedcomp, url) => {
    return function Datafetching(props) {
        const [data, setdata] = useState([])

        useEffect(() => {
            handle()
        })
        const handle = async () => {
            try {
                const response = await fetch(url)
                const res = await response.json()
                setdata(res)
            }
            catch (err) {
                console.log(err);
            }
        }
        return < Wrappedcomp data={data} {...props} />
            
    }
}