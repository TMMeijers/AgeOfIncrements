export default {
  namespaced: true,
  state: {
    tickSpeed: 50
  },
  getters: {
    tickSpeed: state => state.tickSpeed
  },
  actions: {
    setTickSpeed ({ commit }, { tickSpeed }) {
      commit('tickSpeed', { tickSpeed })
    }
  },
  mutations: {
    setTickSpeed (state, { tickSpeed }) {
      state.tickSpeed = tickSpeed
    }
  }
}
