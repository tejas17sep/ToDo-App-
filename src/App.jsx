import Tejas from "./component/tejas";
import AddToDo from "./component/addtodo";
import TodoItems from "./component/itemonly";
// import ToDoItem2 from "./component/todoitem2";
import WelcomeMessage from "./welcomeMessage";

import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItem = [
    //  {
    //   Name: "Tejas",
    //    Date: "17-12-2001",
    //  }
    // {
    //   Name: "Princy",
    //   Date: "18-12-2004",
    // },
    // {
    //   Name: "Atul",
    //   Date: "19-12-2023",
    // },
    // {
    //   Name: " Honey",
    //   Date: " 20-12-2024",
    // },
  ];

  const [todoItem, setTodoItem] = useState(initialTodoItem);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`Item Name ${itemName} , Due Date ${itemDueDate} `);

    const newTodoItem = [...todoItem, { Name: itemName, Date: itemDueDate }];
    setTodoItem(newTodoItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItem.filter(item => item.Name !== todoItemName);
    setTodoItem(newTodoItem);

    console.log(`Item Deleted : ${todoItemName}`);
  };

  return (
    <center className="Containor">
      <Tejas></Tejas>
      <AddToDo onNewItem={handleNewItem}></AddToDo>
      {todoItem >= 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        TodoItem={todoItem}
        
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
