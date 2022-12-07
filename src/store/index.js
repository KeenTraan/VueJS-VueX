import { createStore } from 'vuex'

export default createStore({
  state: {
    navlink: [
      {name: "Home", path: '/'},
      {name: "Todo", path: '/todo'},
      {name: "Bài 1", path: '/example1'},
      {name: "Bài 2", path: '/example2'},
    ],
    todos: [],
    ishiden: false
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
