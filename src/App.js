import { useState } from "react";
import ToDoEntryForm from "./ToDoEntryForm";
import TodoList from "./ToDoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Meet Masao for Udon" },
    { id: 2, content: "Fix up these horrible React notes" },
  ]);

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function addTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  return (
    <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos} deleter={deleteTodo} />
      <ToDoEntryForm adder={addTodo} />
    </div>
  );
}
