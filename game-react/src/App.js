import React, { useState, useRef } from 'react';
import './App.css';
import Contacts from './CallNumber/Contacts';
import Detail from './CallNumber/Detail';
import Create from './CallNumber/Create';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Abet', phone: '01012345678' },
    { id: 2, name: 'Betty', phone: '01012345678' },
    { id: 3, name: 'Charlie', phone: '01012345678' },
    { id: 4, name: 'David', phone: '01012345678' },
  ]);
  const [value, setValue] = useState('');
  const id = useRef(5);
  const [selectedId, setSelectedId] = useState(0);

  const _onChange = (users, value) => {
    setUsers(users);
    setValue(value);
  };

  const _onSubmit = users => {
    setUsers(users);
    id.current += 1;
  };

  const _onClick = id => {
    setSelectedId(id);
  };

  const _onRemove = () => {
    setUsers(users.filter(user => user.id !== selectedId));
    setSelectedId(0);
  };

  const _onEdit = (name, phone) => {
    setUsers(
      users.map(user =>
        user.id === selectedId ? { ...user, name: name, phone: phone } : user,
      ),
    );
  };

  return (
    <>
      <Contacts
        users={users}
        value={value}
        onChange={_onChange}
        onClick={_onClick}
        selectedId={selectedId}
      />
      <Detail
        selectedId={selectedId}
        users={users}
        onEdit={_onEdit}
        onRemove={_onRemove}
      />
      <Create users={users} id={id} onSubmit={_onSubmit} />
    </>
  );
}

export default App;
