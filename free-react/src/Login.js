import React from 'react';

function Login() {
  return (
    <div className="Login">
      <form className="form">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="glyphicon glyphicon-user"></i>
          </span>
          <input
            id="id"
            type="text"
            class="form-control"
            name="id"
            placeholder="ID"
          />
        </div>
        <div class="input-group">
          <span class="input-group-addon">
            <i class="glyphicon glyphicon-lock"></i>
          </span>
          <input
            id="password"
            type="password"
            class="form-control"
            name="password"
            placeholder="PASSWORD"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
