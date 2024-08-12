import axios from "axios";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const getAllTodos = (): Promise<Todo[]> => {
  return axios
    .get<Todo[]>("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.data);
};
