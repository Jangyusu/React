import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
