import Styles from "./itemonly.module.css";
import ToDoItem from "./todoitem";
const TodoItems = ({ TodoItem, onDeleteClick }) => {
  return (
    <>
      <div className={Styles.itemContainer}>
        {TodoItem.map((e) => (
          <ToDoItem
            key={e.Name}
            TodoDate={e.Date}
            TodoName={e.Name}
            onDeleteClick={onDeleteClick}
          
          ></ToDoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
