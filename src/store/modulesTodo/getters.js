export default {
  getTodos(state) {
    return state.todos
  },
  getOneTodo(state, payload) {
    return state.todos.find(todo => todo.id === payload.id)
  }
}