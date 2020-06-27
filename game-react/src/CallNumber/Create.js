import React, { useState, useRef } from 'react';

function Create({ users, id, onSubmit }) {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
  });

  const _onSubmit = e => {
    e.preventDefault();

    const { name, phone } = e.target;

    onSubmit([
      ...users,
      {
        id: id.current,
        name: name.value,
        phone: phone.value,
      },
    ]);

    setInputs({
      name: '',
      phone: '',
    });
    inputName.current.focus();
  };

  const _onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const inputName = useRef(null);

  return (
    <>
      <h2>Create new user</h2>
      <form onSubmit={_onSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          ref={inputName}
          value={inputs.name}
          onChange={_onChange}
          required
        ></input>
        <input
          type="tel"
          placeholder="phone"
          name="phone"
          value={inputs.phone}
          onChange={_onChange}
          required
        ></input>
        <button>Create new user</button>
      </form>
    </>
  );
}

export default React.memo(Create);
