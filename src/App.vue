<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <MHeader></MHeader>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Player></Player>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'
import Player from './components/player/player'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style lang="stylus">
  @import "common/stylus/varible.styl"
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
