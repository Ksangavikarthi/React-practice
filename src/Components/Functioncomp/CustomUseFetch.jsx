import React from "react";
import useFetchApi from "./Hooks/usefetchapi";

export default function CustomUSeFetch() {

    const { data } = useFetchApi("https://jsonplaceholder.typicode.com/todos/", [])
    return (
        <>
            {data.map((value,i) => (
                <div key={i}>
                    <p>{value.title}</p>
                </div>

            ))}
        </>
    )
}