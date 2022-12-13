export default {
  setTodo(state, payload) {
    state.todos = payload // 
  },
  setStatus(state, payload) {
    state.todos = payload.find()
  }
}