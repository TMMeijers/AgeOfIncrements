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

  filterEntities (entities, field, value) {
    return reduce(entities, (acc, entity) => {
      if (entity[field] === value) {
        acc.push(entity)
      }
      return acc
    }, [])
  },

  getEntitiesByAge (entities, age) {
    return this.filterEntities(entities, 'age', age)
  },

  getEntitiesByKind (entities, kind) {
    return this.filterEntities(entities, 'kind', kind)
  },

  listToDict (list, field = 'id') {
    return reduce(list, (acc, entity) => {
      acc[entity[field]] = entity
      return acc
    }, {})
  }
}
