import React from 'react';
import AddButton from './AddButton';
import SubButton from './SubButton';

function App({ store }) {
  return (
    <div className="App">
      <span>{store.getState().data.number}</span>
      <br />
      <AddButton store={store} />
      <SubButton store={store} />
    </div>
  );
}

export default App;
