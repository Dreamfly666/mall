// 承担首页 产品站 产品详情
<template>
    <div>
        home页面
      <nav-footer></nav-footer>
      <router-view></router-view>
      <nav-header></nav-header> 
    </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
export default {
    name: 'home',
    components:{
        NavFooter,
        NavHeader
    }
}
</script>
<style scoped>

</style>