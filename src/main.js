import Vue from 'vue'
import router from './router'
import axios from 'axios'
// 将axios挂载到每个vue实例的作用域上方便用this调用

import VueAxios from 'vue-axios'

// 组件
import App from './App.vue'
import env from './eny'

// 生产环境提示
// 根据前端的跨域方式做调整 接口代理 /a/b: /api/a/b => /a/b
// axios.defaults.baseURL = '/api'
// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL
console.log(env.baseURL)
axios.defaults.timeout = 8000

// 接口错误拦截 
axios.interceptors.response.use(function(response) {
  let res = response.data
  if(res.status == 0) {
    return res.data
  } else if(res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
  
})


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
