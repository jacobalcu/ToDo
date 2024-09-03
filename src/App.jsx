import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const toDo = [
  {
    title: "Get Ready",
    description: "I need to go to the store and get food for the party",
  },
];

function App() {
  const [todo, setTodo] = useState(toDo);

  return (
    <>
      <TodoList items={todo} />
    </>
  );
}

export default App;
