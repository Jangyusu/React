import React, { useState } from 'react';

function Detail({ selectedId, users, onEdit, onRemove }) {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
  });

  const _onSubmit = e => {
    e.preventDefault();

    const { name, phone } = e.target;

    onEdit(name.value, phone.value);
    setInputs({
      name: '',
      phone: '',
    });
  };

  const _onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  if (selectedId === 0) {
    return (
      <>
        <h2>Detail information</h2>
        <div>
          <p>Plese User Select</p>
        </div>
        <button>Edit</button>
        <button onClick={onRemove}>Remove</button>
      </>
    );
  } else {
    let selectedUser = users.filter(user => {
      return user.id === selectedId;
    });
    const { id, name, phone } = selectedUser[0];

    return (
      <>
        <h2>Detail information</h2>
        <form onSubmit={_onSubmit}>
          <p>id : {id}</p>
          <input
            type="text"
            placeholder={name}
            name="name"
            value={inputs.name}
            onChange={_onChange}
          ></input>
          <input
            type="text"
            placeholder={phone}
            name="phone"
            value={inputs.phone}
            onChange={_onChange}
          ></input>
          <button>Edit</button>
          <button onClick={onRemove}>Remove</button>
        </form>
      </>
    );
  }
}

export default Detail;
