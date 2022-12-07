import { createStore } from 'vuex'

export default createStore({
  state: {
    navlink: [
      {name: "Home", path: '/'},
      {name: "Todo", path: '/todo'},
      {name: "Example 1", path: '/example1'},
      {name: "Example 2", path: '/example2'}
    ]
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
