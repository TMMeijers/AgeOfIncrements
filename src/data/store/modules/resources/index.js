import utils from '../../../../game/common/utils'

// TODO: Use same structures / utils as resources (static data, resourcesForAge, etc...)

export default {
  namespaced: true,
  state: {
    food: {
      id: 'food',
      kind: 'resources',
      amount: 0,
      base: 1
    }
  },
  getters: {
    food: state => state.food,

    resources: state => utils.getEntitiesByKind(state, 'resources'),
    resourcesDict: (state, getters) => utils.listToDict(getters.resources),
    resourcesForAge: (state, getters) => age => utils.getEntitiesByKind(getters.resources, age),
    resourcesDictForAge: (state, getters) => age => utils.listToDict(getters.resourcesForAge),

    canAfford: (state, getters) => cost => utils.canAfford(cost, getters.resourcesDict)
  },
  actions: {
    increment ({ getters, commit }, { type }) {
      const resource = getters[type]
      // TODO: Get modifiers from actual things
      const modifiers = { base: 0, multiplier: 1 }
      const newAmount = resource.amount + (resource.base + modifiers.base) * modifiers.multiplier
      commit('setResource', { type, amount: newAmount })
    }
  },
  mutations: {
    setResource (state, { type, amount }) {
      // TODO: Safeguards: no infinity, NaN
      state[type].amount = amount
    }
  }
}
