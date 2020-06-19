import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
        <Link to="/Dashbord">
          <button type="submit" className="btn btn-primary">
            로그인
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
