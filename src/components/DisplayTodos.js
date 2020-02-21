import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delTodoAction } from "../actions/index";

const DisplayTodos = () => {
  const todoState = useSelector(state => state);
  const dispatch = useDispatch();
  const delTodo = async index => {
    //dispatch({ type: "DEL", payload: index });
    const action = await delTodoAction(index);
    dispatch(action);
  };

  const todoList = todoState.map(({ todoContent }, index) => {
    return (
      <li key={index}>
        <span>{todoContent}</span>
        <button onClick={() => delTodo(index)}>Delete Todo</button>
      </li>
    );
  });
  return (
    <div className="todoList">
      <ul>{todoList}</ul>
    </div>
  );
};

export default DisplayTodos;
