import React from 'react';
import {useEffect, useState } from 'react'

export default function Clicker() {
    const [likeCounter,setLikeCounter]=useState(0)

    function increment() {
        console.log(likeCounter)
        setLikeCounter(likeCounter+1)
        
    }
    function decrement(){
        console.log(likeCounter)
        setLikeCounter(likeCounter-1)
    }
    return (
        <>
            <div>Counter : {likeCounter}</div>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </>
    )
}
