<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ food }}
    <button @click="increment('food')">CLICK</button>
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
    }
  }
}
</script>
