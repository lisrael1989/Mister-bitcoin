import { createStore } from "vuex"

// Create a new store instance.
export default createStore({
  state() {
    return {
      strict: true,
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})
