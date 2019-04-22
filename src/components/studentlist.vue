<template>
    <div>
        <!-- <Addadmin ref="pwd"></Addadmin>
                                                                <Updateadmin ref="updateshow"></Updateadmin> -->
        <fcHeader></fcHeader>
        <!-- 把头部拿过来 -->
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

            <div class="admin_search_wrap" width='100%'>
                <el-input placeholder="用户名" class="admin_search_input" style="width:180px"></el-input>
                <el-input placeholder="邮箱" class="admin_search_input" style="width:180px"></el-input>
                <el-input placeholder="手机号" class="admin_search_input" style="width:180px"></el-input>
                <el-button type="success" class="admin_search_search">查询</el-button>

            </div>
            <!-- admin_search_wrap结束 -->
            <div>

                <el-table style="width: 100%" :data="tableData">

                    <el-table-column prop="userName" label="用户名">
                    </el-table-column>
                    <el-table-column prop="email" label="邮箱">
                    </el-table-column>
                    <el-table-column prop="phone" label="手机">
                        <!-- label列名 -->
                    </el-table-column>
                    <el-table-column prop="createAt" label="注册日期">
                    </el-table-column>
                    <el-table-column prop="isstate" label="状态">
                        <template scope="scope">
                            <!-- {{scope.row.isstate}} -->
                            <el-button type="text" size="small" :class="{red:scope.row.isstate}">{{scope.row.isstate?"已冻结":"正常"}}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="tokenId" label="操作">
                        <template scope="scope">
                            <el-button type="text" size="small" @click="lockUser(scope.$index,scope.row)">{{scope.row.isstate?"解冻":"冻结"}}</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <!-- admin_wrap结束 -->
        <div>
            <el-pagination layout="prev, pager, next" @current-change='changestu' :total="count" :page-size='3'>
                <!-- @current-change='changestu' :total="shu" :page-size='3' -->
                <!-- @current-change=''当前页发生改变 :page-size='3'每页三条-->
            </el-pagination>
        </div>

    </div>
</template>

<script>
import Vue from "vue"
import Element from 'element-ui'
import "element-ui/lib/theme-default/index.css"
import Axios from 'axios'
import fcHeader from "./header"
Vue.use(Element)
export default {
    components: { fcHeader },
    data() {
        return {
            tableData: [],
            count: 1,
            pageindex: 1
        }
    },
    mounted() {
        document.body.setAttribute('style', 'background:#eee!important')
        this.getStudentlist()
        // this.changestu() 你有病吧加这行
    },
    methods: {
        getStudentlist() {
            var that = this
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminHandler?action=usershow',
                method: "post",
                data: {
                    userName: '',
                    email: "",
                    phone: '',
                    pageStart: this.pageindex,

                }
            }).then(function(res) {
                that.tableData = res.data.data.list
                that.count = res.data.data.count
            })
        },
        //冻结
        lockUser(index, row) {
            var that = this
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminHandler?action=lockuser',
                method: "get",
                params: {
                    tokenId: row.tokenId,
                    // email: this.semail,
                    // phone: this.sphone,
                    // pageStart: this.page,
                }
            }).then(function(res) {
                alert(res.data.success)
                this.getStudentlist()
            }.bind(this))
        }, changestu(val) {
            this.pageindex = val
            this.getStudentlist()
        }
    }
}
</script>

<style>
.red{
    color: red
}
</style>
