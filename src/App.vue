<template>
  <VueHeader></VueHeader>
  <router-view></router-view>
</template>

<script>
import VueHeader from './components/VueHeader.vue';
export default {
  name: 'App',
  components: {
    VueHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
padding-top: 0;
}
</style>
