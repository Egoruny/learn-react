import { useState } from "react"
import { useCounter } from "./hooks/useCounter";

export const Egs = () => {
    const [egs, setEgs] = useState(0);


    const incEgs = () => setEgs(egs + 10)
    const decEgs = () => {
        if (egs)
            setEgs(egs - 10)
    }


    return (
        <>
            <h1>Egs</h1>
            <button onClick={incEgs}>+</button>
            <button onClick={decEgs}>-</button>
            <p>{egs}</p>
        </>
    )
}