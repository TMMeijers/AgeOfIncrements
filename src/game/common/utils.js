import reduce from 'lodash.reduce'
import every from 'lodash.every'

export default {
  /**
   * As long as we describe every entity in the same structure (especially costs) we can reuse this
   * function for all purchasable entities. Amount and factor need not be present in the entity
   */
  getCosts (entity) {
    const { costs, amount = 0 } = entity
    const { resources, factor = 1 } = costs
    return reduce(resources, (acc, cost, resource) => {
      acc[resource] = cost * factor ^ amount
      return acc
    }, {})
  },
  /**
   * Later we can construct an object (following resource/cost structure) describing
   * deficits. For now return true / false
   */
  canAfford (costs, resources) {
    return every(costs, (res, cost) => resources[res] >= cost)
  },

  filterEntitiesDict (all, kind) {
    return reduce(all, (acc, entity) => {
      if (entity.kind === kind) {
        acc[entity.id] = entity
      }
      return acc
    })
  },

  getEntitiesForAge (entities, age) {
    return reduce(entities, (acc, entity) => {
      if (entity.age === age) {
        acc[entity.id] = entity
      }
      return acc
    }, {})
  }
}
