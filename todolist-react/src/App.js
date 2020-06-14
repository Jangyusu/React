import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert1',
      email: 'first@naver.com',
    },
    {
      id: 2,
      username: 'velopert2',
      email: 'second@naver.com',
    },
    {
      id: 3,
      username: 'velopert3',
      email: 'third@naver.com',
    },
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    nextId.current += 1;
  };

  return <UserList users={users} />;
}

export default App;
