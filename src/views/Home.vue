<template>
  <div class="home">
    {{ food }} food
    <button @click="increment('food')">CLICK</button>
    <br />

    {{ cave.amount }} Caves
    <button @click="build('cave')">BUY</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',

  components: {
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
      'incrementFood'
    ]),

    increment (type, amount = 1) {
      switch (type) {
        case 'food':
          this.incrementFood({ amount })
          break
      }
    },

    build (type, amount = 1) {
      switch (type) {
        case 'cave':
          break;
      }
    }
  }
}
</script>
