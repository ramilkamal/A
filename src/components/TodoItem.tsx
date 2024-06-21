import React from 'react';
import { Todo } from '../features/todos/Todo';
import { useUpdateTodo, useDeleteTodo } from '../features/todos/todosApi';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { mutate: updateTodo } = useUpdateTodo();
    const { mutate: deleteTodo } = useDeleteTodo();

    const toggleComplete = () => {
        updateTodo({
            ...todo,
            completed: !todo.completed,
        });
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <div>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
            >
                {todo.title}
            </span>
            <button onClick={toggleComplete}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TodoItem;
