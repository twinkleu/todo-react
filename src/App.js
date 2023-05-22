import React, { useState } from "react";
import TodoRow from "./Components/TodoRow/TodoRow";
import "./Components/TodoRow/TodoRow.scss";
import "./App.scss";

const App = () => {
  const [value, setValue] = useState("");

  const [todoItems, setTodoItems] = useState([
    { todo: "Mow the lawn", complete: false },
    { todo: "Do Laundry", complete: false },
    { todo: "Make Dinner", complete: false },
  ]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
    setValue("");
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };
  const completeTodoItem = (index) => {
    /*const newTodoItems = [...todoItems];
    newTodoItems[index].complete = !newTodoItems[index].complete;
    setTodoItems(newTodoItems);*/
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
      ? (newTodoItems[index].complete = true)
      : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems);
  };
  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    if (newItem === null || newItem === "") {
      return;
    } else {
      newTodoItems.splice(index, 1, todoObj);
    }
    setTodoItems(newTodoItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return alert("Please add something to-do");
    }
    createTodoItem(value);
    setValue("");
  };

  return (
    <div className="todo-list">
      <h1>Todo</h1>

      {todoItems.map((item, index) => (
        <TodoRow
          key={index}
          index={index}
          item={item}
          onDelete={deleteTodoItem}
          onComplete={completeTodoItem}
          onUpdate={updateTodoItem}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <div className="todo-input">
          <input
            type="text"
            value={value}
            placeholder="Add task here ..."
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default App;
