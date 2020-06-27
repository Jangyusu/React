import React from 'react';

function Contacts({ users, value, onChange, onClick }) {
  const _onChange = e => {
    const { value } = e.target;

    onChange([], value);
  };

  const _onClick = e => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === e.target.innerText) {
        return onClick(users[i].id);
      }
    }
  };

  return (
    <>
      <h1>Contact</h1>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={_onChange}
      ></input>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id} onClick={_onClick}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Contacts;
