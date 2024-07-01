import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { EditTodoForm } from "./EditTodoForm";
import ListTodo from "./ListTodo";

export const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/todos");
            setTodos(response.data);
            console.log(response.data);
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
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <EditTodoForm todos={todos} setTodos={setTodos} />
            <div>
                {error && <p>Something went wrong!</p>}
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    todos?.map((todos,index) => {
                        return (
                            <ListTodo todos={todos} index={index} key={index} fetchData={fetchData} />
                        );
                    })
                )}
            </div>
        </div>
    );
};
