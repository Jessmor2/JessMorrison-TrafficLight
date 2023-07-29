import React, { useState } from "react";

const TrafficLight = () => {

    const [chosenColor, setChosenColor] = useState("")
    const [toggleLight, setToggleLight] = useState("")

    return (
        <>
            <div className="traffic-light-stem"></div>
            <div className="traffic-light-body">
                <div 
                    className={chosenColor === "red" ? "red-light selectedR" : "red-light"}
                    onClick={() => setChosenColor("red")}
                
                ></div>
                
                
                <div 
                    className={chosenColor === "yellow" ? "yellow-light selectedY" : "yellow-light"}
                    onClick={() => setChosenColor("yellow")}
                
                ></div>
                <div 
                    className={chosenColor === "green" ? "green-light selectedG" : "green-light"}
                    onClick={() => setChosenColor("green")}
                
                ></div>
            </div>
        </>
    )
}

export default TrafficLight;
