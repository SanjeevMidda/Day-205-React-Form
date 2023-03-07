import React, {useState} from "react";
import "../styles.css";

export default function Hello(){

const [original, setOriginal] = useState("HELLO")

function setNewWord(){
    setOriginal("SUBMITTED");

}

function logging(){
    console.log("Working!");
}

    return(
        <div>
            <form className="layout">
                <h3>{original}</h3>
                <input type = "text" placeholder="  what's your name?"></input> <br />
                <button type = "button" 
                onClick={setNewWord}
                onMouseOver = {logging}
                >SUBMIT</button>
            </form>
        </div>
    )
}