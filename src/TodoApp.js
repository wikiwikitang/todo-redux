import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import InputTodo from "./components/InputTodo";
import DisplayTodos from "./components/DisplayTodos";
import { fetchDataFromFakeDataBase } from "./api/index";
import "./App.css";

const TodoApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const todoList = await fetchDataFromFakeDataBase();
      dispatch({ type: "INIT", payload: todoList });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="TodoApp">
      <InputTodo />
      <DisplayTodos />
    </div>
  );
};

export default TodoApp;
