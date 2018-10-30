const UPDATES = []

function t () {
  return (new Date()).getTime()
}

export default {
  namespaced: true,
  state: {
    handle: null,
    speed: 250,
    t
  },
  getters: {
    handle: state => state.handle
  },
  actions: {
    addUpdate ({ commit }, { update }) {
      UPDATES.push(update)
    },

    removeUpdate ({ commit }, { id }) {
      const index = UPDATES.findIndex(u => u.id === id)
      if (index < 0) {
        return
      }

      UPDATES.splice(index, 1)
    },

    setSpeed ({ commit }, { speed }) {
      commit('setSpeed', { speed })
    },

    initialize ({ dispatch, commit }) {
      setTimeout(() => {
        dispatch('addUpdate', {
          update: {
            id: 'logger',
            run () {
              console.log('hoi')
            }
          }
        })
      }, 3000)

      setTimeout(() => {
        dispatch('removeUpdate', { id: 'logger' })
      }, 5000)

      // Load data etc.

      // Run the game
      commit('setT0', { t: t() })
      dispatch('run')
    },

    run ({ state, dispatch, commit }) {
      const { speed } = state

      // Loop and update handle
      const handle = setTimeout(() => {
        dispatch('tick', { speed })
        dispatch('run')
      }, speed)

      commit('setHandle', { handle })
    },

    tick ({ state, commit }, { speed }) {
      const { t0 } = state
      const t1 = t()
      const d = t1 - t0

      commit('setT0', { t: t1 })

      // Now update d milliseconds
      console.warn(d)
      UPDATES.forEach(u => {
        u.run()
      })
    }
  },
  mutations: {
    setHandle (state, { handle }) {
      state.handle = handle
    },
    setT0 (state, { t }) {
      state.t0 = t
    },
    setSpeed (state, { speed }) {
      state.speed = speed
    }
  }
}
