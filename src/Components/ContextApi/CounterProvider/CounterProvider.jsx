import React, { useState } from "react";
import CounterContext from "../CounterContext";

export default function CounterProvider({ children }) {
    const [count, setcount] = useState(0)

    const increment = () => {
        setcount(count + 1)
    }

    return (
        <>
            <CounterContext.Provider value={{ count, increment }}>
                {children}
            </CounterContext.Provider>
        </>
    )
}