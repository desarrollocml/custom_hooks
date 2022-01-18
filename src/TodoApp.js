import useTodos from "./hooks/useTodos";

const initialTodos = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Vue" },
];

export default function TodoApp() {
  const [todos, addTodo, deleteTodo]=useTodos(initialTodos);
    const newTodo = {title:"Learn Rast"}
  return (
    <div>
        <button onClick={()=>addTodo(newTodo)}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button 
                onClick={()=>deleteTodo(todo.id)}
               >Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
