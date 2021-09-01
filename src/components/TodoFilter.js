import React from "react";
import "./TodoFilter.css";

const TodoFilter = ({ setActive, setStatus, status, active }) => {
  const handleStatus = (e) => {
    setStatus(e.target.value);
    isActive(e);
  };

  const isActive = (e) => {
    const btnContainer = e.target.parentElement;
    const currentBtn = e.target;
    const btns = [...btnContainer.children];
    const isActive = currentBtn.classList.contains("active");

    for (let i = 0; i < btns.length; i++) {
      if (isActive && currentBtn.value === status) {
        setActive(active);
      } else if (currentBtn.value === status) {
        setActive(!active);
      }
    }
  };

  return (
    <div className="todo-filter">
      <button
        className={active ? " " : "active"}
        value="all"
        onClick={handleStatus}
      >
        All
      </button>

      <button
        className={active ? "active" : " "}
        value="completed"
        onClick={handleStatus}
      >
        Completed
      </button>

      <button className="" value="uncompleted" onClick={handleStatus}>
        Uncompleted
      </button>
    </div>
  );
};

export default TodoFilter;
