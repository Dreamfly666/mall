<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
// import storage from './storage'
// import Home from '@/pages/home'
export default {
  name: 'App',
  data : function() {
    return {
      res: {}
    }
  },  
  
  components: {
    
  },
  mounted() {
    //  storage.setItem('a', 1)
    // storage.setItem('user',{ "a" : 1 })
    // storage.setItem('a', 1)
    // storage.setItem('user', {'a':1})
    // storage.setItem('abc', {'a':1}, 'user')
    // storage.clear('a')
    // storage.clear('a','user')
    // storage.clear('abc', 'user')
    // storage.clear('user')
    // 第一种方式 本地加载静态json文件
    // this.axios.get('mock/user/logon.json').then((res) => {
    //   this.res = res
    // })

    // 第二种方式 easy-mock平台
    
  }
}


</script>

<style>
 @import './assets/sass/reset.scss'
  
</style>
