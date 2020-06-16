import React, { useState } from 'react';
import './App.css';
import Random from './Random';
import Player from './Player';

function App() {
  const [state, setState] = useState({
    text: '...',
    result: '...',
  });
  const { text, result } = state;

  function onClick(e) {
    const clickItem = e.target.innerText;

    setState({
      ...state,
      text: clickItem,
    });

    console.log();
  }

  return (
    <div className="App">
      <Random text={text} />
      <Player onClick={onClick} result={result} />
    </div>
  );
}

export default App;
