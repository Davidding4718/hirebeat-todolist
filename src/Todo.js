import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { listTodos } from '../graphql/queries';
import { createTodo } from '../graphql/mutations';

function Todo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos));
            const todos = todoData.data.listTodos.items;
            setTodos(todos);
        } catch (error) {
            console.log('error fetching todos:', error);
        }
    }

    const addTodo = async () => {
        try {
            await API.graphql(graphqlOperation(createTodo, {input: {name: "New Todo", description: "New Todo Description"}}));
            fetchTodos();
        } catch (error) {
            console.log('error adding todo:', error);
        }
    }

    return (
        <div>
            <button onClick={addTodo}>Add Todo</button>
            {todos.map((todo, index) => (
                <p key={index}>{todo.name}: {todo.description}</p>
            ))}
        </div>
    );
}

export default Todo;
