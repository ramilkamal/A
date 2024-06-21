import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Todo } from './Todo';

const API_URL = 'http://localhost:5000/todos';

export const useGetTodos = () => {
    return useQuery<Todo[]>('todos', async () => {
        const response = await axios.get(API_URL);
        return response.data;
    });
};

export const useAddTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (newTodo: Omit<Todo, 'id'>) => {
            const response = await axios.post(API_URL, newTodo);
            return response.data;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );
};

export const useUpdateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (updatedTodo: Todo) => {
            const response = await axios.put(
                `${API_URL}/${updatedTodo.id}`,
                updatedTodo
            );
            return response.data;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );
};

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (id: number) => {
            await axios.delete(`${API_URL}/${id}`);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );
};
