import React from 'react';
import {useEffect, useState } from 'react'

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const savedCount = parseInt(localStorage.getItem('count') ?? 0)
        console.log(savedCount);
        setCount(savedCount)
    },[])

    useEffect (() => {
        localStorage.setItem('count', count)
    },[count])

    const buttonClick = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div>Clicker {count}</div>
            <button onClick={buttonClick}>Click me</button>
        </>
    )
}

export default App
