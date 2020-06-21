import React from 'react';
import { connect } from 'react-redux';
import BedButton from './BedButton';

function App({ number }) {
  return (
    <div className="App">
      <span>{number}</span>
      <br />
      <BedButton />
    </div>
  );
}

let mapStateToProps = state => {
  return {
    number: state.data.number,
  };
};

App = connect(mapStateToProps, null)(App);

export default App;
