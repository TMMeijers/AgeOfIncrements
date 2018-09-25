import buildings from '../../data/static/buildings.js'

export default {
  namespaced: true,
  state: {
      cave: {
          ...buildings[cave],
          amount: 0
      }
  },
  getters: {
      buildingsCost: state => buildingName => {
          const building = state[buildingName]
          const factor = building.cost.factor
          return Object.keys(building.cost.resources).reduce((acc, resource) => {
              acc[resource] = building.cost.resources[resource] * building.amount ^ factor
              return acc
          }, {})
      }
  },
  actions: {
  },
  mutations: {

  }
}
