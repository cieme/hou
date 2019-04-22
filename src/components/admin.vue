<template>
    <div>
        <Addadmin  ref='adddd' @receive='getAdminList'></Addadmin>
        <!-- ref="adminShow" -->
        <!-- /* receive 1.自定义事件 传递这个方法*/ -->
        <!-- v-show='ashow'  @close='ishide'-->
        <!-- <Updateadmin ref="updateshow"></Updateadmin> -->
        <fcHeader></fcHeader>
        <!-- 面包屑导航 -->
        <div class="admin_wrap">
            <div class="admin_bread">
                <el-breadcrumb separator="-">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>系统人员</el-breadcrumb-item>
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <!-- bread 面包结束 -->

            <div class="admin_search_wrap">
                <el-input placeholder="请输入内容" class="admin_search_input" v-model="text"></el-input>
                <el-button type="success" class="admin_search_search" @click='search'>查询</el-button>
                <el-button type="primary" class="admin_search_add" @click="add">+添加</el-button>
            </div>
            <!-- admin_search_wrap结束 -->
            <div>

                <el-table style="width: 100%" :data="tableData">

                    <el-table-column prop="userName" label="用户名">
                    </el-table-column>
                    <el-table-column prop="turename" label="姓名(唯一性,查询条件,turename)">
                    </el-table-column>
                    <el-table-column prop="power" label="后台权限">
                        <!-- label列名 -->
                    </el-table-column>
                    <el-table-column prop="phone" label="手机">
                    </el-table-column>
                    <el-table-column prop="upDateAt" label="编辑日期">
                    </el-table-column>
                    <el-table-column prop="tokenId" label="操作">
                        <template scope="scope">
                            <el-button type="text" size="small" @click="del(scope.$index,scope.row)">删除</el-button>
                            <el-button type="text" size="small" @click='edit(scope.$index,scope.row)'>编辑</el-button>
                            <!-- @click="update(scope.$index,scope.row)" -->
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <!-- admin_wrap结束 -->
        <div>
            <el-pagination @current-change='handleCurrentChange' layout="prev, pager, next" :total="shu" :page-size='3'>
                <!--:page-size='3'每页三条  -->
            </el-pagination>
        </div>

    </div>
</template>

<script>
import Vue from "vue"
import fcHeader from './header'         /* 不能写header 关键字 */
import Element from 'element-ui'       /* 它相当于一个全局映射,node__modules 里有,所以可以直接写这个组件 */
import "element-ui/lib/theme-default/index.css"  /* node__modules 里面的路径  引入emelment-ui 的css */
import Addadmin from './addadmin'
// import Updateadmin from "./updateadmin"
import store from "../vuex/store"
import Axios from 'axios'
Vue.use(Element)   /* Vue.use(Element) 只有这个会报错 Vue is not defined,因为没引入Vue  所以我们需要引入Vue*/
export default {
    store,
    mounted() {
        document.body.setAttribute('style', 'background:#eee !important')/* 为什么没效果,权重不够,此时想办法增加权重 */
        this.getAdminList()

        console.log(this.$refs.adddd.$refs.name.value)
    },
    components: { fcHeader, Addadmin },
    // Updateadmin
    data() {
        return {
            tableData: [],
            shu: 0,
            page: 1,
            text: '',
            pageSize: 0,
            turenamekey: '',
            phonekey: "",
            // ashow:false,

        }
    },
    methods: {
        getAdminList(page, pageSize) {
            var that = this
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminHandler?action=show',
                method: 'get',
                params: {
                    pageStart: that.page,/* 第几页 */
                    searchText: that.text,
                }
            }).then(function(res) {
                if (res.data.data) {
                    that.tableData = res.data.data.list
                    that.shu = res.data.data.count
                    that.pageSize = res.data.data.pageSize
                } else {
                    alert("没有此用户")
                }

            })
        },
        handleCurrentChange(val) {
            //   console.log(`当前页: ${val}`);
            this.page = val
            this.getAdminList()
        },
        search() {/* 查询的是姓名 turename*/
            this.getAdminList(this.page, this.pageSize)
        },
        //删除
        del(index, row) {
            var that = this
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminHandler?action=delete',
                type: "get",
                params: {
                    tokenId: row.tokenId
                }
            }).then(function(res) {
                alert(res.data.success)
                that.getAdminList()
            })
        }, add(index,row) {
            // this.$refs.adminShow.$el.style = 'display:block'
             //store.state.updateElement.safe = this.$refs.adminShow.$el.style
            this.$refs.adddd.$el.style = 'display:block'
            store.state.updateElement.safe = this.$refs.adddd.$el.style
         
            /* this.ashow=true */
          
        },
        edit(index,row){
             this.$refs.adddd.$el.style = 'display:block'
            store.state.updateElement.safe = this.$refs.adddd.$el.style
              this.$refs.adddd.$refs.name.value = row.turename
            this.$refs.adddd.$refs.username.value = row.userName
            this.$refs.adddd.$refs.phone.value = row.phone
            this.$refs.adddd.$refs.power.value = row.power
            this.$refs.adddd.$refs.token.value = row.tokenId
            //   console.log(this.$refs.adddd.$refs.token.value)
              console.log(this.$refs.adddd.$refs)

        },
        //编辑用户信息
        update(index, row) {
            // this.$refs.updateshow.$el.style = 'display:block'
            // store.state.updateElement.safe = this.$refs.updateshow.$el.style
            this.$refs.adddd.$el.style = 'display:block'
            store.state.updateElement.safe = this.$refs.adddd.$el.style
            // console.log(index)
            // console.log(row.turename)
            // console.log(row.phone)
            // store.state.updateElement.storeupdated = row.turename
            store.state.updateElement.storeupdated.tokenId = row.tokenId
            // store.state.updateElement.storeupdated.turename= row.turename/* 测试用属性 */
            console.log(store.state.updateElement.storeupdated)

        }, ishide() {
            /* this.ashow=false */
        }
    }
}
</script>
<style>
.admin_wrap {
    padding: 10px;
    /* position: relative;
    z-index: 200; */
    /* 有啥子用嘛 */
}




/* .admin_search_input {
    width: 500px;
} */

.el-input {
    width: 500px;
}

.admin_search_wrap {
    padding: 10px 20px 10px 10px;
    border: 1px solid #ccc;
    width: 96%;
    margin: 0 auto
}

.admin_search_add {
    float: right;
    width: 130px;
}

.admin_search_search {
    width: 130px;
}

.admin_bread {
    margin-bottom: 10px;
}
</style>
