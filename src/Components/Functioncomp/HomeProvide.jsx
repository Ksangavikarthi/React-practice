import React, { useContext } from "react";
import CounterContext from "../ContextApi/CounterContext";

export default function HomeProvide() {
    const { count } = useContext(CounterContext)
    return (
        <>
            <h1>sales card: {count}</h1>
        </>
    )
}