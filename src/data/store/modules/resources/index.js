import map from 'lodash.map'

import utils from '../../../../game/common/utils'

// TODO: Use same structures / utils as buildings (static data, resourcesForAge, etc...)

export default {
  namespaced: true,
  state: {
    food: {
      kind: 'resources',
      amount: 0
    }
  },
  getters: {
    food: state => state.food,

    resourcesDict: state => utils.filterEntitiesDict(state, 'resources'),
    resources: (state, getters) => map(getters.resourcesDict, r => r),
    canAfford: (state, getters) => cost => utils.canAfford(cost, getters.resourcesDict)
  },
  actions: {
    increment ({ getters, commit }, { type, amount = 1 }) {
      const resource = getters[type]
      const newAmount = resource.amount + amount
      commit('setResource', { type, amount: newAmount })
    }
  },
  mutations: {
    setResource (state, { type, amount }) {
      state[type].amount = amount
    }
  }
}
