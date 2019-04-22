<template>
    <div>
          <RsetPwd ref='pwd'></RsetPwd>  
        <div class="header_wrap">
            <div class="logo_wrap">
                <img src="../../static/assets/back_logo.png" alt="">
            </div>
            <div class="header_nav">
                <ul>
                    <li>
                        <span class="icon icon-globe"></span>
                        <span>卓新思创</span>
                    </li>
                    <li>
                        <span class="icon icon-comment"></span>
                        <span>在线客服</span>
                    </li>
                    <li>
                        <span class="icon icon-book"></span>
                        <span>常见问题</span>
                    </li>
                    <li @click="safe">
                        <span class="icon icon-lock"></span>
                        <span>安全中心</span>
                    </li>
                    <li @click="exit">
                        <span class="icon icon-exit"></span>
                        <span>退出</span>
                    </li>
                    <li>
                        <span>{{user}}</span>
                        <span><img src="../../static/assets/touxiang.jpg" alt="" style="vertical-align:middle"></span>
                    </li>
                </ul>
            </div>
            <div class="nav_wrap">
                <div class="main_nav">
                    <ul>
                        <li @mouseover="userShow" @mouseout='userHide'>
                            <a href="">
                                <span class="icon icon-user"></span>
                                <span>用户管理</span>
                            </a>
                        </li>
                        <li @mouseover="lessonShow" @mouseout="lessonHide">
                            <a href="">
                            <span class="icon icon-book"></span>
                            <span>课程管理</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav_content_wrap">
                <div class="one_nav_content_wrap" v-show='personList' @mouseover="userShow" @mouseout="userHide">
                    <ul class="one_nav_content">
                        <li @click="goAdmin">系统人员</li>
                        <li @click='goStu'>学员管理</li>
                    </ul>
                </div>
                <div class="one_nav_content_wrap" v-show="lessonList" @mouseover="lessonShow" @mouseout="lessonHide">
                    <ul class="one_nav_content">
                        <li>课程列表</li>
                        <li>添加课程</li>
                        <li>视频管理</li>
                    </ul>
                </div>
            </div>
        </div>
     
    </div>
</template>

<script>
import Axios from 'axios'
import store from "../vuex/store"  /* 11.引入VUEX */
import RsetPwd from "./resetpassword"
export default {
    store, /* store */   /* 22.放进来 */
    data() {
       
        return {
            personList: false,
            lessonList: false,
            user:''
        }
    }, methods: {
        userShow() {
            this.personList = true
        },
        lessonShow() {
            this.lessonList = true
        },
        userHide() {
            this.personList = false
        },
        lessonHide() {
            this.lessonList = false
        }
        ,
        //退出
        exit() {
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminHandler?action=quit',
                method: 'get'

            }).then(function(res) {
                if (res.data.success) {
                    alert("管理员退出成功")
                    window.location='/'
                }
            })
        },
        getInfo() {
            var that=this
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminLoginAndRegHandler?action=returnuserinfo',
                method: 'post'
                // data: { }    此时是取数据 而不发送    所以不需要data 
            }).then(function(res) {
                that.user=res.data.data.turename   /* 路径 res 嵌套一个隐藏的data,里面还包含一个data字段*/
            
            })
        },
        //修改密码
        safe(){
         console.log(this.$refs)
         this.$refs.pwd.$el.style='display:block'
         store.state.updateElement.safe=this.$refs.pwd.$el.style
         console.log(store.state.updateElement.safe)
        },
        // 进入系统人员
        goAdmin(){
            window.location='/admin'
        },
        goStu(){
            // window.location='/gostu'
            window.location='/student'
        }
    },
    mounted() {
      this.getInfo()
    },
    components:{
        RsetPwd
    }

}
</script>

<style>

.main_nav ul li a{
    color: inherit;
    text-decoration: none;
}
.main_nav ul li a::before {
      width: 10px;
    height: 10px;
    content: '';
       border: 1px solid white;
    border-right: transparent;
    border-bottom: none;
    opacity: 0;
    display: inline-block;
   
}

.main_nav ul li a::after {
      width: 10px;
    height: 10px;
    content: '';
       border: 1px solid white;
    border-left: transparent;
    border-top: none;
    display: inline-block;
  
    opacity: 0;
}

.main_nav ul li:hover a::before {
    opacity: 1;
}

.main_nav ul li:hover a::after {
    opacity: 1;
}
.header_nav li span{
    color:white;
}
</style>

