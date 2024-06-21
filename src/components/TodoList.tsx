import React from 'react';
import { useGetTodos } from '../features/todos/todosApi';
import TodoItem from './TodoItem';

export const TodoList: React.FC = () => {
    const { data: todos, error, isLoading } = useGetTodos();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading todos</div>;

    return (
        <div>
            {todos?.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};
