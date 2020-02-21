import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../actions/index";

const InputTodo = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  const handleTodoInput = e => {
    setTodoInput(e.target.value);
  };

  const addTodo = async () => {
    const todoContent = todoInput.trim();
    if (todoContent === "") {
      setTodoInput("");
      return;
    }
    const newTodo = { todoContent, isCompleted: false };
    setTodoInput("");
    const action = await addTodoAction(newTodo);
    dispatch(action);
  };

  return (
    <div className="todoInput">
      <input
        placeholder="Enter your todo here"
        value={todoInput}
        onChange={handleTodoInput}
      />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default InputTodo;
