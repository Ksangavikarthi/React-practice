import React, { useReducer } from "react";
const countercomp = (count, action) => {
    switch (action) {
        case '+':
            return count + 1
        case '-':
            return count - 1
    }
}

export default function Reducercomp() {
    const [count, dispatch] = useReducer(countercomp, 0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch("+")}>add</button>  <br />
            <button onClick={() => dispatch("-")}>minus</button>
        </>
    )
}