import React from "react";
import useFetchApi from "./Hooks/usefetchapi";

export default function CustomUSeFetch1() {

    const { data } = useFetchApi("https://fakestoreapi.com/products", [])
    return (
        <>
            {data.map((val,i) => (
                <div key={i}>
                    <p>{val.title}</p>
                </div>

            ))}
        </>
    )
}