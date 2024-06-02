import React, { useState } from "react";
import { Playstation } from "./playstation";
import { Egs } from "./egs";
import { Earth } from "./erth";



export const App = () => {
    const [inpVal, setInputValuer] = useState('');
    const [isShowElem, setShowElem] = useState(true);

    const oninputChange = (e) => {
        setInputValuer(e.target.value);
    }

    const clear = () => {

        setShowElem(prev=>!prev);
    }



    return (
        <div>   

            <button onClick={clear}>hideElem</button>
            {isShowElem &&         <>
            <div>Your value is:{inpVal}!!!!!</div>
            <select onChange={oninputChange} value={inpVal}>
                <option value='bmw'>bmw</option>
                <option value='audi'>audi</option>
                <option value='mazda'>mazda</option>
            </select>
            </>}
            
        </div>
    );
};