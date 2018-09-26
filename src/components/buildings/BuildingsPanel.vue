<template>
  <div class="component">
    <div class="age-block" v-for="age in ages" :key="age">
      <buildings-row :age="age" />
    </div>
  </div>
</template>

<script>
import BuildingsRow from './BuildingsRow'

export default {
  name: 'buildingsPanel',

  components: {
    BuildingsRow
  },

  data () {
    return {
      // Should be ported to a module later
      ages: ['prehistoric']
    }
  }
}
</script>

<style>
.components {
  display: flex;
  flex-flow: column wrap;
}
</style>
