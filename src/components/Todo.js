import React from "react";

const Todo = ({ id, isCompleted, text, todos, setTodos }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completedTodoHandler = () => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo };
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${isCompleted ? "completed" : ""}`}>{text}</li>
      <button className="complete-btn" onClick={completedTodoHandler}>
        <ion-icon name="checkmark-outline"></ion-icon>
      </button>
      <button className="trash-btn" onClick={deleteTodoHandler}>
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  );
};

export default Todo;
