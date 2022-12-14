import { createStore } from "vuex";
import modules from "./modules";
export default createStore({
  state: {
    // navlinks: [
    //   { name: "Home", path: "/" },
    //   { name: "Todo", path: "/todo" },
    //   { name: "Bài 1", path: "/example1" },
    //   { name: "Bài 2", path: "/example2" },
    // ],
    // todos: [
    //   {
    //     id: idv4(),
    //     nameTask: "Mission 1",
    //     status: "new",
    //     createAt: getFormatTime(new Date()),
    //   },
    //   {
    //     id: idv4(),
    //     nameTask: "Mission 2",
    //     status: "completed",
    //     createAt: getFormatTime(new Date()),
    //   },
    //   {
    //     id: idv4(),
    //     nameTask: "Mission 3",
    //     status: "cancel",
    //     createAt: getFormatTime(new Date()),
    //   },
    // ],
    // columns: [
    //   { id: 1, name: "Mới", status: "new" },
    //   { id: 2, name: "Đã Hoàn Thành", status: "completed" },
    //   { id: 3, name: "Đã Hủy Bỏ", status: "cancel" },
    // ],
    // ishiden: true,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    modules,
  },
});
