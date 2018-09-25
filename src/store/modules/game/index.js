export default {
  namespaced: true,
  state: {
    mainGameHandle: null
  },
  actions: {
    setMainGameHandle ({ commit }, { mainGameHandle }) {
      commit('setMainGameHandle', { mainGameHandle })
    }
  },
  mutations: {
    setMainGameHandle (state, { mainGameHandle }) {
      state.mainGameHandle = mainGameHandle
    }
  }
}
