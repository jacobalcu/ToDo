import TodoItem from "./TodoItem";

export default function TodoList({ items }) {
  return (
    <ul className="todo-list">
      {items.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </ul>
  );
}
