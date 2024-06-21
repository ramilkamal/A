import React, { useState } from 'react';
import { useAddTodo } from '../features/todos/todosApi';

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const { mutate: addTodo } = useAddTodo();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title) {
            addTodo({
                title,
                completed: false,
            });
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};
