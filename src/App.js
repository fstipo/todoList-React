import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/TodoForm";
import Filter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState("all");
  const [filterTodoList, setFilterTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  const [editTextTodo, setEditTextTodo] = useState("");

  useEffect(() => {
    getLocalTodoList();
  }, []);

  useEffect(() => {
    setLocalTodoList();
    handleFilter();
  }, [todoList, status]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilterTodoList(todoList.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodoList(todoList.filter((todo) => todo.completed !== true));
        break;
      default:
        setFilterTodoList(todoList);
    }
  };
  const setLocalTodoList = () => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  const getLocalTodoList = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodoList = JSON.parse(localStorage.getItem("todos"));
      setTodoList(localTodoList);
    }
  };

  return (
    <div className="App">
      {editTodo && (
        <TodoEdit
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          todoList={todoList}
          editTextTodo={editTextTodo}
          setEditTextTodo={setEditTextTodo}
          setTodoList={setTodoList}
        />
      )}
      <header>The List</header>
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        todo={todo}
        setTodo={setTodo}
      />
      <Filter
        active={active}
        setActive={setActive}
        todoList={todoList}
        setTodoList={setTodoList}
        filterTodoList={filterTodoList}
        setFilterTodoList={setFilterTodoList}
        setStatus={setStatus}
        status={status}
      />

      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        filterTodoList={filterTodoList}
        setFilterTodoList={setFilterTodoList}
        todo={todo}
        setEditTextTodo={setEditTextTodo}
        editTextTodo={editTextTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
  );
};

export default App;
