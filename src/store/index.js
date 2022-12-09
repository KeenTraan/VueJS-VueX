import { createStore } from "vuex";

export default createStore({
  state: {
    navlink: [
      { name: "Home", path: "/" },
      { name: "Todo", path: "/todo" },
      { name: "Bài 1", path: "/example1" },
      { name: "Bài 2", path: "/example2" },
    ],
    todos: [
      { nameTask: "Mission 1", status: true, date: new Date() },
      { nameTask: "Mission 2", status: true, date: new Date() },
      { nameTask: "Mission 3", status: false, date: new Date() },
    ],
    ishiden: true,
  },
  getters: {},

  mutations: {
  },
  actions: {},
  modules: {},
});
