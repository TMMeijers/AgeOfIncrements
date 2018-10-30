import buildings from '../../../static/buildings'
import utils from '../../../../game/common/utils'

export default {
  namespaced: true,
  state: {
    bonfire: {
      ...buildings['bonfire'],
      unlocked: true,
      amount: 0
    },
    cave: {
      ...buildings['cave'],
      unlocked: false,
      amount: 0
    },
    incomeExample: {
      ...buildings['incomeExample'],
      unlocked: false,
      amount: 0
    }

  },
  getters: {
    cave: state => state.cave,
    bonfire: state => state.bonfire,
    buildingCost: state => buildingName => utils.getCosts(state[buildingName]),

    buildings: state => utils.getEntitiesByKind(state, 'building'),
    buildingsDict: (state, getters) => utils.listToDict(getters.buildings),
    buildingsForAge: (state, getters) => age => utils.getEntitiesByAge(getters.buildings, age),
    buildingsDictForAge: (state, getters) => age => utils.listToDict(getters.buildingsForAge(age))
  },

  actions: {
    build ({ getters, commit }, { type, amount = 1 }) {
      // Should do final check if affordable and then dispatch 'resources/spend'
      const building = getters[type]
      // In entity specific actions we can trigger achievements etc.
      const newAmount = building.amount + amount
      commit('setBuilding', { type, amount: newAmount })
    }
  },
  mutations: {
    setBuilding (state, { type, amount }) {
      state[type].amount = amount
    }
  }
}
