<template>
  <div class="webContent">
    <h1>Cool stuff</h1>
    <div class="pagePart">
      <Calculator />
    </div>
    <div class="pagePart">
      <Crypto />
    </div>
  </div>
</template>

<script lang="ts">
  import Calculator from '../components/Calculator.vue'
  import Crypto from '../components/Crypto.vue'

  export default {
    name: 'app',
    components: {
      Calculator,
      Crypto
    }
  }
</script>

  <style lang="sass">
    @import "./Web.sass"
  </style>
