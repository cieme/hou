<template>
    <div style="display:none"><!--   -->
        <div :style='win'>
            <div :style='inner'>
                <p class="check">管理员添加
                    <span @click='addadminhide' class="x">X</span>
                </p>
                <div class="inner_down">
                    <ul>
                        <!-- <li>
                            <span>*ID:</span><input type="text" ref='Id'></li> -->
                        <li>
                            <span>*姓名:</span><input type="text" ref='name'></li>
                        <li>
                            <span>*手机号:</span><input type="text" ref='phone'></li>
                        <li>
                            <span>*权限编码:</span>
                            <select ref='power'>
                                <option value="1">系统管理员1</option>
                                <option value="0">课程管理员0</option>
                            </select>
                          </li> 
                    </ul>
                    <button @click="sureupdate">确定</button>
                    <button @click='addadminhide'>取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import store from "../vuex/store"  /* 11.引入VUEX */
export default {
    store,
        data() {
        return {
            win: {
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
                background: "rgba(255,255,255,0.6)",
                position: 'absolute',
                zIndex: '999',
                //   display:'none'
            },
            inner: {
                width: "400px",
                height: '300px',
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
    },
    methods: {
        cancel(){
        store.state.updateElement.safe.display='none'
    },
        sureupdate() {
            var that=this
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminHandler?action=update',
                method: 'post',
                data: {
                    tokenId:store.state.updateElement.storeupdated.tokenId,
                    turename:this.$refs.name.value,
                    phone:this.$refs.phone.value,
                    powerCode:this.$refs.power.value
                }
            }).then(function(res){
               if(res.data.success){
                    alert(res.data.success)                   
                     store.state.updateElement.safe.display = "none"
               }
            })
        },addadminhide(){
              store.state.updateElement.safe.display='none'
        }
    },
    mounted(){
        
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
    margin: 15px;
}

.inner_down ul li {
    line-height: 40px;
    text-align: right;
}

.inner_down ul li input {
    width: 250px !important;
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
.x{
    cursor: pointer;
    margin-right: 10px;
}
</style>

