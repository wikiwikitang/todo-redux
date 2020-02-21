let todosList = [];

export const fetchDataFromFakeDataBase = () => {
  const response = JSON.parse(localStorage.getItem("todosList"));
  todosList = !response ? [] : response;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todosList);
    }, 1000);
  });
};

export const AddTodoToFakeDataBase = newTodo => {
  todosList.push(newTodo);
  localStorage.setItem("todosList", JSON.stringify(todosList));
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("successAddTodo");
    }, 1000);
  });
};

export const DelTodoFromFakeDataBase = index => {
  todosList.splice(index, 1);
  localStorage.setItem("todosList", JSON.stringify(todosList));
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("successDelTodo");
    }, 1000);
  });
};
