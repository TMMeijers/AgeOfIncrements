import Vue from 'vue'
import Vuex from 'vuex'

import settings from './modules/settings'
import game from './modules/game'
import resources from './modules/resources/'
import buildings from './modules/buildings/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    settings,
    game,
    resources,
    buildings
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
