import { useState } from "react"


export const Earth = () => {
    const [erth, setErth] = useState(0)

    const incErth = () => setErth(erth + 1000)
    const decErth = () => {
        if (erth)
            setErth(erth - 1000)
    }


    return (
        <>
            <h1>Erth</h1>
            <button onClick={incErth}>+</button>
            <button onClick={decErth}>-</button>
            <p>{erth}</p>
        </>
    )
}