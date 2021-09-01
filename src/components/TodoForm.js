import React from "react";
import "../App.css";
import "./TodoForm.css";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text) {
      setTodoList([newTodo, ...todoList]);
      setTodo("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="...add a task"
          autoFocus
        ></input>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Form;
