import React from 'react';
import style from './App.css'
import './App.css';

import WordCard from './WordCard';
const word = 'Hello'
const word1 = 'BABY'
const word2 = 'Goodmorning'
function App() {
  return (
    <div >
      <div >WELL COME TO CARD GAME</div>
     <div >
     <WordCard value ={word}/>
     <WordCard value ={word1}/>
     <WordCard value ={word2}/>
    </div>
  </div>
  );
}

export default App;
