import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form">
        <input type="id" id="id" placeholder="아이디"></input>
        <input type="password" id="pw" placeholder="비밀번호"></input>
        <button type="button" className="btn btn-primary">
          로그인
        </button>
      </form>
    </div>
  );
}

export default App;
