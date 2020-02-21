import { AddTodoToFakeDataBase, DelTodoFromFakeDataBase } from "../api/index";

export const addTodoAction = async newTodo => {
  const response = await AddTodoToFakeDataBase(newTodo);
  console.log(response);
  return { type: "ADD", payload: newTodo };
};

export const delTodoAction = async index => {
  const response = await DelTodoFromFakeDataBase(index);
  console.log(response);
  return { type: "DEL", payload: index };
};
