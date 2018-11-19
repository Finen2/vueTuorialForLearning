<template>
  <div class="webContent">
    <Calculator />
  </div>
</template>

<script lang="ts">
  import Calculator from '../components/Calculator.vue'

  export default {
    name: 'app',
    components: {
      Calculator
    }
  }
</script>

  <style lang="sass">
    @import "./Web.sass"
  </style>
