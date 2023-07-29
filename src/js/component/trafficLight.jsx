import React, { useState } from "react";

const TrafficLight = () => {

    const [chosenColor, setChosenColor] = useState("")
    const [addLight, setAddLight] = useState("")

    return (
        <>
            <div className="traffic-light-stem"></div>
            <div className={addLight === "add purple" ? "traffic-light-body-ext" : "traffic-light-body"}>
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
                <div
                    className={addLight === "add purple" ? chosenColor === "purple" ? "purple-light selectedP" : "purple-light" : ""}
                    onClick={() => setChosenColor("purple")}

                ></div>
            </div>
            <div className="buttonsDiv">
                <button 
                className="toggle-light"
                onClick={() => setAddLight("add purple")}
                
                >Make Things Interesting</button>
            </div>
        </>
    )
}

export default TrafficLight;
