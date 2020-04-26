import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: "a",
      email: "a@gmaile.com"
    },
    {
      id: 2,
      username: "b",
      email: "b@gmaile.com"
    },
    {
      id: 3,
      username: "c",
      email: "c@gmaile.com"
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); // 4
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default App;