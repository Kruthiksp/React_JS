import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]); // Array to Objects

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  }

  function handleDelete(idx) {
    const tempTodos = [...todos];
    tempTodos[idx].completed = true;
    setTodos(tempTodos); 

    console.log(idx);
  }

  return (
    <div className="container">
      <h1>Todo Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add new Todo"
        />

        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <span style={{textDecoration : todo.completed ? "line-through" : "none"}}>{todo.text}</span>
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
