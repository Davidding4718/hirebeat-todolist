import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { getUserNotes  } from './graphql/queries';
// import { createTodo } from './graphql/mutations';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetchNotes();
    }, []);
    // useEffect(() => {
    //     fetchTodos();
    // }, []);
    async function fetchNotes() {
        const apiData = await API.graphql({
          query: getUserNotes,
          variables: { id: "mary" },
        });
        const notesFromAPI = apiData.data.getUserNotes.todoList;
        console.log(apiData.data.getUserNotes.todoList);
        await Promise.all(
          notesFromAPI.map(async (note) => {
            // 确保map()方法返回一个经过修改的笔记项对象
            return note;
          })
        );
        setNotes(notesFromAPI);
        console.log(notesFromAPI);
    }

    // const fetchTodos = async () => {
    //     try {
    //         const todoData = await API.graphql(graphqlOperation(listTodos));
    //         const todos = todoData.data.listTodos.items;
    //         setTodos(todos);
    //     } catch (error) {
    //         console.log('error fetching todos:', error);
    //     }
    // }

    // const addTodo = async () => {
    //     try {
    //         await API.graphql(graphqlOperation(createTodo, {input: {name: "New Todo", description: "New Todo Description"}}));
    //         fetchTodos();
    //     } catch (error) {
    //         console.log('error adding todo:', error);
    //     }
    // }

    return (
        <div>
            <button onClick={fetchNotes}></button>
            {/* <button onClick={addTodo}>Add Todo</button>
            {todos.map((todo, index) => (
                <p key={index}>{todo.name}: {todo.description}</p>
            ))} */}
        </div>
    );
}

export default Todo;
