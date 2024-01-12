import React, { useContext } from "react";
import CounterContext from "../ContextApi/CounterContext";

export default function ProductProvide() {
    const { increment } = useContext(CounterContext)
    return (
        <>
            <button onClick={increment}>add to card</button>
        </>
    )
}