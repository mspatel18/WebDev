import React from 'react';
import "./App.css"
import Clicker from './components/Clicker.jsx';
import Changer from './components/Changer.jsx';
import EmojiMeaning from './components/EmojiMeaning.jsx';
import Animelist from './components/AnimeList.jsx';
export default function App() {
    
    return (
        <>
           <Clicker />
           <Changer />
           <EmojiMeaning />
           <Animelist />
        </>
    )
}
