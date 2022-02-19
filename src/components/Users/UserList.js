import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const deleteHandler = (event) => {
    console.log("event", event);
    console.log("deleteHandler " + event.target.id);
    // props.deleteUser(key);
  };
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
