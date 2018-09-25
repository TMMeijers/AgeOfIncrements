import every from 'lodash.every'

export default {
  namespaced: true,
  state: {
    food: 0
  },
  getters: {
    food: state => state.food,

    canAfford: state => resourceCost => {
      return every(resourceCost, (resource, cost) => {
        return state[resource] >= cost
      })
    }
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
