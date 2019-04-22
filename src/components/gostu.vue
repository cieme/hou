<template>
    <div>
        <!-- <Addadmin ref="pwd"></Addadmin>
                                            <Updateadmin ref="updateshow"></Updateadmin> -->
        <fcHeader></fcHeader><!-- 把头部拿过来 -->
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
                <el-input placeholder="用户名" class="admin_search_input" v-model="sturename"></el-input>
                <el-input placeholder="邮箱" class="admin_search_input" v-model="semail"></el-input>
                <el-input placeholder="手机号" class="admin_search_input" v-model="sphone"></el-input>
                <el-button type="success" class="admin_search_search" @click='showstu'>查询</el-button>

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
                            {{scope.row.isstate}}
                        </template>
                    </el-table-column>
                    <el-table-column prop="tokenId" label="操作">
                        <template scope="scope">
                            <el-button type="text" size="small" @click="ice(scope.$index,scope.row)">冻结</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <!-- admin_wrap结束 -->
        <div>
            <el-pagination layout="prev, pager, next" @current-change='changestu' :total="shu" :page-size='3'>
                <!-- @current-change=''当前页发生改变 :page-size='3'每页三条-->
            </el-pagination>
        </div>

    </div>
</template>
<script>
import fcHeader from './header'
import Axios from 'axios'
export default {
    components: { fcHeader },
    data() {
        return {
            tableData: [],
            sturename: "",
            semail: "",
            sphone: "",
            shu: 1,/* 所有的学员count数量 */
            page: 1,/* 第几页 */
            //-----------------
            // userName: '',
            // email: '',
            // phone: '',
            // tokenId: '',
            // createAt: '',
            // isstate: '',

        }
    }, methods: {
        showstu() {
            var that = this
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminHandler?action=usershow',
                method: "post",
                data: {
                    // userName:'',
                    // email: '',
                    // phone: '',
                    // tokenId: '',
                    // createAt: '',
                    // isstate: '',
                    userName: this.sturename,
                    email: this.semail,
                    phone: this.sphone,
                    pageStart: this.page,              /* ?必须加引号 */
                }
            }).then(function(res) {
                if (res.data.success) {
                    that.tableData = res.data.data.list
                    that.shu = res.data.data.count
                }
            })
        }, changestu(val) {
            this.page = val
            this.showstu()
        },
        ice(index, row) {
            var that = this
            row.isstate = !row.isstate
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminHandler?action=lockuser',
                type: "get",
                params: {
                    isstate: row.isstate
                }
            }).then(function() {
                if (row.isstate == true) {

                    console.log("冻结成功")
                    console.log(that.tableData[0].isstate)
                } if (row.isstate == false) {
                    console.log("解冻成功")
                    console.log(that.tableData[0].isstate)
                }
            })
        }
    }, mounted() {
        this.showstu()
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

