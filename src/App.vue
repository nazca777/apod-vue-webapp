<template>
  <div id="app">
    <apod/>
  </div>
</template>

<script>
import apod from './components/apod.vue'

export default {
  name: 'app',
  components: {
    apod
  }
}
</script>

<style>
body, html {
  background: black;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
