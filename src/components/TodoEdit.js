import React, { useRef } from "react";
import "./TodoEdit.css";
import { CheckCircle, X } from "react-bootstrap-icons";

const TodoEdit = ({ setEditTodo, todoList, editTextTodo }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setEditTodo(false);
    }
  };

  const closeEditTodo = () => {
    setEditTodo(false);
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    let tempText = e.target.parentElement.parentElement.firstChild.value;
    if (tempText) {
      todoList.map((todo) => {
        if (todo.id === editTextTodo.id) {
          todo.text = tempText;
        }
        return todo;
      });
      setEditTodo(false);
    }
  };

  return (
    <div className="modal" ref={modalRef} onClick={closeModal}>
      <div className="modal-container">
        <div className="modal-content">
          <h2 className="edit-title">Edit Todo</h2>
          <form>
            <input
              className="edit-input"
              id={editTextTodo.id}
              type="text"
              placeholder=""
              defaultValue={editTextTodo.text}
              autoFocus
            ></input>
            <button
              type="button"
              className="check-btn"
              onClick={(e) => {
                handleEditTodo(e);
              }}
            >
              <CheckCircle size="28" />
            </button>
          </form>
          <button className="close-btn" onClick={closeEditTodo}>
            <X size="22" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;
