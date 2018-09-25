import store from '../store/'

export default {
  init () {
    // Load data
    return setInterval(() => {
      store.dispatch('resources/incrementFood', { amount: 1 })
    }, 1000)
  }
}
