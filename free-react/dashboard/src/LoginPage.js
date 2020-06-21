import React from 'react';
import './LoginPage.css';

function LoginPage({ onSubmit }) {
  const _onSubmit = e => {
    e.preventDefault();
    
    onSubmit(true);
  };

  return (
    <div className="login">
      <form className="form" onSubmit={_onSubmit}>
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
        <button className="btn btn-primary">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
