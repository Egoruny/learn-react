import { useState } from "react"


export const Playstation = () => {
    const [playstation, setPlayStation] = useState(0)

    const incPlaystation = () => {

        setPlayStation(playstation + 1)
    }
    const decPlaystation = () => {
        if (playstation)
            setPlayStation(playstation - 1)
    }

    return (
        <>
            <h1>Playstation</h1>
            <button onClick={incPlaystation}>+</button>
            <button onClick={decPlaystation}>-</button>
            <p>{playstation}</p>
        </>
    )


}