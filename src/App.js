import React from 'react';

import './App.css';

import WordCard from './WordCard';
const word = 'Hello'
const word1 = 'BABY'
const word2 = 'Goodmorning'
function App() {
  return (
    <div >
     <WordCard value ={word}/>
     <WordCard value ={word1}/>
     <WordCard value ={word2}/>
    </div>
  );
}

export default App;
