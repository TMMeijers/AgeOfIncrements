export default {
  namespaced: true,
  state: {
    food: 0
  },
  getters: {
    food: state => state.food
  },
  actions: {
    incrementFood ({ commit }, { amount }) {
      commit('incrementFood', { amount })
    }
  },
  mutations: {
    incrementFood (state, { amount }) {
      state.food += amount
    }
  }
}
