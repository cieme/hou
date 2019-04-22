<template>
    <div id="shouye">
        <div class="bg">
            <div class="inner">
                
                <div class="wrap">
                    <div class="logowrap"><img class='logo' src="../assets/back_logo.png" alt=""></div>
                    <div class="inputwrap">
                        <span class="fa fa-user"></span><input type="text" placeholder="用户"></div>
                    <div class="inputwrap">
                        <span class='fa fa-lock'></span><input type="password" placeholder="密码"></div>
                    <div class="inputwrap">
                        <span class='fa fa-lock'></span><input type="text" placeholder="验证码"> <span id='Verification'></span>  </div>

                    <div class="forget btn">忘记密码</div>
                    <div class="login btn">登陆</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data(){
        return{

        }
    },mounted(){/* 实例挂载之后 全局执行的 */
    //   document.body.setAttribute('style','background:#0d1953')   /* 无兼容问题 */
    //   document.body.style.background="red";    /* ie9 兼容性 */
    //  document.body.setAttribute('style',"background:url('../../static/assets/images/index_body_bg.jpg')")
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

body,
html {
    width: 100%;
    height: 100%;
}

#shouye {
    width: 100%;
    height: 100%;
}

.inner {
    margin: 0 auto;
    width: 380px;
    overflow: hidden;
}

.bg {
    /* background-image: url("../assets/images/index_body_bg.jpg");
    background-size:cover;
    width: 100%;
    height: 100%; */
}

.logowrap {
    text-align: center;
}

.wrap {
    width: 380px;
    height: 240px;
    /* background-color: rgba(100, 100, 100, 0.7); */
    position: absolute;
    top: 50%;
    margin-top: -120px;
}

.inputwrap {
    margin-bottom: 23px;
    position: relative;
}

.inputwrap:nth-of-type(2) {
    margin-bottom: 0;
    margin: 30px
}

.inputwrap::after {
    display: block;
    content: "";
    clear: both;
}

.inputwrap>span {
    float: left;
    width: 29px;
    height: 34px;
    display: block;
    border: 1px solid gray;
    background: transparent;
    color: #ffffff;
    font-size: 20px; 
    text-align: center;
    line-height: 34px;   
}

.inputwrap>input {
    border: 1px solid gray;
    outline: none;
    width: 340px;
    height: 34px;
    float: left;
    font-size: 12px;
    background: transparent;
}
#Verification{
    width: 100px;
    height: 35px;
    background: white;
    position: absolute;
    right: 0;
}
.btn {
    width: 100px;
    height: 30px;
    background: #ddddde;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    position: absolute;
    bottom: 0;
}

.forget {
    float: left;
    left: 0;
}

.login {
    float: right;
    right: 0;
}
</style>
