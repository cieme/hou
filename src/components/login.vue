<template>
    <div>
        <bg></bg>
        <div class="wrap">
            <div class='logo'> <img src="../assets/back_logo.png" alt=""></div>


            <div class="username">
                <span class="icon icon-user"></span>
                <input type="text" placeholder="用户名" ref='username'>
            </div>
            <div class="password username">
                <span class="icon icon-lock"></span>
                <input type="text" placeholder="密码" ref='password'>
            </div>
            <div class="code username">
                <span class="icon icon-lock"></span>
                <input type="text" placeholder="验证码" style="width:65%;" ref="codes">
                <!-- v-model="msg" -->
                <fcCode></fcCode>
            </div>
            <button>忘记密码</button>
            <button @click="login">登陆</button>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
import bg from "./bgCanvas"
import fcCode from './code'  /* 组件加载组件 在script 引入 然后components(和data,methods 同级)  */
export default {
    name: 'login', /* 利于爬虫? */
    data() {
        return {
            msg: ''
        }
    }, mounted() {/* 实例挂载之后 全局执行的 */
        document.body.setAttribute('style', 'background:url("../../static/assets/images/index_body_bg.jpg") no-repeat center;overflow:hidden;background-size:cover')   /* 无兼容问题 参数一:style,src等 参数二设置*/
        //   document.body.style.background="red";    /* ie9 兼容性 */
        //   document.body.setAttribute('style','background-image:url("../assets/images/index_body_bg.jpg")')
    }
    , components: { fcCode ,bg},/* components  加载组件 注册组件  理解为注册一个局部组件  以标签的形式解析?*/
    methods: {
        login() {
            var that = this
            //   console.log(this.msg)
            //  console.log(this.$refs.username.value) /* refs 性能更为合适,react 里也有ref,并且没有v-model */
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminLoginAndRegHandler?action=checkVerification' + '&veri=' + this.$refs.codes.value,
                methods: 'get', /* post 使用data */
                //   params:{/* 当然get也可以直接拼接在URL */
                //     //    veri/* 后台字段 ?*/:this.$refs.codes.value  /* code上面的input 字段 */,
                //     veri:this.msg
                //   }
            }).then(function(res) {/* 相继的回调函数 */
                if (res.data.success) {/* 数据最外层有个data  */
                    Axios({
                        url: "http://127.0.0.1:3000/VueHandler/AdminLoginAndRegHandler?action=login",
                        method: 'post',
                        data: {
                            //  userName:this.$refs.username.value,   /* 这个涉及到函数嵌套函数,此处this 已经指向Axios 而不是login  */
                            userName: that.$refs.username.value, /* userName后台字段 */
                            password: that.$refs.password.value,/* password 后台字段 */
                        }
                    }).then(function(result) {    /*result  或者res 无所谓 data也行==随便  */
                        if (result.data.success) {
                            alert(result.data.success)
                            window.location = '/home'
                        }
                        //登陆成功 显示首页 路由   路由利用hash    
                        //    window.location.hash='/home'
                        //   window.location='#/home'/* 假的== */
                        // 路由有两种模式  哈希和history
                    })
                }
            })
        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

.wrap {
    position: absolute;
    left: 50%;
    width: 380px;
    height: 250px;
    margin-left: -190px;
    top: 50%;
    margin-top: -125px;
    /* border: 1px solid gray; */
    text-align: center;
}

.username {
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
}

.username span {
    display: block;
    float: left;
    width: 29px;
    height: 32px;
    border: 1px solid #3c498b;
    border-right: none;
    color: white;
    line-height: 32px;
}

.username input {
    width: 340px;
    height: 32px;
      color:white;
    outline: none;
    border: 1px solid #3c498b;
    background: transparent;
    float: left;
}

button {
    border: none;
    width: 100px;
    height: 34px;
    color: white;
    cursor: pointer;
}

button:nth-of-type(1) {
    background: #1f8fb0;
    float: left;
    outline: none;
}

button:nth-of-type(2) {
    background: #449d44;
    float: right;
    outline: none;
}
</style>


