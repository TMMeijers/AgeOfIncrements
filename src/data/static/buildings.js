export default {
  cave: {
    id: 'cave',
    type: 'housing',
    name: 'Cave',
    description: 'A moisty hole',
    requirements: {},
    cost: {
      factor: 1.12,
      resources: {
        food: 10
      }
    },
    modifiers: {
      click: {
        food: 1
      }
    }
  }
}
