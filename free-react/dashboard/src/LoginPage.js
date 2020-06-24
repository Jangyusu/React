import React, { useState } from 'react';
import './LoginPage.css';
import { LoginApi } from './api/login';

const LoginPage = ({ onSubmit }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const _onSubmit = e => {
    e.preventDefault();

    // await LoginApi();

    if (
      id === sessionStorage.getItem('username') &&
      password === sessionStorage.getItem('password')
    ) {
      onSubmit(true);
    }
  };

  const _onChangeId = e => {
    setId(e.target.value);
  };
  const _onChangePassword = e => {
    setPassword(e.target.value);
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
            onChange={_onChangeId}
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
            onChange={_onChangePassword}
          />
        </div>
        <button className="btn btn-primary">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
