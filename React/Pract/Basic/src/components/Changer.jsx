import React, {useState} from "react";

export default function Changer() {
    const [userInput, setUserInput] = useState("");
    function inputChanged(event){
        console.log(event.target.value);
        setUserInput(event.target.value);
    }
    return (
        <>
        <div>Changer</div>
        <div>{userInput}</div>
        <input onChange={inputChanged} />
        </>
    );
}