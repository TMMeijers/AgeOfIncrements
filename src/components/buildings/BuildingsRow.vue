<template>
  <div class="component">
    <div
      class="building"
      v-for="building in buildingsForAge(age)"
      v-if="TODO || building.unlocked"
      :key="building.id">

      <h3>{{ building.name }}</h3>
      <p>Owned: {{ building.amount }}</p>
      <!-- TODO style resources -->
      <p>{{ building.cost.resources }}</p>
      <p>{{ building.description }}</p>
      <button @click="onBuild(building.id)">BUY</button>
    </div>
  </div>
</template>

<script>
import type from 'vue-types'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'buildingsRow',

  props: {
    age: type.string.isRequired
  },

  data () {
    return {
      TODO: true
    }
  },

  computed: {
    ...mapGetters('buildings', [
      'buildingsForAge',
      'buildingCost'
    ])
  },

  methods: {
    ...mapActions('buildings', [
      'build'
    ]),

    onBuild (type) {
      this.build({ type, amount: 1 })
    }
  }
}
</script>

<style>
.components {
  display: flex;
  flex-flow: row wrap;
}
</style>
