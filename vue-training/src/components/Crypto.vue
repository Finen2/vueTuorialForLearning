<template lang="html">
  <div class="">
    <div id="crypto-container" v-for="(value, key) in cryptos">
      <span class="left">{{ key }}</span>
      <span class="right">${{ value.USD }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'crypto',
  data: () => ({
    cryptos: [],
    errors: []
  }),

  created () {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
      .then(response => {
        this.cryptos = response.data
        console.log(response)
      })
      .catch(e => {
        this.error.push(e)
      })
  }
}
</script>

<style lang="sass">
  @import "./Crypto.sass"
</style>
