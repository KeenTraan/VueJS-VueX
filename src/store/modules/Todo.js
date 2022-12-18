import { getFormatTime } from "@/utils";
import { v4 as idv4 } from "uuid";
import { STATUS } from "@/constant";
const ModuleTodos = {
  name: "Todos",
  state: {
    todos: [
      {
        id: idv4(),
        nameTask: "Mission 1",
        createAt: getFormatTime(new Date()),
        status: STATUS.NEW,
      },
      {
        id: idv4(),
        nameTask: "Mission 2",
        createAt: getFormatTime(new Date()),
        status: STATUS.COMPLETED,
      },
      {
        id: idv4(),
        nameTask: "Mission 3",
        createAt: getFormatTime(new Date()),
        status: STATUS.CANCELED,
      },
    ],
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    setTodo(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    createTodo(state, todos) {
      const Todo = [...state.getters.getTodos, todos];
      state.commit("setTodo", Todo);
    },
    updateStatus(store, payload) {
      let todo = [...store.state.todos];
      const index = todo.findIndex((t) => t.id === payload.id);
      todo = [...todo.slice(0, index), payload, ...todo.slice(index + 1)];
      return (store.state.todos = todo);
    },
  },
};
export default ModuleTodos;
