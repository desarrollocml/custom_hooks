import { useState } from 'react'

export default function useTodos(initialTodos) {
    const [todos, setTodos] = useState(initialTodos)

    const addTodo = (newTodo)=>{
        newTodo.id = Date.now();
     
        setTodos([
            ...todos,
            newTodo
        ])
    }
    const deleteTodo=(todoId)=>{
        setTodos(todos.filter(todo => todo.id!==todoId))
    }
    return [
        todos,
        addTodo,
        deleteTodo,
    ]
}
