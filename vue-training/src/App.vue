<template>
  <div id="app">
    <div class="topImage"></div>
    <div id="nav">
      <router-link to="/"><font-awesome-icon icon="home" class="faIcon" />Home</router-link>
      <router-link to="/about"><font-awesome-icon icon="info" class="faIcon" />About</router-link>
      <router-link to="/photos"><font-awesome-icon icon="camera-retro" class="faIcon" />Photos</router-link>
      <router-link to="/web"><font-awesome-icon icon="window-maximize" class="faIcon" />Web</router-link>
      <router-link to="/blog"><font-awesome-icon icon="coffee" class="faIcon" />Blog</router-link>
      <router-link to="/help"><font-awesome-icon icon="question-circle" class="faIcon" />Help</router-link>
      <router-link to="/contact"><font-awesome-icon icon="at" class="faIcon" />Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
  @import "./app.sass"
</style>
