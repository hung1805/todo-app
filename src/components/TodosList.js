import React from "react";
import Todo from "./Todo";
const TodosList = ({ todos, setTodos, filterTodos }) => {
  const todosList = filterTodos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        text={todo.text}
        isCompleted={todo.isCompleted}
        todos={todos}
        setTodos={setTodos}
        id={todo.id}
      />
    );
  });
  return (
    <div className="todo-container">
      <ul className="todo-list">{todosList}</ul>
    </div>
  );
};

export default TodosList;
