import React,{useState} from "react";
export default function EmojiMeaning() {
    const emojiDictionary = {
        "🥰": "Smiling Face with Hearts",
        "😊": "Smiling Face with Smiling Eyes",
        "🥳": "Partying Face",
        "🤍": "White Heart",
        "🔥": "Fire",
        "😂": "Face with Tears of Joy"
    }
    let [userInput,setUserInput]=useState("");
    function checkMeaning(event){
        let emoji = event.target.value
        let meaning = emojiDictionary[emoji];
        if(meaning===undefined){
            meaning = "we dont have it in out db    "
        }
        setUserInput(meaning)
    }
    return(
        <>
        <div>EmojiPedia {userInput}</div>
            <input onChange={checkMeaning}  />
            
        </>
    )
}