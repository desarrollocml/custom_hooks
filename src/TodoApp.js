import React, { useState } from "react";

const initialTodos = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Vue" },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
        <button>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
