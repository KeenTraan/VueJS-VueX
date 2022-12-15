import { getFormatTime } from "@/utils";
import { v4 as idv4 } from "uuid";
const ModuleTodos = {
  name: "ModuleTodos",
  state: {
    todos: [
      {
        id: idv4(),
        nameTask: "Mission 1",
        createAt: getFormatTime(new Date()),
        status: "new",
      },
      {
        id: idv4(),
        nameTask: "Mission 2",
        createAt: getFormatTime(new Date()),
        status: "completed",
      },
      {
        id: idv4(),
        nameTask: "Mission 3",
        createAt: getFormatTime(new Date()),
        status: "cancel",
      },
    ],
    showAddModel: {
      isHiden: false,
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getShowInput(state) {
      return state.showAddModel.isHiden;
    },
  },
  mutations: {
    setTodo(state, payload) {
      state.todos = payload;
    },
    setShowAddModel(state) {
      state.showAddModel.isHiden = !state.showAddModel.isHiden;
    },
  },
  actions: {
    showAddModel({ commit }) {
      commit("setShowAddModel");
    },
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
