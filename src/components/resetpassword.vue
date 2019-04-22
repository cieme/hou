<template>
    <div style="display:none">
        <div :style='win'>
            <div :style='inner'>
                <p class="check">修改密码
                    <span>X</span>
                </p>
                <div class="inner_down">
                    <ul>
                        <li>
                            <span>*当前密码:</span><input type="text" ref='oldpwd'></li>
                        <li>
                            <span>*新密码:</span><input type="text" ref='newpwd'></li>
                        <li>
                            <span>*确认密码:</span><input type="text" ref='cpwd'></li>
                    </ul>
                    <button @click="confirm">确定</button>
                    <button @click='cancel'>取消</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import store from "../vuex/store"
import Axios from "axios"
export default {
    store,
    data() {
        return {
            win: {
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
                background: "rgba(255,255,255,0.6)",
                position: 'fixed',
                zIndex: '999',
                //   display:'none'
            },
            inner: {
                width: "400px",
                height: '400px',
                background: 'white',
                top: '0',
                bottom: '0',
                left: '0',
                right: "0",
                margin: "auto",
                border: "5px soild #4f66b",
                position: 'absolute',
            }
        }
    }, mounted() {/* 实力挂载之后 */

    }, methods: {
        cancel() {
            alert("11")
            console.log(store.state.updateElement.safe)
            store.state.updateElement.safe.display = "none"
        },
        //修改密码
        confirm() {
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminHandler?action=updatepass',
                method: 'post',
                data: {
                    userPwd: this.$refs.oldpwd.value,
                    newPwd: this.$refs.newpwd.value
                }

            }).then(function(res) {
                if (res.data.success) {
                    alert("密码修改成功")
                    store.state.updateElement.safe.display = "none"
                }else{
                     alert("密码修改失败")
                }

            })
        }

    }
}
</script>

<style>
.check {
    width: 100%;
    line-height: 30px;
    background: #4f66bb;
    height: 30px;
    color: #fff;
}

.check span {
    display: inline-block;
    float: right;
}

.inner_down {
    margin: 40px;
}

.inner_down ul li {
    line-height: 40px;
    text-align: right;
}

.inner_down ul li input {
    width: 220px;
    line-height: 20px;
    outline: none;
}

.inner_down button {
    width: 100px;
    height: 34px;
    color: #fff;
    border: none;
}

.inner_down button:nth-of-type(1) {
    float: left;
    background: red;
}

.inner_down button:nth-of-type(2) {
    float: right;
}
</style>
