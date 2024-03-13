import { useState } from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";
function AddToDo({onNewItem}) {

const [todoName , setTodoName] = useState("");
const [dueDate , setDueDate ] = useState("");

const handleTodoDate = (event) => {
  setTodoName(event.target.value);
 }

 const handleDueDate = (event) => {
  setDueDate(event.target.value)
 }

 const handleOnClickButton = () => {
  onNewItem(todoName,dueDate)
  setDueDate("");
  setTodoName(" ");

 }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-5">
          <input type="text" placeholder={"Enter the ToDo Here"} onChange={handleTodoDate} value={todoName}/>
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDueDate} value={dueDate}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleOnClickButton}>
          <MdOutlineAddToPhotos />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
