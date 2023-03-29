const ModuleTodos = {
  name: "Todo",
  state: {
    todos: [],
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
