// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Login from './components/login'
// import shouye from './components/shouye'
import second from './components/second'
import third from './components/third'
import router from './router'
// import echarts from 'echarts'

import Axios from 'axios' /* 与下面配合解决跨域*/
//允许跨域访问请求
Axios.defaults.withCredentials = true /*axios就可以设置cookies了 */
    // import './assets/fonts/css/font-awesome.css'
    // Vue.prototype.$echarts = echarts /* 和之前介绍的 axios 类似，echarts 也不能通过 Vue.use() 进行全局调用 也可以在 main.js 中引入，然后修改原型链*/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    /* index 的那个盒子? */
    router,
    // template: '<shouye/>',
    // components: { shouye }
})