import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosAdd } from "react-icons/io";

export const EditTodoForm = ({ todos, setTodos }) => {
    const [newTodo, setNewTodo] = useState("");

    function handleChange(e) {
        const value = e.target.value;
        setNewTodo(value);
    }

    
    // String(Number(todos[todos.length - 1].id) + 1)
    function handleAddTodo(e) {
     
        e.preventDefault(); //ketika ini di klik diambil dari value
        async function addTodo() {
            const response = await axios.post("http://localhost:3000/todos", {
                id: String(Number(todos[todos.length - 1].id) + 1),
                title: newTodo,
                completed: false //pastikan false
            }); //memasukkan data inputan user ke db.json (object literal)
            console.log(response.data, "<response setelah check data"); //mengecek data yang sudah di input ke db.json
            setTodos([...todos, response.data]); //menambahkan data yang sudah di input ke db.json ke todos
        }
        addTodo();
    }

    return (
        <div>
            <form
                style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <input
                    type="text"
                    placeholder="Add Todo"
                    onChange={handleChange}
                    value={newTodo}
                    className="todo-input"
                    style={{
                        color: "black",
                        background: "#D9DDC0",
                        border: "none",
                        borderRadius: "30px",
                        padding: "12px",
                        width: "250px",
                    }}
                />

                <button
                    type="button"
                    className="todo-btn"
                    onClick={handleAddTodo}
                    style={{
                        marginLeft: "8px",
                        background: "#E7FE54",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                    }}
                >
                    <IoIosAdd
                        style={{
                            fontSize: "32px",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "bold",
                        }}
                    />
                </button>
            </form>
        </div>
    );
};

//catatan
//untuk memasukkan data inputan user ke db.json menggunakan POSTS, dengan pertama melakukan
//fetch data dari db.json, kemudian menggunakan setTodos untuk menyimpan data yang udah di input ke db.json
//kemudian menggunakan axios untuk mengirim data dari db.json ke db.json
//untuk mengirim data dari db.json ke db.json, kita harus menggunakan axios.post()
