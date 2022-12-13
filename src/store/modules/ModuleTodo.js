// import { getFormatTime } from "@/utils";
// import { v4 as idv4 } from "uuid";

const ModuleTodos = {
  name: 'ModuleTodos',
  state: {
    todos: [
      // {id: idv4(), nameTask: "mission 1",createAt: getFormatTime(new Date()), status: 'new'},
      // {id: idv4(), nameTask: "mission 2",createAt: getFormatTime(new Date()), status: 'new'},
      // {id: idv4(), nameTask: "mission 3",createAt: getFormatTime(new Date()), status: 'new'}
    ],
    isHiden: true,
  },
  getters: {
    getTodos(state) {
      return state.todos
    },
  },
  mutations: {
    setTodo(state, payload) {
      state.todos = payload // 
    },
  },
  actions: {
    createTodo(state, todos) {
      const Todo = [...state.getters.getTodos, todos]
      state.commit("setTodo", Todo)
    },
  }
}
export default ModuleTodos;