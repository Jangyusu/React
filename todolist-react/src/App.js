import React, { useRef, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function CountActive(users) {
  console.log('활성 사용자 수 세는 중');
  return users.filter(user => user.active).length;
}

const initState = {
  users: [
    {
      id: 1,
      username: 'aaa',
      email: 'aaa@aaa.com',
      active: true
    },
    {
      id: 2,
      username: 'bbb',
      email: 'bbb@aaa.com',
      active: false
    },
    {
      id: 3,
      username: 'ccc',
      email: 'ccc@aaa.com',
      active: false
    }
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
            ? { ...user, active: !user.active }
            : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      throw new Error('Unhandled action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  })
  const { username, email } = form;
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, []);

  const count = useMemo(() => CountActive(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onToggle={onToggle}
        onRemove={onRemove} />
      <div>활성 사용자 수: {count}</div>
    </>
  )

  // const [inputs, setInputs] = useState({
  //   username: '',
  //   email: ''
  // });

  // const { username, email } = inputs;

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   setInputs(inputs => ({
  //     ...inputs,
  //     [name]: value
  //   }));
  // }, []);

  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: 'aaa',
  //     email: 'aaa@aaa.com',
  //     active: true
  //   },
  //   {
  //     id: 2,
  //     username: 'bbb',
  //     email: 'bbb@aaa.com',
  //     active: false
  //   },
  //   {
  //     id: 3,
  //     username: 'ccc',
  //     email: 'ccc@aaa.com',
  //     active: false
  //   },
  // ]);

  // const nextId = useRef(4);

  // const onCreate = useCallback(() => {
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email
  //   };

  //   // setUsers([...users, user]);
  //   setUsers(users => users.concat(user));

  //   setInputs({
  //     username: '',
  //     email: ''
  //   });
  //   // console.log(nextId.current);
  //   nextId.current += 1;
  // }, [username, email]);

  // const onRemove = useCallback(id => {
  //   setUsers(users => users.filter(user => user.id !== id));
  // }, []);

  // const onToggle = useCallback(id => {
  //   setUsers(users => users.map(
  //     user => user.id === id
  //       ? { ...user, active: !user.active }
  //       : user
  //   ));
  // }, []);

  // const count = useMemo(() => CountActive(users), [users]);

  // return (
  //   <>
  //     <CreateUser
  //       // username={username}
  //       // email={email}
  //       // onChange={onChange}
  //       // onCreate={onCreate}
  //     />
  //     <UserList users={[]} />
  //     <div>활성 사용자 수: 0</div>
  //   </>
  // );
}

export default App;