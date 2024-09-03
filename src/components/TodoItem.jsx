export default function TodoItem({ item }) {
  return (
    <li className="todo-item">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </li>
  );
}
