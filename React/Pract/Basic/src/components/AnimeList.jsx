import React from "react";
export default function Animelist(){
    let animeList = ['AOT','Demon Slayer','Tokyo Revengers','Death Note','One Punch Man'];
    // console.log(animeList);
    return (
        <>
            <div>Anime that I have watched</div>
            <ul>
                {animeList.map(items => {
                    return <li>{items}</li>
                })}
            </ul>
        </>
    )
}