<template>
  <div class="home">
    {{ food.amount }} food
    <button @click="onIncrement('food')">CLICK</button>
    <br />

    <buildings-panel />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import BuildingsPanel from '../components/buildings/BuildingsPanel'

export default {
  name: 'home',

  components: {
    BuildingsPanel
  },

  created () {

  },

  computed: {
    ...mapGetters('resources', [
      'food'
    ]),

    ...mapGetters('buildings', [
      'cave',
      'buildingCost'
    ])
  },

  methods: {
    ...mapActions('resources', [
      'increment'
    ]),

    onIncrement (type) {
      this.increment({ type })
    }
  }
}
</script>
