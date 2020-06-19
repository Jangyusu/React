import React from 'react';
import App from './App';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

function LoginPage({ isLogin }) {
  return (
    <div className="login">
      <form className="form">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user"></i>
          </span>
          <input
            id="id"
            type="text"
            className="form-control"
            name="id"
            placeholder="ID"
          />
        </div>
        <div className="input-group">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-lock"></i>
          </span>
          <input
            id="password"
            type="password"
            className="form-control"
            name="password"
            placeholder="PASSWORD"
          />
        </div>
        <Router>
          <Link to="/Dashboard">
            <button className="btn btn-primary">로그인</button>
          </Link>
          <Route path="/Dashboard" component={App} />
        </Router>
      </form>
    </div>
  );
}

export default LoginPage;
