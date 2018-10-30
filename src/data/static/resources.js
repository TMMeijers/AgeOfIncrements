import reduce from 'lodash.reduce'

const resources = {
  cave: {
    age: 'prehistoric',
    type: 'housing',
    name: 'Cave',
    description: 'A moisty hole',
    requirements: {
      resources: {
        food: 80
      }
    },
    cost: {
      factor: 1.20,
      resources: {
        food: 100
      }
    },
    modifiers: {
      society: {
        population: 1
      }
    }
  },

  bonfire: {
    age: 'prehistoric',
    type: 'modifier', // No clue if this is going to be useful
    name: 'Bonfire',
    description: 'What is this sorcery? What is sorcery?',
    requirements: {},
    cost: {
      factor: 1.12,
      resources: {
        food: 10
      }
    },
    modifiers: {
      click: {
        food: 0.2
      }
    }
  },

  // Just making this to determine data structures
  incomeExample: {
    age: 'prehistoric',
    type: 'modifier', // No clue if this is going to be useful
    name: 'B52 Bober factory',
    description: 'Because having no imagination leads to war',
    requirements: {},
    cost: {
      factor: 1.12,
      resources: {
        food: 10
      }
    },
    modifiers: {
      income: {
        food: 1
      }
    }
  }
}

// Extend each building with defaults before exporting
export default reduce(resources, (acc, building, id) => {
  acc[id] = {
    kind: 'resource',
    id,
    ...building
  }
  return acc
}, {})
