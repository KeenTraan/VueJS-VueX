import { getFormatTime } from "@/utils";
import { v4 as idv4 } from "uuid";
const ModuleTodos = {
  name: 'ModuleTodos',
  state: {
    todos: [
      {id: idv4(), nameTask: "Mission 1",createAt: getFormatTime(new Date()), status: 'new'},
      {id: idv4(), nameTask: "Mission 2",createAt: getFormatTime(new Date()), status: 'completed'},
      {id: idv4(), nameTask: "Mission 3",createAt: getFormatTime(new Date()), status: 'cancel'}
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
    updateStatus(store, payload) {
      let todo = [...store.state.todos]
      const index = todo.findIndex(t => t.id === payload.id)
      todo = [
        ...todo.slice(0, index),
        payload,
        ...todo.slice(index + 1)
      ]
      console.log(store.state.todo = todo);
      return store.state.todos = todo
    }
  }
}
export default ModuleTodos;