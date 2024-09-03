import TodoItem from "./TodoItem";

export default function TodoList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </ul>
  );
}
