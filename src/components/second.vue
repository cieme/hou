<template>
    <div class="second">
        <!-- 根元素 -->
        <div class="header">
            <div class="headerbox">
                <a href=""> <img class="backlogo" src="../assets/back_logo.png" alt=""></a>
            </div>
            <ul>
                <li>
                    <span class="pic icon icon-globe"></span>卓新思创</li>
                <li>
                    <span class="pic icon icon-comment"></span>在线客服</li>
                <li>
                    <span class="pic icon icon-book"></span>常见问题</li>
                <li>
                    <span class="pic icon icon-lock"></span>安全中心</li>
                <li>
                    <span class="pic icon icon-sign-out"></span>退出</li>
                <li>账号</li>
                <li style="width:50px;height:50px">图片</li>
            </ul>
        </div>
        <!-- header结束 -->
        <div class="header_select">

            <div class="guanli user_guanli">
                <span class='icon icon-user'> </span> 用户管理
                <div class="list-down list_user_down">
                    <span class="choose">
                        <span class="choose1">系统人员</span>
                        <span>学员管理</span>
                    </span>

                    <!-- <span class="choose"></span> -->

                </div>
                <div class="l-t"></div>
                <div class="r-b"></div>
            </div>
            <div class="guanli courses_guanli">
                <span class="icon icon-book "> </span>课程管理
                <div class="l-t"></div>
                <div class="r-b"></div>
                <div class="list-down list_courses_down">
                    <span class="choose">
                        <span class="choose1">课程列表</span>
                        <span>添加课程</span>
                        <span>视频管理</span>
                    </span>
                </div>

            </div>

        </div>
        <!-- header_select结束 -->
        <div class="lists-six">
            <ul>
                <li class="first">
                    <p class="title_cn">课程列表</p>
                    <p class="title_en">Course List</p>
                    <p class="title_pic icon icon-th-large"></p>
                </li>
                <!-- six1 -->

                <li>
                    <p class="title_cn">添加课程</p>
                    <p class="title_en">Course Add</p>
                    <p class="title_pic icon icon-plus"></p>
                </li>
                <!-- six2 -->
                <li>
                    <p class="title_cn">课程置顶</p>
                    <p class="title_en">Course Up</p>
                    <p class="title_pic icon icon-circle-arrow-up"></p>
                </li>
                <!-- six3 -->
                <li>
                    <p class="title_cn">视频管理</p>
                    <p class="title_en">Video Mange</p>
                    <p class="title_pic icon icon-camera"></p>
                </li>
                <!-- six4 -->
                <li>
                    <p class="title_cn">用户管理</p>
                    <p class="title_en">Use Mange</p>
                    <p class="title_pic icon icon-user"></p>
                </li>
                <!-- six5 -->
                <li>
                    <p class="title_cn">学员管理</p>
                    <p class="title_en">Student Mange</p>
                    <p class="title_pic icon icon-file"></p>
                </li>
                <!-- six6 -->
            </ul>
        </div>
    </div>
</template>
<script>

</script>
<style>
* {
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

ul,
li,
ol {
    list-style: none;
}

.header {
    height: 52px;
    background: #222222;
}

.headerbox {
    float: left;
}

.backlogo {
    display: block;
    margin-left: 15px;
    margin-top: 5px;
}

.header ul {
    float: right;
    margin-right: 20px;
}

.header ul li {
    float: left;
    color: #9d9d9d;
    margin-left: 30px;
    line-height: 52px;
}




/* .header ul li span {} */

.header_select {
    height: 50px;
    background: #4c5c9d;
    position: relative;
}

.guanli {
    float: left;
    color: white;
    line-height: 50px;
    position: relative;
    cursor: pointer;
    text-align: center;
    /* width: 92px; */
}

.user_guanli {
    margin-left: 150px;
    margin-right: 60px;
}

.guanli .icon {
    margin-right: 10px;
}

.guanli:hover .l-t,
.guanli:hover .r-b {
    display: block;
}

.pic {
    margin-right: 10px;
}

.l-t,
.r-b {
    position: absolute;
    width: 10px;
    height: 10px;
    display: none;
}

.l-t {
    left: -10px;
    top: 10px;
    border-top: 2px solid white;
    border-left: 2px solid white;
}

.r-b {
    right: -10px;
    bottom: 10px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
}

.list-down {
    /* position: relative; */
    position: absolute;
    height: 140px;
    width: 100vw;
    top: 50px;
    background: white;
}

.list_user_down {
    left: -150px;
    display: none;
}

.list_courses_down {
    left: -301px;
    display: none;
}

.user_guanli:hover .list_user_down {
    display: block;
}

.courses_guanli:hover .list_courses_down {
    display: block;
}

.choose span {
    display: block;
    width: 247px;
    height: 40px;
    border: 1px solid #ececec;
    float: left;
    line-height: 40px;
    text-align: center;
    color: #6e6e6e;
    margin-left: 34px;
    margin-top: 44px;
}

.choose .choose1 {
    margin-left: 103px;
}




/* -----------------------------two */

.lists-six {
    width: 100%;
    height: 400px;
    background: #243378;
    padding-top: 250px;
    text-align: center;
}

.lists-six ul {
    width: 1150px;
    overflow: hidden;
    display: block;
    margin: 0 auto;
}

.lists-six li {
    width: 150px;
    float: left;
    margin-left: 50px;
    height: 200px;
    background-color: rgba(255,255,255,0.2);
    position: relative;
}

.lists-six li:nth-of-type(1) {
    margin-left: 0;
}


/* .lists-six .first{

} */

.lists-six li p {
    color: white;
    position: absolute;
    width: 100%;
    transition: all 0.5s;
}

.lists-six li .title_cn {
    font-size: 24px;
    top: 10%;
}

.lists-six li .title_en {
    font-size: 12px;
    top: 41.5%;
}

.lists-six li .title_pic {
    font-size: 35px;
    top: 61.5%;
    left: 0;
}

.lists-six li:hover .title_cn {
    top: 53%;
}

.lists-six li:hover .title_en {
    top: 87%;
}

.lists-six li:hover .title_pic {
    top: 17%;
}
</style>

