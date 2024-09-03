import { useRef } from "react";

export default function TodoForm({ todoFunc }) {
  const title = useRef();
  const desc = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredTitle = title.current.value;
    const enteredDescription = desc.current.value;
    console.log("working here");

    todoFunc({ title: enteredTitle, description: enteredDescription });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input ref={title} id="title" type="text" name="title" />
      <label htmlFor="description">Description</label>
      <input ref={desc} id="description" type="text" name="description" />
      <button>Submit</button>
    </form>
  );
}
