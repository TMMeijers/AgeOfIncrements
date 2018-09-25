import buildings from '../../../data/static/buildings.js'
import reduce from 'lodash.reduce'

export default {
  namespaced: true,
  state: {
    cave: {
      ...buildings['cave'],
      amount: 0
    }
  },
  getters: {
    cave: state => state.cave,
    buildingCost: state => buildingName => {
      const building = state[buildingName]
      const factor = building.cost.factor
      return reduce(building.cost.resources, (acc, resource, cost) => {
        acc[resource] = cost * building.amount ^ factor
        return acc
      }, {})
    }
  },
  actions: {
  },
  mutations: {

  }
}
