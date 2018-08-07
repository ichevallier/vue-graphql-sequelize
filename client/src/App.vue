<template>
  <div id="app">
    <div class="header-menu">
     <header-bar></header-bar>
    </div>
    <router-view></router-view>
    <!-- <PersonList/> -->
    <!-- <PokemonList/> -->
  </div>
</template>

<script>
//import PokemonList from './components/PokemonList'
//import PersonList from './components/PersonList'
import HeaderBar from './components/HeaderBar'

export default {
    name: 'app',
    components: {
      //PersonList,
      HeaderBar
      //PokemonList
    }
  }
</script>
<style>
html, body{
  background-color: #193849;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: #193849;
}
.header-menu {background: #4183C4;/*#491920;*/color:#fff;font-weight: 700; box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); text-transform: uppercase;letter-spacing: 1.5px;}
</style>