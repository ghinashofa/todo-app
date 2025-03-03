import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { EditTodoForm } from "./EditTodoForm";
import axios from "axios";
import { BASE_URL } from '../url'

export default function ListTodo({ todo, fetchData, index }) {
    console.log(todo);
    const [editTodo, setEditTodo] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    function handleDelete() {
        async function deleteTodo() {
            const response = await axios.delete(
                `${BASE_URL}todo/${todo.id}`
            );
            await fetchData();
            console.log("Setelah Delete", response.data);
        }
        deleteTodo();
    }

    function handleStatus(id, completed) {
        async function statusTodo() {
            const response = await axios.patch(
                `${BASE_URL}todo/${id}`,
                {
                    completed: !completed,
                }
            );
            await fetchData();
            console.log("checked", response.data);
        }
        statusTodo();
        console.log(todo.completed);
    }

    function handleUpdate(e) {
        e.preventDefault();
        async function updateTodo() {
            await axios.put(`${BASE_URL}todo/${todo.id}`, {
                id: todo.id,
                title: editTitle,
                completed: todo.completed,
            });
            await fetchData();
            setEditTodo(false);
        }
        updateTodo();
    }

    if (!todo) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <ul
                className="hov-list"
                style={{
                    listStyle: "none",
                    display: "flex",
                    padding: "10px",
                    border: "1px solid #D7DBBF",
                    margin: "10px",
                    borderRadius: "8px",
                    color: "white",
                    gap: "16px",
                    textAlign: "left",
                    justifyContent: "space-between",
                }}
            >
                <li
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <div className="form-check">
                        <input
                            type="checkbox"
                            onChange={() =>
                                handleStatus(todo.id, todo.completed)
                            }
                            checked={todo.completed}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                        }}
                    >
                        <li>{index + 1}.</li>
                        <li>
                            <form onSubmit={handleUpdate}>
                                <input
                                    type="text"
                                    disabled={!editTodo}
                                    value={editTitle}
                                    onChange={(e) =>
                                        setEditTitle(e.target.value)
                                    }
                                    className="input-control"
                                    style={{
                                        textDecoration: todo.completed
                                            ? "line-through"
                                            : "none",
                                        background: "none",
                                        border: "none",
                                        color: "white",
                                        fontWeight: "500",
                                    }}
                                />
                            </form>
                        </li>
                        <li>{todo?.completed}</li>
                    </div>
                </li>
                <div style={{ display: "flex", gap: "8px" }}>
                    <li>
                        <FaRegEdit
                            style={{ fontSize: "24px" }}
                            onClick={() => {
                                setEditTodo(true);
                            }}
                        />
                    </li>
                    <li>
                        <MdDeleteOutline
                            onClick={handleDelete}
                            style={{ fontSize: "24px" }}
                        />
                    </li>
                </div>
            </ul>
        </>
    );
}
