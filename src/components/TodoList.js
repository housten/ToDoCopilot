import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = task => {
        const newTodo = { id: todos.length, task: task, status: 'TODO' };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id, status) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, status: status } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDrop = (status) => (e) => {
        e.preventDefault();
        const id = Number(e.dataTransfer.getData('text/plain'));
        updateTodo(id, status);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className='todo-overhead'>
            <TodoForm addTodo={addTodo} />
            <div className='todo-list'>
                <div className="todo-column" onDrop={handleDrop('TODO')} onDragOver={handleDragOver}>
                    <h2>TODO</h2>
                    {todos.filter(todo => todo.status === 'TODO').map(todo => (
                        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
                    ))}
                </div>
                <div className="todo-column" onDrop={handleDrop('DOING')} onDragOver={handleDragOver}>
                    <h2>DOING</h2>
                    {todos.filter(todo => todo.status === 'DOING').map(todo => (
                        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
                    ))}
                </div>
                <div className="todo-column" onDrop={handleDrop('DONE')} onDragOver={handleDragOver}>
                    <h2>DONE</h2>
                    {todos.filter(todo => todo.status === 'DONE').map(todo => (
                        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;