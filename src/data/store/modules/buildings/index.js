import map from 'lodash.map'

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

    buildingsDict: state => utils.filterEntitiesDict(state, 'buildings'),
    buildings: (state, getters) => map(getters.buildingsDict, b => b),
    buildingsForAge: (state, getters) => age => utils.getEntitiesForAge(getters.buildings, age)
  },

  actions: {
    build ({ getters, commit }, { type, amount = 1 }) {
      const building = getters[type]
      // In entity specific actions we can trigger achievements etc.
      const newAmount = building.amount + amount
      commit('setBuilding', { type, amount: newAmount })
    }
  },
  mutations: {
    setBuilding (state, { type, amount }) {
      state[type] = amount
    }
  }
}
