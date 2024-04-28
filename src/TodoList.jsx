import { useState } from 'react';
import { useTaskStore } from './store';

const TodoList = () => {
    const [todoText, setTodoText] = useState('')
    const todos = useTaskStore(state => state.todos);
    const removeTodo = useTaskStore(state => state.removeTodo);
    const addTodo = useTaskStore(state => state.addTodo)

    const handleAddTodo = () => {
        if (todoText.trim()) { // Kontrollera att texten inte är tom eller bara mellanslag
            addTodo({ id: Date.now(), text: todoText, completed: false })
            setTodoText('') // Rensa inputfältet efter att todo har lagts till
        }
    }

    return (
        <div>
            <input
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder='Skriv en ny uppgift'
            />
            <button type='submit' onClick={handleAddTodo}>Lägg till</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                        {index + 1}: {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;