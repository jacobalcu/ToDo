import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const toDo = [
  {
    title: "Get Ready",
    description: "I need to go to the store and get food for the party",
  },
  {
    title: "Build App",
    description: "I need to build a timer app",
  },
];

function App() {
  const [todo, setTodo] = useState(toDo);

  function addTodo(newTodo) {
    console.log("Hello");
    const Todo = [...todo, newTodo];
    setTodo(Todo);
  }

  return (
    <>
      <h1>To Do List</h1>
      {/* <h2>
        <button>+</button>
      </h2> */}
      <TodoForm todoFunc={addTodo} />
      <TodoList items={todo} />
    </>
  );
}

export default App;
