// import Counter from 'begin-react/src/Counter';
// import CounterContainer from './containers/CounterContainer';
import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={Login}></Route>
      <Route path="/Dashbord" component={Dashboard}></Route>
    </>
  );
}

export default App;
