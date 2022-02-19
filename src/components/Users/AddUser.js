import { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value
    const enteredAge = ageInputRef.current.value
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age (non-empty values)',
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (greater than 0)',
      })
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';

  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Name</label>
          <input
            ref={usernameInputRef}
            type="text"

            id="username"
            placeholder="Enter your username"
            
          />

          <label htmlFor="age">Age</label>
          <input
          ref={ageInputRef}
            type="number"

            id="age"
            placeholder="Enter your age"
           
          />

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
