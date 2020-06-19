import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
// import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}></Route>
      {/* <Route path="/Dashbord" component={Dashboard}></Route> */}
    </Router>
  );
}

export default App;
