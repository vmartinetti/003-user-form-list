

const ListItem = (props) => {
  return (
    <li onClick={props.deleteHandler} id={props.user.id}>
      
        {props.user.name}
        {props.user.age}
      
    </li>
  );
};

export default ListItem;
