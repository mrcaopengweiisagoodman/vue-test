<template>
  <div id="app">
    <router-view/>
    <RouteCom></RouteCom>
  </div>
</template>

<script>
import RouteCom from './components/routerLinkCom';
export default {
  name: 'App',
  components: { RouteCom }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
