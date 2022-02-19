import { useState  } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

const Users = () => {
  const [users, setUsers] = useState([]);

  const addUser = user => {
    console.log('Adding the following user: ', user)
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    console.log('DEleting the folowwing id: ', id)
    setUsers( prevUsers => {
      return prevUsers.filter(user => user.id !== id);
    });
  };

  return (
    <div>
      <AddUser addUser={addUser}></AddUser>
      <UserList deleteUser={deleteUser} users={users} ></UserList>
    </div>
  );
};
export default Users;
