import React, {
  useReducer,
  useMemo,
  createContext,
  useState,
  useEffect,
} from 'react';
import produce from 'immer';
import UserList from './UserList';
import CreateUser from './CreateUser';

window.produce = produce;

function countActiveUsers(users) {
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert1',
      email: 'first@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'velopert2',
      email: 'second@naver.com',
      active: false,
    },
    {
      id: 3,
      username: 'velopert3',
      email: 'third@naver.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);

        draft.users.splice(index, 1);
      });
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
