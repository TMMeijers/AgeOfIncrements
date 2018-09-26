import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './data/store/'

import game from './game/main'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

store.dispatch('game/setMainGameHandle', { mainGameHandle: game.init() })
