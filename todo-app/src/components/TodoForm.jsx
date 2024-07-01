import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { EditTodoForm } from "./EditTodoForm";
import ListTodo from "./ListTodo";
import { BASE_URL } from '../url'

export const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try {
            setLoading(true);
            const response = await axios.get(BASE_URL + "todos");
            setTodos(response.data);
            console.log("response data" + response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    
    useEffect(() => {
        fetchData();
    }, []);
    
    if (loading) {
        return <h2>Loading___</h2>;
    }

    return (
        <div>
            <EditTodoForm todos={todos} setTodos={setTodos} />
            <div>
                {error && <p>Something went wrong!</p>}
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    todos?.map((todo,index) => {
                        return (
                            <ListTodo todos={todo} index={index} key={index} fetchData={fetchData} />
                            
                        );
                    })
                )}
            </div>
        </div>
    );
};
