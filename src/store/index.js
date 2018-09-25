import Vue from 'vue'
import Vuex from 'vuex'

import settings from './modules/settings'
import game from './modules/game'
import resources from './modules/resources/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    settings,
    game,
    resources
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
