import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList]=useState([]);
  
  const addUserHandler = (username,age) => {
    setUserList(prevUsers => [...prevUsers, {username: username, age: age, id: Math.random().toString()}]);
    
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </>
  );
}

export default App;
