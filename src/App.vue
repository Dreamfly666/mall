<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import storage from './storage'
// import Home from '@/pages/home'
export default {
  name: 'App',
  components: {
    
  },
  mounted() {
    //  storage.setItem('a', 1)
    // storage.setItem('user',{ "a" : 1 })
    // storage.setItem('a', 1)
    // storage.setItem('user', {'a':1})
    // storage.setItem('abc', {'a':1}, 'user')
    storage.clear('a')
    storage.clear('a','user')
    storage.clear('abc', 'user')
    storage.clear('user')
    
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
  margin-top: 60px;
}
</style>
