export default {
  createTodo(state, todos) {
    const Todo = [...state.getters.getTodos, todos]
    state.commit("setTodo", Todo)
  },
  updateStatus(state, id) {
    const check = state.getTodos.find(todo => todo.id === id)
    console.log(check);
  }
}