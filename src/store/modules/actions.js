export default {
  createTodo(state, todos) {
    const Todo = [...state.getters.getTodos, todos]
    state.commit("setTodo", Todo)
  }
}