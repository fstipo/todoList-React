import React from "react";
import "./TodoList.css";
import { Check2Square, Pencil, Square, Trash } from "react-bootstrap-icons";
import FlipMove from "react-flip-move";

const TodoList = ({
  todoList,
  setTodoList,
  filterTodoList,
  setEditTextTodo,
  setEditTodo,
}) => {
  const checkedTodo = (id) => {
    const updateTodoList = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(updateTodoList);
  };

  const removeTodo = (id) => {
    const updateTodoList = [...todoList].filter((todo) => todo.id !== id);
    setTodoList(updateTodoList);
  };

  const editTodo = (todo) => {
    setEditTodo(true);
    setEditTextTodo(todo);
  };

  return (
    <div className="todoList-container">
      <FlipMove duration="500" easing="ease-in-out">
        {filterTodoList.map((todo) => (
          <div className="todoList-item" key={todo.id}>
            <span
              className="todoList-check"
              onClick={() => checkedTodo(todo.id)}
            >
              {!todo.completed ? <Square /> : <Check2Square color="green" />}
            </span>
            {!todo.completed ? (
              <span className="todoList-text">{todo.text}</span>
            ) : (
              <span className="todoList-text line-through">{todo.text}</span>
            )}

            <span className="todo-edit">
              <button>
                <Pencil size="20" onClick={() => editTodo(todo)} />
              </button>
            </span>
            <span className="todo-delete" onClick={() => removeTodo(todo.id)}>
              <button>
                <Trash size="20" />
              </button>
            </span>
          </div>
        ))}
      </FlipMove>
    </div>
  );
};

export default TodoList;
