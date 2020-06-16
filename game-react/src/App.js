import React, { useState } from 'react';
import './App.css';
import Random from './Random';
import Player from './Player';

function App() {
  const [state, setState] = useState({
    text: '...',
  });

  function aa(e) {
    const clickItem = e.target.innerText;

    setState({
      ...state,
      text: clickItem,
    });
  }

  return (
    <div className="App">
      <Random state={state.text} />
      <Player onClick={aa} />
    </div>
  );
}

export default App;
