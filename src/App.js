import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  useEffect(() => {
    const getTodosFromLocalStorage = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        setTodos(JSON.parse(localStorage.getItem("todos")));
      }
    };
    getTodosFromLocalStorage();
  }, []);
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilterTodos(
            todos.filter((todo) => {
              return todo.isCompleted === true;
            })
          );
          break;
        case "uncompleted":
          setFilterTodos(
            todos.filter((todo) => {
              return todo.isCompleted === false;
            })
          );
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    };
    const saveToLocalStorage = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    filterHandler();
    saveToLocalStorage();
  }, [status, todos]);

  //Save to local storage

  return (
    <div className="App">
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        status={status}
        setStatus={setStatus}
      />
      <TodosList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
