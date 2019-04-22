import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/components/login'
// import shouye from '@/components/shouye'
import second from '@/components/second'
import third from '@/components/third'
import Homes from '@/components/home.vue'
import Header from '@/components/header.vue'
import Gostu from '@/components/gostu'
import Student from '@/components/studentlist'
import Admin from '@/components/admin.vue'
// import '../assets/fonts/css/font-awesome.css'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            name: 'Login',
            /* 搜索爬虫引擎好搜索 */
            /* 可以不写 */
            component: Login
        },
        {
            path: '/second',
            name: 'second',
            component: second
        },
        {
            path: '/third',
            name: 'third',
            component: third
        }, {
            path: '/header',
            name: 'Header',
            component: Header
        }, {
            path: '/home',
            name: 'Home',
            component: Homes
        }, {
            path: '/admin',
            name: 'admin',
            component: Admin
        }, {
            path: '/gostu',
            name: 'Gostu',
            component: Gostu
        }, {
            path: '/student',
            name: 'Student',
            component: Student
        }
    ]
})