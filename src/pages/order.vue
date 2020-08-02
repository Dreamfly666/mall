<template>
    <div>
        <order-header></order-header>
        <router-view></router-view>
        <order-footer></order-footer>
    </div>
</template>
<script>
// 组件名称驼峰命名法
import OrderHeader from '@/components/orderHeader'
import OrderFooter from '@/components/orderFooter'
export default {
    name: 'order',
    data() {
        return {
            msg: 'nav-footer scoped'
        }
    },
    components: {
        OrderHeader,
        OrderFooter
    }  
    
}

</script>
<style scoped>
</style>